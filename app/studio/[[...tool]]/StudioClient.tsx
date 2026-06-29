'use client'

import dynamic from 'next/dynamic'

const NextStudio = dynamic(
  () =>
    Promise.all([
      import('next-sanity/studio'),
      import('../../../sanity.config'),
    ]).then(([{ NextStudio }, { default: config }]) => {
      return function Studio() {
        return <NextStudio config={config} />
      }
    }),
  { ssr: false },
)

export default function StudioClient() {
  return <NextStudio />
}
