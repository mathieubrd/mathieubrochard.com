import { ContactForm } from "@/components/ContactForm"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { HeroBanner } from "@/components/HeroBanner"
import { Me } from "@/components/Me"
import { Skills } from "@/components/Skills"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 items-center">
      <HeroBanner />

      <Me className="sm:max-w-lg" />

      <h1 className="text-3xl font-bold text-center">My Skills</h1>

      <Skills />

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
