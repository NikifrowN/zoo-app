import { Button } from '../../../button/ui/button/component';
import styles from './styles.module.css';

export const Animal = ({animal, freeAnimal, feedAnimal}) => {
   const key = Object.keys(animal)[2];
   const value = Object.values(animal)[2];

   return(
      <div className={styles.root}>
         <div className={styles.info}>
            <div className={styles.image}>
               <img src={require(`${animal.img}`)}/>
            </div>
            <div>
               <h5>{animal.name}</h5>
               <p>
                  {key}: {value}
               </p>
            </div>
         </div>
         <div className={styles.buttons}>
            <Button 
               onClick={freeAnimal}
               label='Free'
            />
            <Button 
               onClick={feedAnimal}
               label='Feed'
            />
         </div>
   </div>
   )
}