"use client"

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { Button } from "@heroui/react"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"

export const ContactMeFloatingButton: React.FC<{
  className?: string
}> = ({ className }) => {
  const [shouldShow, setShouldShow] = useState(true)

  const computeShouldShow = useCallback(() => {
    setShouldShow(
      window.scrollY + window.innerHeight <= document.body.scrollHeight - 100,
    )
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", computeShouldShow)

    return () => {
      window.removeEventListener("scroll", computeShouldShow)
    }
  }, [computeShouldShow])

  const onClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{ y: { duration: 2, repeat: Infinity } }}
      className={clsx(
        !shouldShow && "hidden",
        "fixed bottom-10 left-10 right-10 flex justify-center sm:justify-end z-10",
      )}
    >
      <Button
        onPress={onClick}
        size="lg"
        className={clsx(
          "rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500",
          className,
        )}
      >
        <EnvelopeIcon className="w-5" />
        Contact Me
        <ChevronDoubleDownIcon className="w-5" />
      </Button>
    </motion.div>
  )
}
