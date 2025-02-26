import { Button, ButtonProps, Link } from "@heroui/react"
import clsx from "clsx"
import { ReactNode } from "react"

type FollowButtonProps = {
	icon: ReactNode
	link: string
	text: string
} & ButtonProps

export const FollowButton: React.FC<FollowButtonProps> = ({
	icon,
	link,
	text,
	className,
	...props
}) => (
	<Button
		as={Link}
		href={link}
		isExternal
		startContent={icon}
		className={clsx(className, "px-2 py-4")}
		color="primary"
		size="sm"
		radius="full"
		{...props}
	>
		<span className="font-bold">{text}</span>
	</Button>
)
