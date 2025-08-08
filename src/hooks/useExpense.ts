import { useQuery } from '@tanstack/react-query'

export function useExpensesLatest() {
  return useQuery({
    queryKey: ['expenses/latest'],
    queryFn: async () => {
      const res = await fetch('/api/expenses/latest')
      if (!res.ok) throw new Error('Failed to fetch expenses latest')
      return res.json()
    },
  })
}
