import { z } from "zod";


export const NavSchema = z.object({
  label: z.string(),
  nav: z.url(),
});

export type Nav = z.infer<typeof NavSchema>

export const StockMovementSchema = z.object({
  date: z.coerce.date(),
  type: z.enum(["in", "out"]),
  label: z.string(),
  quantity: z.number(),
})

export type StockMovement = z.infer<typeof StockMovementSchema>

