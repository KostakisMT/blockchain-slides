import { redirect } from 'next/navigation'
import type { RedirectType } from 'next/navigation'

export default function Home() {
  redirect('/slide/1', 'replace' as RedirectType)
}