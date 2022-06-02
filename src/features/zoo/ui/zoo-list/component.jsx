import { AnimalContainer } from "../animal/container";
import styles from './styles.module.css';

export const ZooList = ({zoo}) => (
   <div className={styles.root}>
      {zoo.map((animal) => {
         return(
            <AnimalContainer 
               key={animal.id}
               animal={animal}
            />
         )
      })}
   </div>
)