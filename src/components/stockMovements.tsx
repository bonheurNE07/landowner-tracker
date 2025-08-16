"use client"

import { useStockMovements } from "@/hooks/useStockMovement"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { StockMovement } from "@/types"

export default function StockCalendar() {
  const { data, isLoading } = useStockMovements()
  const [selected, setSelected] = useState<Date | undefined>()

  if (isLoading) return <p>Loading...</p>
  if (!data) return <Calendar />

  // ✅ Normalize API data into proper Date objects
  const movements: StockMovement[] = data.map((m) => ({
    ...m,
    date: new Date(m.date),
  }))

  return (
    <div className="p-4 w-80">
      <h2 className="text-xl font-semibold m-4">Stock Movements</h2>

      {/* Calendar with highlighted in/out days */}
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        modifiers={{
            in: movements.filter((m) => m.type === "in").map((m) => m.date),
            out: movements.filter((m) => m.type === "out").map((m) => m.date),
        } as Record<string, Date[]>} // ✅ force TS to accept modifiers
        modifiersClassNames={{
            in: "bg-green-900 text-white rounded-md",
            out: "bg-red-900 text-white rounded-md",
        }}
        className="w-full"
        />


      {/* Details below calendar */}
      {selected && (
        <div className="mt-4 p-3 border rounded-lg bg-white dark:bg-card dark:text-gray-100">
          {(() => {
            // find movement by selected date
            const m = movements.find(
              (x) => x.date.toDateString() === selected.toDateString()
            )
            if (!m) {
              return <p>No movement on {selected.toDateString()}</p>
            }
            return (
              <p>
                <span
                  className={cn(
                    "font-bold",
                    m.type === "in" ? "text-green-600" : "text-red-600"
                  )}
                >
                  {m.type.toUpperCase()}
                </span>{" "}
                — {m.label} ({m.quantity})
              </p>
            )
          })()}
        </div>
      )}
    </div>
  )
}
