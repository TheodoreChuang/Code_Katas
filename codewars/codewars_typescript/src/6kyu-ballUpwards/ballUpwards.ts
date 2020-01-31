// https://www.codewars.com/kata/566be96bb3174e155300001b/train/javascript

export function kmhToMs(kmh: number): number {
  return (kmh * 1000) / (60 * 60)
}

/**
 * @param {number} v0 vertically upwards with an initial speed v (in km per hour)
 * @param {number} time (in 100ms)
 * @return {number} height (in m)
 * height = v*t - 0.5*g*t*t
 * earth's gravity (g ~ 9.81 m/s**2)
 */
export function calculateHeight(v0: number, th: number): number {
  const G = 9.81
  const t = th / 10
  return kmhToMs(v0) * t - 0.5 * G * t * t
}

/**
 * Returns the time of the maximum height recorded by the device
 * @param {number} v0 vertically upwards with an initial speed v (in km per hour)
 * @return {number} time in tenth of second of the maximum height recorded by the device
 */
export function maxBall(v0: number): number {
  let previousHeight = 0
  let currentHeight = 0
  let currentTicker = 0

  do {
    previousHeight = currentHeight
    currentTicker++
    currentHeight = calculateHeight(v0, currentTicker)
  } while (previousHeight < currentHeight)

  return currentTicker - 1
}
