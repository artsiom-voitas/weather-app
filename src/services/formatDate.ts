export function formatDate(unformattedDate: number): string {
  return new Date(unformattedDate * 1000).toLocaleTimeString('en-IN')
}
