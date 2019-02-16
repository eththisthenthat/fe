export default (address) => {
  if (!address) return ''
  const num = 3
  return !!address && (address.substring(0, num + 2) + '...' + address.substring(address.length - num))
}