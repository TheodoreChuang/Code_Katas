import { kmhToMs, calculateHeight, maxBall } from './ballUpwards'

describe('Convert km/h to m/s', () => {
  test('10 km/hour to m/s', () => {
    expect(kmhToMs(10)).toBeCloseTo(2.777778)
  })
})

describe('Calculate height for given v0 and t', () => {
  test('v0 at 15km/h, t at x', () => {
    expect(calculateHeight(15, 0)).toBeCloseTo(0, 3)
    expect(calculateHeight(15, 1)).toBeCloseTo(0.3676, 3)
    expect(calculateHeight(15, 2)).toBeCloseTo(0.637, 3)
    expect(calculateHeight(15, 3)).toBeCloseTo(0.8086, 3)
    expect(calculateHeight(15, 4)).toBeCloseTo(0.8818, 3)
    expect(calculateHeight(15, 5)).toBeCloseTo(0.8571, 3)
  })
})

describe('maxBall', () => {
  test('Basic tests', () => {
    expect(maxBall(15)).toEqual(4)
    expect(maxBall(25)).toEqual(7)
    expect(maxBall(37)).toEqual(10)
    expect(maxBall(45)).toEqual(13)
    expect(maxBall(99)).toEqual(28)
    expect(maxBall(85)).toEqual(24)
  })
})
