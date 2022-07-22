import Exercice from "./Exercices";

class TrainingClass {

    constructor (name, ex) {
        this.name = name;
        this.exercices  = ex;
        this.muscles = [];        
    };
    
    addExercice(e) {
        this.exercices.push(e);
    }
};

export default TrainingClass;