import capgeminiLogo from "@/public/capgemini.png"
import sopraSteriaLogo from "@/public/sopra-steria.png"
import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
import { Badge } from "./ui/badge"

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
          <span className="text-lg font-semibold text-neutral-100">
            {companyName}
          </span>

          <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-neutral-100 ms-3">
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
      <ol className="relative border-s border-neutral-700 space-y-10">
        <Experience
          companyName="Capgemini"
          icon={capgeminiLogo}
          jobName="AWS Architect & DevOps Engineer"
          date="2020 - now"
        >
          <ul className="text-neutral-400 space-y-4">
            <li>
              <b>Airbus</b>

              <p className="mb-2">
                AWS architect and full-stack developer in the cloud platform
                team. Developed a GraphQL API and a React web application used
                to easily manage Airbus applications in the cloud.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">AppSync</Badge>
                <Badge variant="secondary">Lambda</Badge>
                <Badge variant="secondary">Typescript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">GraphQL</Badge>
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
                <Badge variant="secondary">Azure</Badge>
                <Badge variant="secondary">Azure Monitor</Badge>
                <Badge variant="secondary">Elastic</Badge>
                <Badge variant="secondary">QRadar</Badge>
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
          <ul className="text-neutral-400 space-y-4">
            <li>
              <b>Airbus</b>

              <p className="mb-2">
                Defined security standards to build hardened VM images for AWS.
                Built SCAP and DSC scripts to automatically produce hardened
                images. Developed an AWS AMI Factory to produce AMIs using a
                DevOps approach.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">SCAP</Badge>
                <Badge variant="secondary">DSC</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Jenkins</Badge>
                <Badge variant="secondary">Packer</Badge>
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
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Splunk</Badge>
                <Badge variant="secondary">CloudWatch</Badge>
                <Badge variant="secondary">CloudTrail</Badge>
                <Badge variant="secondary">AWS Kinesis</Badge>
              </div>
            </li>
          </ul>
        </Experience>
      </ol>
    </div>
  )
}
