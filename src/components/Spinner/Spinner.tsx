import { forwardRef } from 'react'
import styles from './Spinner.module.scss'

export const Spinner = forwardRef((_props, ref) => {
  return (
    <div ref={ref} className={styles.spinner} role="status">
    </div>
  )
})