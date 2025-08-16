import { useQuery } from "@tanstack/react-query"
import { StockMovement, StockMovementSchema } from "@/types"
import { z } from "zod";



export function useStockMovements() {
  return useQuery<StockMovement[]>({
    queryKey: ["stock/movements"],
    queryFn: async () => {
      const res = await fetch("/api/stock/movements")
      if (!res.ok) throw new Error("Failed to fetch stock movements")

      const data = await res.json()
      return z.array(StockMovementSchema).parse(data);  
    },
  })
}