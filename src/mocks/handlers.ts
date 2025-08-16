import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/capital', () => {
    return HttpResponse.json({
      usd: 5000,
      cdf: 3000,
      UsedPercentage: 30,
    })
  }),

  http.get('/api/budget', () => {
    return HttpResponse.json({
      totalUsd: 5000,
      totalCdf: 8000,
      completedPercentage: 30,
    })
  }),

  http.get('/api/projects/stats', () => {
    return HttpResponse.json({
      ongoing: 12,
      completed: 10,
      terminatedPercentage: 30,
    })
  }),

  http.get('/api/stock/stats', () => {
    return HttpResponse.json({
      totalReceived: 20,
      totalConsumed: 13,
      consumedPercentage: 30,
    })
  }),

  http.get('/api/expenses/latest', () => {
    return HttpResponse.json([
      { label: 'Construction de la fondation', amount: 500 },
      { label: 'Fer', amount: 400 },
      { label: 'Main d’œuvre', amount: 700 },
    ])
  }),

  http.get('/api/budget/chart', () => {
    return HttpResponse.json([
      { month: 'Jan', value: 1000 },
      { month: 'Feb', value: 2000 },
      { month: 'Mar', value: 3000 },
      { month: 'Apr', value: 4000 },
    ])
  }),

  http.get('/api/stock/chart', () => {
    return HttpResponse.json([
      { month: 'Jan', value: 100 },
      { month: 'Feb', value: 50 },
      { month: 'Mar', value: 150 },
      { month: 'Apr', value: 120 },
    ])
  }),

  http.get('/api/stock/movements', () => {
  return HttpResponse.json([
    { date: '2025-08-01', type: 'in', label: 'Cement Delivery', quantity: 20 },
    { date: '2025-08-03', type: 'out', label: 'Used Bricks', quantity: 50 },
    { date: '2025-08-05', type: 'in', label: 'Iron Bars', quantity: 15 },
    { date: '2025-08-06', type: 'out', label: 'Wood Planks', quantity: 30 },
  ])
})

]
