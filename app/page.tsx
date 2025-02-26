import { ContactForm } from "@/components/ContactForm"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { HeroBanner } from "@/components/HeroBanner"
import { Me } from "@/components/Me"
import { Skills } from "@/components/Skills"
import Image from "next/image"
import developerAssociateLogo from "@/public/aws-developer-associate.png"
import architectAssociateLogo from "@/public/aws-solution-architect-associate.png"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 items-center">
      <HeroBanner />

      <Me className="sm:max-w-lg" />

      <h1 className="text-3xl font-bold text-center">My Skills</h1>

      <Skills />

      <div className="flex">
        <div className="relative w-44 h-44">
          <Image
            src={developerAssociateLogo}
            alt="AWS Developer Associate Ceritfication Icon"
            fill
          />
        </div>

        <div className="relative grow w-44 h-44">
          <Image
            src={architectAssociateLogo}
            alt="AWS Solution Architect Associate Ceritfication Icon"
            fill
          />
        </div>
      </div>

      <div className="sm:max-w-lg flex flex-col items-center gap-y-10">
        <h1 className="text-3xl font-bold text-center">
          My Professional Experiences
        </h1>

        <ExperienceTimeline className="pl-3" />

        <h1 className="text-3xl font-bold text-center">Contact Me</h1>

        <ContactForm />
      </div>
    </div>
  )
}
