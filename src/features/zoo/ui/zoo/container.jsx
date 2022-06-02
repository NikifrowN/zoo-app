import { useDispatch, useSelector } from 'react-redux';
import { zooSlice } from "../../module";
import { selectZoo } from "../../module/selectors";
import { Zoo } from "./component";

export const ZooContainer = () => {
   // Рандомайзеры для id, уникальных характеристик и индекса элемента массива
   const getRandomId = () => {
      return Math.floor(Math.random() * 10000);
   };
   const getRandomParam = () => {
      return Math.floor(Math.random() * 5) + 1;
   };
   const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   };
   
   // Объект для каждого животного
   const giraph = {
      id: getRandomId(),
      name: 'Giraph',
      height: getRandomParam(),
      img: './img/giraffe.png',
   };
   const wolf = {
      id: getRandomId(),
      name: 'Wolf',
      speed: getRandomParam(),
      img: './img/wolf.png',
   };
   const hippo = {
      id: getRandomId(),
      name: 'Hippo',
      weight: getRandomParam(),
      img: './img/hippo.png'
   };
   
   const animals = [giraph, wolf, hippo];
   
   // Получение рандомного животного
   const getRandomAnimal = () => {
      const key = getRandomInt(0, animals.length - 1);
      return animals[key];
   };

   // Получаем животных из стейта и создаем функции, которые диспатчат экшены
   const dispatch = useDispatch();
   const zoo = useSelector(selectZoo);

   const addAnimal = () => {
      dispatch(zooSlice.actions.catchAnimal(getRandomAnimal()));
   };

   const freeAnimals = () => {
      dispatch(zooSlice.actions.clear());
   };

   return(
      <Zoo 
         zoo={zoo}
         addAnimal={addAnimal} 
         freeAnimals={freeAnimals}
      />
   )
}