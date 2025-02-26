import capgeminiLogo from "@/public/capgemini.png"
import sopraSteriaLogo from "@/public/sopra-steria.png"
import { Chip } from "@heroui/react"
import clsx from "clsx"
import Image, { StaticImageData } from "next/image"

type ExperienceProps = {
  icon: StaticImageData
  companyName: string
  jobName: string
  date: string
} & React.HTMLAttributes<HTMLDivElement>

const Experience: React.FC<ExperienceProps> = ({
  icon,
  companyName,
  jobName,
  date,
  className,
  children,
}) => {
  return (
    <li className={clsx(className, "ms-6")}>
      <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 bg-white">
        <Image alt="Company Logo" src={icon} width={20} height={20} />
      </span>

      <div className="ml-2">
        <div className="flex items-center mb-1 justify-between">
          <span className="text-lg font-semibold text-white">
            {companyName}
          </span>

          <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-white ms-3">
            {date}
          </span>
        </div>

        <div className="mb-4 text-sm leading-none">{jobName}</div>

        {children}
      </div>
    </li>
  )
}

export const ExperienceTimeline: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className }) => {
  return (
    <div className={className}>
      <ol className="relative border-s border-gray-700 space-y-10">
        <Experience
          companyName="Capgemini"
          icon={capgeminiLogo}
          jobName="AWS Architect & DevOps Engineer"
          date="2020 - now"
        >
          <ul className="text-gray-400 space-y-4">
            <li>
              <b>Air France-KLM</b>

              <p className="mb-2">
                Help the customer adopting the DevOps concepts. Deployment of an
                internal developer portal (Backstage). Reduce and automate
                processes between teams.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Chip size="sm">Backstage</Chip>
                <Chip size="sm">Typescript</Chip>
                <Chip size="sm">React</Chip>
                <Chip size="sm">Node.js</Chip>
                <Chip size="sm">Azure</Chip>
                <Chip size="sm">DevOps</Chip>
              </div>
            </li>

            <li>
              <b>Airbus</b>

              <p className="mb-2">
                AWS architect and full-stack developer in the cloud platform
                team. Developed a GraphQL API and a React web application used
                to easily manage Airbus applications in the cloud.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Chip size="sm">AWS</Chip>
                <Chip size="sm">AppSync</Chip>
                <Chip size="sm">Lambda</Chip>
                <Chip size="sm">Typescript</Chip>
                <Chip size="sm">React</Chip>
                <Chip size="sm">GraphQL</Chip>
              </div>
            </li>

            <li>
              <b>Alstom</b>

              <p className="mb-2">
                Developed a logging and monitoring solution in Azure using Azure
                Monitor and Elastic. Built a cloud SIEM using QRadar to detect
                threats in Alstom&apos;s Azure platform.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Chip size="sm">Azure</Chip>
                <Chip size="sm">Azure Monitor</Chip>
                <Chip size="sm">Elastic</Chip>
                <Chip size="sm">QRadar</Chip>
              </div>
            </li>
          </ul>
        </Experience>

        <Experience
          companyName="Sopra Steria"
          icon={sopraSteriaLogo}
          jobName="Cybersecurity Engineer"
          date="2018 - 2020"
        >
          <ul className="text-gray-400 space-y-4">
            <li>
              <b>Airbus</b>

              <p className="mb-2">
                Defined security standards to build hardened VM images for AWS.
                Built SCAP and DSC scripts to automatically produce hardened
                images. Developed an AWS AMI Factory to produce AMIs using a
                DevOps approach.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Chip size="sm">SCAP</Chip>
                <Chip size="sm">DSC</Chip>
                <Chip size="sm">AWS</Chip>
                <Chip size="sm">Python</Chip>
                <Chip size="sm">Jenkins</Chip>
                <Chip size="sm">Packer</Chip>
              </div>
            </li>

            <li>
              <b>Air France</b>

              <p className="mb-2">
                Designed and built a cloud data lake to collect logs from AWS
                using Splunk. Collect logs from EC2 instances and CloudWatch to
                Splunk.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Chip size="sm">AWS</Chip>
                <Chip size="sm">Splunk</Chip>
                <Chip size="sm">CloudWatch</Chip>
                <Chip size="sm">CloudTrail</Chip>
                <Chip size="sm">AWS Kinesis</Chip>
              </div>
            </li>
          </ul>
        </Experience>
      </ol>
    </div>
  )
}
