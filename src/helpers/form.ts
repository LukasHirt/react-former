interface Types {
  [key: string]: string
}

const types: Readonly<Types> = Object.freeze({
  number: 'number',
  string: 'text',
  boolean: 'checkbox',
  enum: 'radio',
  date: 'date'
})

export const getInputType = (type: string): string => {
  return types[type] || 'text'
}
