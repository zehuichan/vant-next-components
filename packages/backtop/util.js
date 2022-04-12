const cubic = value => Math.pow(value, 3)
export const easeInOutCubic = value => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2

export function throttle(action, delay) {
  let timeout = null
  let lastRun = 0
  return function (...args) {
    if (timeout) {
      return
    }
    const elapsed = Date.now() - lastRun
    const runCallback = () => {
      lastRun = Date.now()
      timeout = false
      action.apply(this, args)
    }
    if (elapsed >= delay) {
      runCallback()
    } else {
      timeout = setTimeout(runCallback, delay)
    }
  }
}