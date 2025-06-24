import { MapPinIcon } from "@heroicons/react/24/solid"
import { Avatar } from "@heroui/react"
import { GitHubIcon } from "./GitHubIcon"
import me from "@/public/me.png"
import { LinkedInIcon } from "./LinkedInIcon"
import { FollowButton } from "./FollowButton"

export const Me: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex mb-4">
        <Avatar showFallback src={me.src} className="mr-4" isBordered />

        <div className="flex flex-col">
          <p className="font-semibold">Mathieu Brochard</p>

          <div className="text-small text-default-500 flex items-center">
            <MapPinIcon className="w-4 mr-1" />
            <span>Rennes, France</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-default-500 text-justify">
          Hello 👋 I&apos;m Mathieu, a Software Engineer & Cloud Architect. I just want to build the best software that bring value to customers.
          Passionate about designing scalable and efficient cloud solutions, I combine my knowledge of AWS
          with a DevOps approach to drive innovation in serverless computing.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
        <FollowButton
          icon={<GitHubIcon className="w-6" />}
          text="Follow me on GitHub!"
          link="https://github.com/mathieubrd"
        />

        <FollowButton
          icon={<LinkedInIcon className="w-6" />}
          text="Follow me on LinkedIn!"
          link="https://linkedin.com/in/mathieubrochard"
        />
      </div>
    </div>
  )
}
