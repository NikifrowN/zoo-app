import { useDispatch } from "react-redux";
import { zooSlice } from "../../module";
import { Animal } from "./component";

export const AnimalContainer = ({animal}) => {
   const dispatch = useDispatch();

   const freeAnimal = () => {
      dispatch(zooSlice.actions.freeAnimal(animal));
   };
   const feedAnimal = () => {
      dispatch(zooSlice.actions.feedAnimal(animal));
   };

   return(
      <Animal 
         animal={animal}
         freeAnimal={freeAnimal}
         feedAnimal={feedAnimal}
      />
   )
}