import { useQuery } from '@tanstack/react-query'

export function useStockStats() {
  return useQuery({
    queryKey: ['stock/stats'],
    queryFn: async () => {
      const res = await fetch('/api/stock/stats')
      if (!res.ok) throw new Error('Failed to fetch stock stats')
      return res.json()
    },
  })
}

export function useStockChart() {
  return useQuery({
    queryKey: ['stock/chart'],
    queryFn: async () => {
      const res = await fetch('/api/stock/chart')
      if (!res.ok) throw new Error('Failed to fetch stock stats')
      return res.json()
    },
  })
}
