"use server"

import { Resend } from "resend"
import { ZodFormattedError, z } from "zod"

const contactFormSchema = z.object({
  "cf-turnstile-response": z.string(),
  firstName: z.string().trim().min(1, {
    message: "You must provide your first name",
  }),
  lastName: z.string().trim().min(1, {
    message: "You must provide your last name",
  }),
  email: z.string().email({
    message: "You must provide an email address",
  }),
  message: z.string().trim().min(10, {
    message: "You must provide a message",
  }),
  company: z.string().optional(),
})

type ContactForm = z.infer<typeof contactFormSchema>

type SubmitContactFormResult = {
  success: boolean
  errors?: ZodFormattedError<ContactForm>
}

export const submitContactForm = async (
  _: any,
  formData: FormData,
): Promise<SubmitContactFormResult> => {
  const parsed = contactFormSchema.safeParse({
    "cf-turnstile-response": formData.get("cf-turnstile-response"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"),
  })

  if (!parsed.success) {
    const formatted = parsed.error.format()

    return {
      success: false,
      errors: formatted,
    }
  }

  const turnstileTokenValid = await validateTurnstileToken(
    parsed.data["cf-turnstile-response"],
  )
  if (!turnstileTokenValid) {
    return {
      success: false,
      errors: {
        "cf-turnstile-response": {
          _errors: ["Invalid Catcha"],
        },
        _errors: ["Invalid Captcha"],
      },
    }
  }

  const {
    data: { email, firstName, lastName, message, company },
  } = parsed

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: "contact@mathieubrochard.com",
    to:
      process.env.VERCEL_ENV === "production"
        ? "mathieu.brochard@outlook.com"
        : "delivered@resend.dev",
    subject: "Message from mathieubrochard.com",
    html: `
      <p>You have a message from:</p>
      
      <ul>
        <li>${firstName} ${lastName}</li>
        <li>${email}</li>
        <li>${company || "No company given"}</li>
      </ul>

      <p>${message}</p>
    `,
  })

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
  }
}

type TurnstileResponse = {
  success: boolean
}

const validateTurnstileToken = async (token: string): Promise<boolean> => {
  const secretKey =
    process.env.NODE_ENV === "development"
      ? "1x0000000000000000000000000000000AA"
      : process.env.TURNSTILE_SECRET_KEY
  if (!secretKey) {
    throw new Error("Missing TURNSTILE_SECRET_KEY in environment variables")
  }

  const formData = new FormData()
  formData.append("secret", secretKey)
  formData.append("response", token)

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    },
  )

  const data = (await response.json()) as TurnstileResponse

  console.log(data)

  return data.success
}
