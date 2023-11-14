export default function numberFormating (value) {
  return new Intl.NumberFormat().format(value)
}
