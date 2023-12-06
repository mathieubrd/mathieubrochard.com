"use client"

import clsx from "clsx"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { submitContactForm } from "@/app/actions"
import { useFormState } from "react-dom"

export const ContactForm: React.FC<ContactFormProps> = ({
  className,
  ...props
}) => {
  const [state, formAction] = useFormState(submitContactForm, null)

  return (
    <div className={clsx(className, "w-full")} {...props}>
      <form action={formAction}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          <FormItem className="col-span-2 sm:col-span-1">
            <FormLabel>Firstname</FormLabel>

            <FormControl>
              <Input placeholder="Walter" />
            </FormControl>

            <FormMessage />
          </FormItem>

          <FormItem className="col-span-2 sm:col-span-1">
            <FormLabel>Lastname</FormLabel>

            <FormControl>
              <Input placeholder="Sobchack" />
            </FormControl>

            <FormMessage />
          </FormItem>

          <FormItem className="col-span-2">
            <FormLabel>Company</FormLabel>

            <FormControl>
              <Input placeholder="Hollywood Star Lanes" />
            </FormControl>

            <FormMessage />
          </FormItem>

          <FormItem className="col-span-2">
            <FormLabel>Email</FormLabel>

            <FormControl>
              <Input placeholder="walter.sobchack@overtheline.com" />
            </FormControl>

            <FormMessage />
          </FormItem>

          <FormItem className="col-span-2">
            <FormLabel>Message</FormLabel>

            <FormControl>
              <Textarea placeholder="This is not 'nam, this is bowling. There are rules." />
            </FormControl>

            <FormMessage />
          </FormItem>
        </div>

        <div className="flex justify-end mt-4">
          <Button type="submit">
            <EnvelopeIcon className="w-6 mr-2" />
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
