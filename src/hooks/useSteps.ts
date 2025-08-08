import { useQuery } from '@tanstack/react-query'

export function useProjectStats() {
  return useQuery({
    queryKey: ['projects/stats'],
    queryFn: async () => {
      const res = await fetch('/api/projects/stats')
      if (!res.ok) throw new Error('Failed to fetch projects stats')
      return res.json()
    },
  })
}
