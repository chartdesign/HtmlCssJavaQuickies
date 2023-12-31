
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The Ultimate Solution for Your Needs
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                We provide the best-in-class services to ensure your utmost satisfaction. Join us and experience the
                difference.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified about our latest updates and offerings.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}

// Variation 2

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#ffffff]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none text-center">
              Welcome to Our Platform
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
              We provide the best services to help you achieve your goals. Join us and start your journey to success.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col space-y-2">
              <Input className="max-w-lg flex-1" placeholder="Enter your name" type="text" />
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button className="bg-black text-white" type="submit">
                Join Now
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {`
                    By signing up, you agree to our} `}
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// variation 3

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="flex flex-col md:flex-row bg-gradient-to-r from-blue-500 to-green-500 h-screen">
      <div className="flex flex-col justify-center items-start p-10 md:w-1/2">
        <h1 className="text-5xl text-white font-bold">Welcome to Our Platform</h1>
        <p className="mt-2 text-xl text-white">
          We provide the best service in the industry. Join us now and experience the difference.
        </p>
        <form className="mt-4 space-y-2 w-full max-w-sm">
          <Input className="w-full" placeholder="Enter your name" type="text" />
          <Input className="w-full" placeholder="Enter your email" type="email" />
          <Button className="w-full bg-white text-blue-500" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img
          alt="Hero"
          className="h-full w-full object-cover"
          height="500"
          src="/placeholder.svg"
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width="500"
        />
      </div>
    </section>
  )
}

