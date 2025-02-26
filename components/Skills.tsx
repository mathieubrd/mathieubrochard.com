import { Card, CardBody, CardFooter, CardHeader, Chip } from "@heroui/react"
import clsx from "clsx"
import { CloudIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid"

type SkillProps = {
	title: string
	techs: string[]
	icon: React.ReactElement
} & React.HTMLAttributes<HTMLDivElement>

const Skill: React.FC<SkillProps> = ({
	title,
	techs,
	className,
	icon,
	children,
}) => {
	const techChips = techs.map((tech) => <Chip key={tech}>{tech}</Chip>)

	return (
		<Card className={clsx(className, "p-2")}>
			<CardHeader>
				<div className="rounded-full bg-default-800 w-8 h-8 p-1 flex items-center mr-4">
					{icon}
				</div>

				<h2 className="text-lg font-semibold">{title}</h2>
			</CardHeader>

			<CardBody>{children}</CardBody>

			<CardFooter>
				<div className="flex flex-wrap gap-x-2 gap-y-2">{techChips}</div>
			</CardFooter>
		</Card>
	)
}

export const Skills: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
}) => {
	return (
		<div className={clsx(className, "grid grid-cols-2 gap-y-6 gap-x-6")}>
			<Skill
				className="md:col-span-1 col-span-full"
				title="AWS Solutions Architect"
				icon={<CloudIcon className="w-6 h-6 text-blue-600" />}
				techs={[
					"Organizations",
					"Lambda",
					"API Gateway",
					"ECS",
					"DynamoDB",
					"RDS",
					"CloudFormation",
					"CDK",
				]}
			>
				<ul className="list-none">
					<li>- Landing Zone Architecture</li>
					<li>- Application Migration to AWS</li>
					<li>- Serverless Technologies (Lambda, Fargate, ...)</li>
					<li>- Network Infrastructure</li>
					<li>- DevOps Methodology, Infrastructure-as-Code, SRE.</li>
				</ul>
			</Skill>

			<Skill
				className="md:col-span-1 col-span-full"
				title="Full-Stack Developer"
				icon={<Square3Stack3DIcon className="w-6 h-6 text-blue-600" />}
				techs={[
					"Typescript",
					"React",
					"NextJS",
					"GraphQL",
					"Rest API",
					"NestJS",
					"Apollo",
				]}
			>
				<ul className="list-none">
					<li>- Backend services (REST, GraphQL)</li>
					<li>- Database SQL and NoSQL</li>
					<li>- Web Application Development (React)</li>
					<li>- Clean Architecture, Domain-Driven Development</li>
					<li>- CI/CD, Continuous Monitoring, ...</li>
				</ul>
			</Skill>
		</div>
	)
}
