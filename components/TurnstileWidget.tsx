import { Chip } from "@heroui/react"
import Turnstile from "react-turnstile"

type TurnstileWidgetProps = {
	className?: string
	onVerify: (_token: string) => void
}

export const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({
	onVerify,
	className,
}) => {
	const sitekey =
		process.env.NODE_ENV === "development"
			? "1x00000000000000000000AA"
			: process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY

	if (!sitekey) {
		return <Chip color="danger">Invalid Turnstile sitekey</Chip>
	}

	return (
		<Turnstile
			className={className}
			sitekey={sitekey}
			onVerify={onVerify}
			fixedSize
		/>
	)
}
