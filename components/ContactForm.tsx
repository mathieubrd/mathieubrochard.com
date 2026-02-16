"use client"

import { submitContactForm } from "@/app/actions"
import { EnvelopeIcon, RocketLaunchIcon } from "@heroicons/react/24/solid"
import {
  Button,
  TextField,
  Input,
  TextArea,
  Label,
  FieldError,
} from "@heroui/react"
import clsx from "clsx"
import { TurnstileWidget } from "./TurnstileWidget"
import { useActionState, useState } from "react"

type ContactFormProps = {} & React.HTMLAttributes<HTMLDivElement>

export const ContactForm: React.FC<ContactFormProps> = ({
  className,
  ...props
}) => {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [turnstileValid, setTurnstileValid] = useState(false)

  return (
    <div className={clsx(className, "w-full")} {...props}>
      <form action={formAction} className="mx-auto">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <TextField
            isRequired
            isDisabled={state?.success}
            isInvalid={!!state?.errors?.firstName}
          >
            <Label>First name</Label>
            <Input
              type="text"
              name="firstName"
              autoComplete="given-name"
              placeholder="Walter"
            />
            <FieldError>{state?.errors?.firstName?._errors}</FieldError>
          </TextField>

          <TextField
            isRequired
            isDisabled={state?.success}
            isInvalid={!!state?.errors?.lastName}
          >
            <Label>Last name</Label>
            <Input
              type="text"
              name="lastName"
              autoComplete="family-name"
              placeholder="Sobchack"
            />
            <FieldError>{state?.errors?.lastName?._errors}</FieldError>
          </TextField>

          <div className="sm:col-span-2">
            <TextField
              isDisabled={state?.success}
              isInvalid={!!state?.errors?.company}
            >
              <Label>Company</Label>
              <Input
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Hollywood Star Lanes"
              />
              <FieldError>{state?.errors?.company?._errors}</FieldError>
            </TextField>
          </div>

          <div className="sm:col-span-2">
            <TextField
              isRequired
              isDisabled={state?.success}
              isInvalid={!!state?.errors?.email}
            >
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="walter.sobchak@overtheline.com"
              />
              <FieldError>{state?.errors?.email?._errors}</FieldError>
            </TextField>
          </div>

          <div className="sm:col-span-2">
            <TextField
              isRequired
              isDisabled={state?.success}
              isInvalid={!!state?.errors?.message}
            >
              <Label>Your message</Label>
              <TextArea
                name="message"
                placeholder="This is not 'nam. This is bowling. There are rules."
                rows={5}
              />
              <FieldError>{state?.errors?.message?._errors}</FieldError>
            </TextField>
          </div>

          {state?.errors?.["cf-turnstile-response"] && (
            <span className="text-red-700 text-center sm:col-span-2">
              Invalid captcha
            </span>
          )}

          <div className="sm:col-span-2 flex justify-center">
            <TurnstileWidget onVerify={() => setTurnstileValid(true)} />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          {state?.success ? (
            <Button
              variant="outline"
              className="border-success text-success"
              isDisabled
            >
              Thanks for your message!
              <RocketLaunchIcon className="w-5" />
            </Button>
          ) : (
            <SubmitButton disabled={!turnstileValid} sending={isPending} />
          )}
        </div>
      </form>
    </div>
  )
}

const SubmitButton: React.FC<{ disabled?: boolean; sending?: boolean }> = ({
  sending,
  disabled,
}) => {
  return sending ? (
    <Button type="submit" variant="primary" size="md" isDisabled>
      Sending...
    </Button>
  ) : (
    <Button type="submit" variant="primary" size="md" isDisabled={disabled}>
      <EnvelopeIcon className="w-5" />
      Send
    </Button>
  )
}
