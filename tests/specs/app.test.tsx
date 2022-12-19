import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormConfig from '../../fixtures/form-config'
import { getInputType } from '@helpers/form'
import { handelize } from 'src/utils/string'

import App from '../../src/App'

const renderApp = () => render(<App />)

const SELECTORS = Object.freeze({
  textareaFormConfig: 'textarea-form-config',
  btnApplyConfig: 'btn-apply-config',
  tabConfig: 'config-tab',
  tabResult: 'tab-result',
  input: (label: string): string => 'input-' + label
})

describe('App', () => {
  test('Users can write their form config and see the rendered output', async () => {
    renderApp()

    await userEvent.clear(screen.getByTestId(SELECTORS.textareaFormConfig))
    await userEvent.type(
      screen.getByTestId(SELECTORS.textareaFormConfig),
      JSON.stringify(FormConfig).replace(/[{[]/g, '$&$&')
    )
    await userEvent.click(screen.getByTestId(SELECTORS.btnApplyConfig))

    expect(screen.queryByTestId(SELECTORS.tabConfig)).not.toBeInTheDocument()
    expect(await screen.findByTestId(SELECTORS.tabResult)).toBeVisible()

    for (const { label, type } of FormConfig.items) {
      const input = screen.getByTestId(SELECTORS.input(handelize(label)))

      expect(input).toBeVisible()

      if (type !== 'multi-line') {
        expect(input).toHaveAttribute('type', getInputType(type))
      }
    }
  })

  test('Users can add arbitrary attributes to form fields', async () => {
    renderApp()

    await userEvent.clear(screen.getByTestId(SELECTORS.textareaFormConfig))
    await userEvent.type(
      screen.getByTestId(SELECTORS.textareaFormConfig),
      JSON.stringify(FormConfig).replace(/[{[]/g, '$&$&')
    )
    await userEvent.click(screen.getByTestId(SELECTORS.btnApplyConfig))

    expect(screen.queryByTestId(SELECTORS.tabConfig)).not.toBeInTheDocument()
    expect(await screen.findByTestId(SELECTORS.tabResult)).toBeVisible()

    expect(screen.getByTestId(SELECTORS.input('socks'))).toHaveAttribute('required')
    expect(screen.getByTestId(SELECTORS.input('notes'))).toHaveAttribute('rows', '8')
  })
})
