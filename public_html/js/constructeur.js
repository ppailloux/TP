// Create Tab brother & sister
function tabBrothersSister(val1){
    debugger;
    if(val1 == undefined || val1 == "" || val1 == null) {
        val1 = [];
    } else {
        val1 = val1;
    }
    return val1;
    
}


// test fonction stg undefined
function stgtest(val0){
    debugger;
    if(val0 == undefined || val0 == "" || val0 == null) {
        val0 = "lol";
    } else {
        val0 = val0;
    }
    return val0;
}

function Person(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
    debugger;

    this.firstName = firstName;
    this.name = stgtest(name);
    this.age = stgtest(age);
    this.kind = kind;
    this.profession = stgtest(profession);
    this.mother = stgtest(mother);
    this.father = stgtest(father);
    this.brothers = brothers;
    this.sisters = sisters;
    this.profilPicture = profilPicture;

    /* this.subProduct = [2];
     this.addFeature = function (key, value) {
     this[key] = value;
     };
     this.addSubProduct = function (stg) {
     if (stg instanceof Product) {
     this.subProduct.push(stg);
     }
     };*/
}
var grandFather1 = new personn("Alan", "Foiré", "85", "M", "retraité", "", "", "", "", "../img/GDP1.jpg");
var grandFather2 = new personn("Alex", "Térieur", "83", "M", "retraité", "", "", "", "", "../img/GDP2.jpg");
var grandMother1 = new personn("Cécile", "Onxa", "80", "F", "retraitée", "", "", "", "", "../img/GDM1.jpg");
var grandMother2 = new personn("Anne", "Orak", "79", "F", "retraitée", "", "", "", "", "../img/GDM2.jpg");

var father = new personn("Alphonse", "Foiré", "54", "M", "Developpeur web", "Alan Foiré", "Cécile Onxa", "", "", "../img/Father.jpg");
var mother = new personn("Carole", "Térieur", "51", "F", "Ambulancière", "Alex Térieur", "Anne Orak", "", "", "../img/Mother.jpg");

var son1 = new personn("Eddy", "Foiré", "32", "M", "Boulanger", "Alphonse Foiré", "Carole Térieur", "", "", "../img/Son1.jpg");
var wife1 = new personn("Claire", "Delune", "29", "F", "Commerçante", "", "", "", "", "../img/Wife1");
var child1 = new personn("Luc", "Ksé", "11", "m", "Etudiant", "", "Claire Delune", "Amelia Ksé", "Paul Ksé", "../img/Child1.jpg");
var child2 = new personn("Amelia", "Ksé", "9", "f", "Ecoliere", "", "Claire Delune", "Luc Ksé", "Paul Ksé", "../img/Child2.jpg");
var child3 = new personn("Paul", "Ksé", "7", "m", "Ecolier", "", "Claire Delune", "Amelia Ksé", "Luc Ksé", "../img/Child3.jpg");

var daughter2 = new personn("Lara", "Clette", "30", "F", "Fleuriste", "Alphonse Foiré", "Carole Térieur", "Eddy Foiré", "Jen Foiré", "Loic Foiré", "../img/Daughter2.jpg");
var husband2 = new personn("Bou", "Clette", "33", "M", "Vigile", "", "", "", "", "../img/Husband2.jpg");
var child4 = new personn("Rak", "Clette", "10", "m", "Ecolier", "Bou Clette", "Lara Clette", "", "", "../img/Child4.jpg");

var son2 = new personn(" Loic", "Foiré", "27", "M", "Garagiste", "Alphonse Foiré", "Carole Térieur", "Eddy Foiré", "Lara Clette", "Jean Foiré", "../img/Son2.jpg");
var wife2 = new personn("Jane", "Foiré", "28", "F", "Coiffeuse", "", "", "", "", "../img/Wife2.jpg");

var son3 = new personn("Jean", "Foiré", "25", "M", "Electricien", "Alphone Foiré", "Carole Térieur", "Eddy Foiré", "Lara Clette", "Loic Foiré", "../img/Son3.jpg");





/*
 debugger;
 var moto = new Product("Suzuki 600 Gsr", "une moto pour les vrai hommes qui envoient du gros gazzz !", "215 kg", "200 cm ", "../img/gsr.jpg");
 
 document.getElementById("name").innerHTML = moto.name;
 document.getElementById("description").innerHTML = moto.description;
 document.getElementById("weight").innerHTML = moto.weight;
 document.getElementById("dimension").innerHTML = moto.dimension;
 document.getElementById("picture").src = moto.picture;
 moto.addFeature("price", "4500€");
 document.getElementById("price").innerHTML = moto.price;
 console.log(moto);*/

var moto = new Product("", "une moto pour les vrai hommes qui envoient du gros gazzz !", "215 kg", "200 cm ", "../img/gsr.jpg");
moto.addFeature("price", "4500€");

function initialiseProductFiche(stg) {
    debugger;
    var attributsOfStg = Object.keys(stg);
    attributsOfStg.forEach(function (attribut) {
        debugger;
        if ("addFeature" != attribut) {
            if ("picture" != attribut || ("addSubProduct" != attribut)) {
                if (undefined != stg[attribut]) {
                    var text = stg[attribut];
                } else {
                    var text = "";
                }
                document.getElementById(attribut).innerHTML = text
            } else if ("addSubProduct" == attribut) {
                var text = stg[attribut][0];
            } else {
                document.getElementById(attribut).src = stg[attribut]
            }
        }
    });
}

initialiseProductFiche(moto);
