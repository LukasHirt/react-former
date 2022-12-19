let num = 0

export default function uniqueId(prefix = ''): string {
  num += 1

  return prefix + num
}
