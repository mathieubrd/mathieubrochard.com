import { MapPinIcon } from "@heroicons/react/24/solid"
import { Avatar, Chip, Link } from "@nextui-org/react"
import { GitHubIcon } from "./GitHubIcon"
import me from "@/public/me.png"

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
						<span>Toulouse, France</span>
					</div>
				</div>
			</div>

			<div className="mb-4">
				<p className="text-default-500 text-justify">
					Hello 👋 I&apos;m Mathieu, AWS Architect and Software Engineer,
					specializing in serverless technologies. Passionate about designing
					scalable and efficient cloud solutions, I combine my knowledge of AWS
					with a DevOps approach to drive innovation in serverless computing.
				</p>
			</div>

			<Link href="https://github.com/mathieubrd" isExternal>
				<Chip avatar={<GitHubIcon />} color="primary">
					Follow me on GitHub!
				</Chip>
			</Link>
		</div>
	)
}
