import Link from 'next/link'

import type { Metadata } from 'next'
import { BorderMagicButton } from '@/components/Buttons'

export const metadata: Metadata = {
  title: 'transferX | Link Expired',
  description: 'Streamline your file transfers with our secure and user-friendly platform. Easily send and receive files of any size, ensuring quick and reliable delivery every time.',
}

export const LinkExpired = () => {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, This link is expired.</p>
          <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>

          <Link href='/'>
            <BorderMagicButton>Back to home</BorderMagicButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
