import StudioClient from './StudioClient'

export const metadata = {
  referrer: 'same-origin',
  robots: 'noindex',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function StudioPage() {
  return <StudioClient />
}
