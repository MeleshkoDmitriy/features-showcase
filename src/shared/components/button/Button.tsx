import { ComponentPropsWithoutRef, FC, MouseEventHandler } from 'react'
import styles from './Button.module.scss'

interface ButtonTextProps extends ComponentPropsWithoutRef<'button'> {
   buttonColor: 'white' | 'blue' | 'green' | 'red';
   onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button:FC<ButtonTextProps> = ({children, onClick, buttonColor}) => {
   
   const className = `${styles.wrapper} ${styles[buttonColor]}`
   const classNameText = `${styles.wrapper} ${styles[`text_${buttonColor}`]}`

   const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault();
      onClick(event);
   };

   return (
      <button  onClick={handleClick} 
            className={className}>
         <span className={classNameText}>
            {children}
         </span>
      </button>
   )
}