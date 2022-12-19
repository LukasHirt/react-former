export const bindJsonFormatterToTextarea = (textarea: HTMLTextAreaElement & { _lastValue?: string }) => {
  const setValue = (text: string) => {
    textarea.value = text

    return textarea.value
  }

  const getIndents = (line: string): number => {
    const match = line.match(/^[\t]+/g)

    return (match && match[0].length) || 0
  }

  const addIndent = (before: string, after: string, num: number) => {
    if (!num) return

    textarea._lastValue = setValue(before + '\n' + '\t'.repeat(num) + after)
    textarea.selectionStart = textarea.selectionEnd = before.length + 2 * num
  }

  const removeIndent = (before: string, after: string) => {
    const remove = before.at(-1)

    if (remove !== '\t') {
      setValue(before + '}' + after)
      textarea.selectionStart = textarea.selectionEnd = before.length + 1

      return
    }

    textarea._lastValue = setValue(before.slice(0, before.length - 1) + '}' + after)
    textarea.selectionStart = textarea.selectionEnd = before.length
  }

  const getPreviousLine = (before: string): string => {
    const lines = textarea.value.split(/\n/g)
    const line = before.trimEnd().split(/\n/g).length - 1

    return lines[line] || ''
  }

  const formatJson = (e: KeyboardEvent) => {
    textarea._lastValue = textarea.value

    const caret = textarea.selectionStart
    const key = e.key
    const value = textarea.value
    const before = value.substring(0, caret)
    const after = value.substring(caret)
    const lastChar = before.trim().slice(-1)
    const nextChar = after.substring(0, 1)

    if (key === 'Enter') {
      e.preventDefault()

      if (lastChar === '{') {
        const prevLine = getPreviousLine(before)
        const indents = getIndents(prevLine)
        const more = nextChar === '}' ? 0 : 1

        return addIndent(before, after, indents + more)
      }

      const prevLine = getPreviousLine(before)
      const indents = getIndents(prevLine)
      const more = nextChar === '}' ? -1 : 0

      if (indents + more > 0) {
        return addIndent(before, after, indents + more)
      }

      textarea._lastValue = setValue(before + '\n' + after)
      textarea.selectionStart = textarea.selectionEnd = before.length + 1
    } else if (key === '}') {
      e.preventDefault()

      removeIndent(before, after)
    }
  }

  const removeListener = () => {
    textarea.removeEventListener('keydown', formatJson)
  }

  textarea.addEventListener('keydown', formatJson)

  return { removeListener }
}
