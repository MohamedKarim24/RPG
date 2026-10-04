// const name = "John";
// let level = 5;
// let force = 10;
// let magie = 8;

// let object = "Sword";
// console.log(`The hero ${name} is at level ${level} with a force of ${force} and magic of ${magie}. He wields a ${object}.`);


// function tarifCinema(age, carteetudiant) {
//     if (age < 14 || age > 65 || carteetudiant === true) {
//         return "Tarif reduis";
//     }
//     else {
//         return "Tarif plein";
//     }
// }
// console.log(tarifCinema(20, true)); 

// TP personnage;
const hero = "Mohamed";
let force = 8;
let magie = 5;
let pièces_d_or = 50000;
let classe;
let niveau = 0;
let possedeCle = false;
let possedeChapeau = false;


function verifierPersonnage() {
    if (typeof hero !== "string" && typeof force !== "number" && typeof magie !== "number" && typeof pièces_d_or !== "number") {
        return ("Le personnage n'est pas valide (erreur de type)");
    }  
    else if (force < 0 || force > 10 || magie < 0 || magie > 10) {
        return ("Le personnage n'est pas valide (valeur hors limites) ");
    }
    else if (pièces_d_or <= 0) {
        return ("Le personnage n'est pas valide (pas assez de pièces d'or) ")
    }
    else {
        return ("le personnage est valide");
    }

} 

console.log(verifierPersonnage());

niveau = force + magie

function CalculerNiveau() {
    return ("niveau = " + niveau )
}
console.log (CalculerNiveau());

function CalculerClasse() {
    if (force > 0 && force >= magie * 2) {
        classe = "Guerrier";
    }
    else if (magie > 0 && magie >= force * 2) {
        classe = "Mage";
    }
    else {
        classe = "Aventurier";
    }
    return classe;
}

console.log(CalculerClasse());
 
function battreAdversaire(adversaire) {
    if (adversaire === "fantôme") {
        pièces_d_or += 2;
        magie += 1;
        if (magie > 10) { magie = 10; } 
        console.log("Tu viens d'affronter le fantôme.");
    }
    else if (adversaire === "loup") {
        pièces_d_or += 2;
        force += 1;
        if (force > 10) { force = 10; } 
        console.log("Tu viens d'affronter le loup.");
    }
    else if (adversaire === "paladin") {
        pièces_d_or += 1;
        magie += 1;
        force += 1;
        if (magie > 10) { magie = 10; }
        if (force > 10) { force = 10; }
        console.log("Tu viens d'affronter le paladin.");
    } else {
        return "Adversaire inconnu !";
    }

CalculerNiveau();
CalculerClasse();

    console.log("Nouvelle force : " + force);
    console.log("Nouvelle magie : " + magie);
    console.log("Nombre total de pièces : " + pièces_d_or);
    console.log("Nouveau niveau : " + niveau);
    console.log("Classe actuelle : " + classe);
    console.log("-------------");
}

battreAdversaire("fantôme");
battreAdversaire("loup");
battreAdversaire("paladin");


console.log("Possède la clé : " + possedeCle);
console.log("Possède le chapeau : " + possedeChapeau);
console.log("-------------");

function afficherPieces() {
    console.log("Nombre total de pièces d'or : " + pièces_d_or);
}

function acheterObjet(objet) {
    if (objet === "cle") {
        if (possedeCle) {
            console.log("Vous possédez déjà la clé !");
        } else if (pièces_d_or >= 3) {
            pièces_d_or -= 3;
            possedeCle = true;
            console.log("Objet acheté : cle");
            afficherPieces();
            console.log("Nouvelle valeur de possedeCle : " + possedeCle);
        } else {
            console.log("Achat impossible : pas assez de pièces d'or pour la clé.");
        }
    } 
    else if (objet === "chapeau") {
        if (possedeChapeau) {
            console.log("Vous possédez déjà le chapeau !");
        } else if (pièces_d_or >= 5) {
            pièces_d_or -= 5;
            possedeChapeau = true;
            console.log("Objet acheté : chapeau");
            afficherPieces();
            console.log("Nouvelle valeur de possedeChapeau : " + possedeChapeau);
        } else {
            console.log("Achat impossible : pas assez de pièces d'or pour le chapeau.");
        }
    } 
    else {
        console.log("Cet objet n'existe pas chez le marchand.");
    }
    console.log("-------------");
}

