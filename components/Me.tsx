import { MapPinIcon } from "@heroicons/react/24/solid"
import { GitHubIcon } from "./GitHubIcon"
import me from "@/public/me.png"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

export const Me: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-x-3 mb-4">
        <Avatar className="border border-neutral-400">
          <AvatarImage src={me.src} alt="Me" className="mr-4" />
        </Avatar>

        <div className="flex flex-col">
          <p className="font-semibold">Mathieu Brochard</p>

          <div className="text-small text-neutral-400 flex items-center">
            <MapPinIcon className="w-4 mr-1" />
            <span>Toulouse, France</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-justify">
          Hello 👋 I&apos;m Mathieu, AWS Architect and Software Engineer,
          specializing in serverless technologies. Passionate about designing
          scalable and efficient cloud solutions, I combine my knowledge of AWS
          with a DevOps approach to drive innovation in serverless computing.
        </p>
      </div>

      <Link
        className={buttonVariants({ size: "sm" })}
        href="https://github.com/mathieubrd"
        target="_blank"
      >
        <GitHubIcon className="w-4 mr-1" />
        Follow me on GitHub!
      </Link>
    </div>
  )
}
