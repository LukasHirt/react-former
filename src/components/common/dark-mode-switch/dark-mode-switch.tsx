import { MoonIcon, SunIcon } from '@components/icons'
import { useCallback, useEffect, useState } from 'react'
import styles from './dark-mode-switch.module.css'

const DarkModeSwitch: React.FC = () => {
  const [isDarkModeSet, setIsDarkModeSet] = useState<boolean>(
    window?.matchMedia('(prefers-color-scheme: dark)').matches || false
  )

  const toggleDarkMode = useCallback(() => {
    setIsDarkModeSet((isSet) => !isSet)
  }, [])

  useEffect(() => {
    if (isDarkModeSet) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')

      return
    }

    document.body.classList.remove('dark')
    document.body.classList.add('light')
  }, [isDarkModeSet])

  return (
    <div>
      <input
        id="dark-mode-switch"
        type="checkbox"
        checked={isDarkModeSet}
        className={styles.checkbox}
        onChange={toggleDarkMode}
      />
      <label htmlFor="dark-mode-switch" className={styles.label}>
        <span className="sr-only">Toggle dark mode</span>
        <div className={styles.ball}>
          {isDarkModeSet ? (
            <MoonIcon key="moon-icon" className={styles.moon} />
          ) : (
            <SunIcon key="sun-icon" className={styles.sun} />
          )}
        </div>
      </label>
    </div>
  )
}

export default DarkModeSwitch
