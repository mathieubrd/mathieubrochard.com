import { Link, buttonVariants } from "@heroui/react"
import clsx from "clsx"
import { ReactNode } from "react"

type FollowButtonProps = {
  icon: ReactNode
  link: string
  text: string
  className?: string
}

export const FollowButton: React.FC<FollowButtonProps> = ({
  icon,
  link,
  text,
  className,
}) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      className,
      buttonVariants({ variant: "primary", size: "sm" }),
      "rounded-full px-2 py-4 no-underline",
    )}
  >
    {icon}
    <span className="font-bold">{text}</span>
  </Link>
)
