import styles from './styles.module.css';

export const Button = ({onClick, label}) => (
   <button 
      onClick={onClick} 
      className={styles.root}
   >
      {label}
   </button>
)