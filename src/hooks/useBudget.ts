import { useQuery } from '@tanstack/react-query'

export function useBudget() {
  return useQuery({
    queryKey: ['budget'],
    queryFn: async () => {
      const res = await fetch('/api/budget')
      if (!res.ok) throw new Error('Failed to fetch budget')
      return res.json()
    },
  })
}

export function useBudgetChart() {
  return useQuery({
    queryKey: ['budget/chart'],
    queryFn: async () => {
      const res = await fetch('/api/budget/chart')
      if (!res.ok) throw new Error('Failed to fetch budget chart data')
      return res.json()
    },
  })
}
