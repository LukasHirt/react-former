export default {
  title: 'School Trip',
  theme: 'dark',
  items: [
    {
      type: 'date',
      label: 'Date of Arrival'
    },
    {
      type: 'number',
      label: 'Age'
    },
    {
      type: 'string',
      label: 'Full Name'
    },
    {
      type: 'enum',
      label: 'Socks',
      required: true
    },
    {
      type: 'boolean',
      label: 'Do you need a ride?'
    },
    {
      type: 'multi-line',
      label: 'Notes',
      rows: 8
    }
  ],
  buttons: [
    {
      label: 'Cancel',
      variant: 'secondary',
      type: 'button'
    },
    {
      label: 'Reset',
      variant: 'secondary',
      type: 'reset'
    },
    {
      label: 'Submit',
      variant: 'primary',
      type: 'submit'
    }
  ]
}
