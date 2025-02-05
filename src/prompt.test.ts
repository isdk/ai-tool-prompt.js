import { promptIsFitSize } from './prompt'

describe('promptIsFitSize', () => {
  it('should return true when size is equal to allowedModelSize', () => {
    expect(promptIsFitSize(10, 10)).toBe(true)
    expect(promptIsFitSize('10', '10')).toBe(true)
    expect(promptIsFitSize('10', 10)).toBe(true)
    expect(promptIsFitSize(10, '10')).toBe(true)
  })

  it('should return false when size is not equal to allowedModelSize', () => {
    expect(promptIsFitSize(10, 9)).toBe(false)
    expect(promptIsFitSize('10', '9')).toBe(false)
    expect(promptIsFitSize('10', 9)).toBe(false)
    expect(promptIsFitSize(10, '9')).toBe(false)
  })

  it('should handle float numbers correctly', () => {
    expect(promptIsFitSize(0.1 + 0.2, 0.3)).toBe(true)
    expect(promptIsFitSize(0.1 + 0.2, '0.3')).toBe(true)
  })

  it('should handle > operator correctly', () => {
    expect(promptIsFitSize('>10', 11)).toBe(true)
    expect(promptIsFitSize('>10', 10)).toBe(false)
    expect(promptIsFitSize('>10', 9)).toBe(false)
  })

  it('should handle < operator correctly', () => {
    expect(promptIsFitSize('<10', 9)).toBe(true)
    expect(promptIsFitSize('<10', 10)).toBe(false)
    expect(promptIsFitSize('<10', 11)).toBe(false)
  })

  it('should handle <= operator correctly', () => {
    expect(promptIsFitSize('<=10', 10)).toBe(true)
    expect(promptIsFitSize('<=10', 9)).toBe(true)
    expect(promptIsFitSize('<=10', 11)).toBe(false)
  })

  it('should handle >= operator correctly', () => {
    expect(promptIsFitSize('>=10', 10)).toBe(true)
    expect(promptIsFitSize('>=10', 11)).toBe(true)
    expect(promptIsFitSize('>=10', 9)).toBe(false)
  })

  it('should handle != operator correctly', () => {
    expect(promptIsFitSize('!=10', 9)).toBe(true)
    expect(promptIsFitSize('!=10', 10)).toBe(false)
    expect(promptIsFitSize('!=10', '9')).toBe(true)
    expect(promptIsFitSize('!=10', '10')).toBe(false)
  })

  it('should handle invalid operator correctly', () => {
    expect(()=>promptIsFitSize('!10', 10)).toThrow('Invalid formatted parameter size')
    expect(()=>promptIsFitSize('abc10', 10)).toThrow('Invalid formatted parameter size')
  })

  it('should handle undefined inputs correctly', () => {
    expect(promptIsFitSize(undefined, 10)).toBe(true)
    expect(promptIsFitSize(10, undefined)).toBe(true)
    expect(promptIsFitSize(undefined, undefined)).toBe(true)
  })
})