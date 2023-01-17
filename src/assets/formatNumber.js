export const formatNumberFollow = (num) => {
  return Math.abs(num) > 9999
    ? Math.sign(num) * (Math.abs(num) / 10000).toFixed(1) + 'M'
    : Math.sign(num) * Math.abs(num)
}
export const formatNumberLike = (num) => {
  return Math.abs(num) > 9999
    ? Math.sign(num) * (Math.abs(num) / 10000).toFixed(1) + 'K'
    : Math.sign(num) * Math.abs(num)
}
