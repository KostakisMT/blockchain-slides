export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
