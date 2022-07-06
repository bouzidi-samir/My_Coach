import TrainingClass from "./TrainingClass";
import Exercice from "./Exercices";
import { exercicesList } from "./Exercices";

var trainList = [ 
    new TrainingClass ('Pectoraux'),
    new TrainingClass ('Jambes')];

trainList[0].addExercice(exercicesList.devCouche);
trainList[0].addExercice(exercicesList.devIncline);
trainList[0].addExercice(exercicesList.ecartePoulie);

trainList[1].addExercice(exercicesList.squat);

export default trainList;