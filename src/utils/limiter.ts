import { RateLimiter } from 'limiter'

export const limiter = new RateLimiter({
  tokensPerInterval: 10,
  interval: 300000,
  fireImmediately: true
})