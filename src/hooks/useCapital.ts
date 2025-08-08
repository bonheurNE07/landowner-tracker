import { useQuery } from '@tanstack/react-query'

export function useCapital() {
  return useQuery({
    queryKey: ['capital'],
    queryFn: async () => {
      const res = await fetch('/api/capital')
      if (!res.ok) throw new Error('Failed to fetch capital')
      return res.json()
    },
  })
}
