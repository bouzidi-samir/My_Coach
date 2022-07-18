
var exercices;

export function getExercices(data) {
    return data;
} 

export function getDatas() {

    const url = "https://bridge.buddyweb.fr/api/pumpitapp/exercices";

    fetch(url).then((response) => 
        response.json().then((data) => (getExercices(data)
        )));
    
}


class Exercice {

    constructor(name, zone, grade, imgPath) {

        this.name = name;
        this.zone = zone;
        this.grade = grade;
        this.imgPath = imgPath;
    }
};

    const devCouche = new Exercice("Devellopé Couché", "Pectoraux", "Moyen", "...");
    const devIncline = new Exercice("Devellopé Incliné", "Pectoraux", "Moyen", "...");
    const ecartePoulie = new Exercice("Ecarté Poulie", "Pectoraux", "Moyen", "...");
    
    const tractions = new Exercice("Tractions", "Dos", "Moyen", "...");
    const squat= new Exercice("Squat", "Jambes", "Moyen", "...");

    export const exercicesList = {
    devCouche, devIncline, squat, ecartePoulie 
};

export default Exercice;
