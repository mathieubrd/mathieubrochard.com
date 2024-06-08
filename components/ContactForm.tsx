"use client"

import { submitContactForm, ContactFormData } from "@/app/actions"
import { EnvelopeIcon, RocketLaunchIcon } from "@heroicons/react/24/solid"
import { Button, ButtonProps, Input, Textarea } from "@nextui-org/react"
import clsx from "clsx"
import { useFormState, useFormStatus } from "react-dom"
import { TurnstileWidget } from "./TurnstileWidget"
import { useState } from "react"
import { useForm } from "react-hook-form"

type ContactFormProps = {} & React.HTMLAttributes<HTMLDivElement>

export const ContactForm: React.FC<ContactFormProps> = ({
	className,
	...props
}) => {
	const { register, handleSubmit } = useForm<ContactFormData>()
	const [state, formAction] = useFormState(submitContactForm, null)
	const [turnstileValid, setTurnstileValid] = useState(false)

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<div className={clsx(className, "w-full")} {...props}>
			<form action={onSubmit} className="mx-auto">
				<div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
					<Input
						type="text"
						autoComplete="given-name"
						placeholder="Walter"
						label="First name"
						isRequired
						isDisabled={state?.success}
						errorMessage={state?.errors?.firstName?._errors}
						size="sm"
						{...register('firstName')}
					/>

					<Input
						type="text"
						autoComplete="family-name"
						placeholder="Sobchack"
						label="Last name"
						isRequired
						isDisabled={state?.success}
						errorMessage={state?.errors?.lastName?._errors}
						size="sm"
						{...register('lastName')}
					/>

					<div className="sm:col-span-2">
						<Input
							type="text"
							autoComplete="organization"
							label="Company"
							placeholder="Hollywood Star Lanes"
							isDisabled={state?.success}
							errorMessage={state?.errors?.company?._errors}
							size="sm"
							{...register('company')}
						/>
					</div>

					<div className="sm:col-span-2">
						<Input
							type="email"
							autoComplete="email"
							placeholder="walter.sobchak@overtheline.com"
							label="email"
							isRequired
							isDisabled={state?.success}
							errorMessage={state?.errors?.email?._errors}
							size="sm"
							{...register('email')}
						/>
					</div>

					<div className="sm:col-span-2">
						<Textarea
							label="Your message"
							placeholder="This is not 'nam. This is bowling. There are rules."
							isRequired
							minRows={5}
							isDisabled={state?.success}
							errorMessage={state?.errors?.message?._errors}
							{...register('message')}
						/>
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
							color="success"
							variant="bordered"
							disableRipple
							disableAnimation
							endContent={<RocketLaunchIcon className="w-6" />}
							size="sm"
						>
							Thanks for your message!
						</Button>
					) : (
						<SubmitButton disabled={!turnstileValid} />
					)}
				</div>
			</form>
		</div>
	)
}

const SubmitButton: React.FC<ButtonProps> = ({ ...props }) => {
	const { pending } = useFormStatus()

	return pending ? (
		<Button
			type="submit"
			color="primary"
			size="md"
			isDisabled
			isLoading
			{...props}
		>
			Sending
		</Button>
	) : (
		<Button
			type="submit"
			color="primary"
			size="md"
			startContent={<EnvelopeIcon className="w-6" />}
			{...props}
		>
			Send
		</Button>
	)
}
