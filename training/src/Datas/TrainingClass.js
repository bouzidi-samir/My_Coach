import Exercice from "./Exercices";

class TrainingClass {

    constructor (name) {
        this.name = name;
        this.exercices  = [];        
    };
    
    addExercice(e) {
        this.exercices.push(e);
    }
};

export default TrainingClass;