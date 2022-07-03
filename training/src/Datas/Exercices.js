
class Exercice {

    constructor(name, zone, grade, imgPath) {

        this.name = name;
        this.zone = zone;
        this.grade = grade;
        this.imgPath = imgPath;
    }
};

const ercicesList = [
    new Exercice("Devellopé Couché", "Pectoraux", "Moyen", "..."),
    new Exercice("Devellopé Incliné", "Pectoraux", "Moyen", "..."),
    new Exercice("Tractions", "Dos", "Moyen", "..."),
    new Exercice("Squat", "Jambes", "Moyen", "..."),
];

export default Exercice;
