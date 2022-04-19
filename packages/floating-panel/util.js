export const nearest = (arr, target) => arr.reduce((pre, cur) => {
  return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
})
