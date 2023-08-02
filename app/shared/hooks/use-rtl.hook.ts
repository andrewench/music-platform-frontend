export const useRTL = () => {
  const direction = document.documentElement.getAttribute('dir')

  return direction === 'ltr' ? 'ltr' : 'rtl'
}
