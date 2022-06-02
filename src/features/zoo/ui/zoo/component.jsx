import { Button } from "../../../button/ui/button/component";
import { ZooList } from "../zoo-list/component";
import styles from './styles.module.css';

export const Zoo = ({zoo, addAnimal, freeAnimals}) => (
   <div className={styles.root}>
      <Button
         onClick={addAnimal}
         label='Catch'
      />
      
      {zoo?.length > 0 ? (
         <>
            <h3>You have {zoo.length} animal(s) in your zoo.</h3>
            <Button 
               onClick={freeAnimals}
               label='Free them all'
            />
            <ZooList zoo={zoo}/>
         </>
      ) : (
            <h3>Your zoo is empty. Press "Catch" to catch your first animal. </h3>
      )}
   </div>
)