acheterObjet("cle");
acheterObjet("cle");
acheterObjet("chapeau");


function battreBoss() {
    console.log("--- Tentative d'affronter le boss ---");
    console.log("Niveau actuel : " + niveau);
    console.log("Possède la clé : " + possedeCle);

    if (niveau === 20 && possedeCle === true) {
        console.log("Victoire ! Vous avez vaincu le boss avec brio !");
        
        pièces_d_or += 10;
        
        possedeCle = false;
        
        afficherPieces();
        console.log("Nouvelle valeur de possedeCle (consommée) : " + possedeCle);
    } else {
        console.log("Combat impossible : vous devez être exactement au niveau 20 et posséder la clé.");
    }
    console.log("-------------");
}

battreBoss();


function afficherResumeFinal() {
    const resume = `=== RÉSUMÉ FINAL DU PERSONNAGE ===
Nom : ${hero}
Force : ${force}
Magie : ${magie}
Niveau : ${niveau}
Classe : ${classe}
Pièces d'or : ${pièces_d_or}
Possède la clé : ${possedeCle}
Possède le chapeau : ${possedeChapeau}
===================================`;

    console.log(resume);
}

afficherResumeFinal();





function afficherMessage(msg) {
    const messageElement = document.querySelector("#message");
    messageElement.textContent = msg;
}

function afficherPersonnage() {
    document.querySelector("#val-nom").textContent = hero;
    document.querySelector("#val-force").textContent = force;
    document.querySelector("#val-magie").textContent = magie;
    document.querySelector("#val-niveau").textContent = niveau;
    document.querySelector("#val-classe").textContent = classe;
    document.querySelector("#val-pieces").textContent = pièces_d_or;
    document.querySelector("#val-cle").textContent = possedeCle;
    document.querySelector("#val-chapeau").textContent = possedeChapeau;
}

function battreAdversaire(adversaire) {
    if (adversaire === "fantôme") {
        pièces_d_or += 2;
        magie += 1;
        if (magie > 10) { magie = 10; }
        afficherMessage("Tu viens d'affronter le fantôme et de remporter tes récompenses !");
    }
    else if (adversaire === "loup") {
        pièces_d_or += 2;
        force += 1;
        if (force > 10) { force = 10; }
        afficherMessage("Tu viens d'affronter le loup et de remporter tes récompenses !");
    }
    else if (adversaire === "paladin") {
        pièces_d_or += 1;
        magie += 1;
        force += 1;
        if (magie > 10) { magie = 10; }
        if (force > 10) { force = 10; }
        afficherMessage("Tu viens d'affronter le paladin et de remporter tes récompenses !");
    } else {
        afficherMessage("Adversaire inconnu !");
        return;
    }

    CalculerNiveau();
    CalculerClasse();
    afficherPersonnage(); 
}

document.querySelector("#btn-fantome").addEventListener("click", function() {
    battreAdversaire("fantôme");
});

document.querySelector("#btn-loup").addEventListener("click", function() {
    battreAdversaire("loup");
});

document.querySelector("#btn-paladin").addEventListener("click", function() {
    battreAdversaire("paladin");
});

document.querySelector("#btn-acheter-cle").addEventListener("click", function() {
    acheterObjet("cle");
    afficherPersonnage();
});

document.querySelector("#btn-acheter-chapeau").addEventListener("click", function() {
    acheterObjet("chapeau");
    afficherPersonnage();
});

document.querySelector("#btn-boss").addEventListener("click", function() {
    battreBoss();
    afficherPersonnage();
});


CalculerNiveau();
CalculerClasse();
afficherPersonnage();
