// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
console.log("Opdracht 1:")
function getMailDomain (email) {
    const place = email.indexOf("@");
    return email.substring (place);
}
const domain1 = getMailDomain("n.eeken@novi-education.nl");
console.log(domain1);

const domain2 = getMailDomain("t.mellink@novi.nl");
console.log(domain2);

const domain3 = getMailDomain("a.wiersma@outlook.com");
console.log(getMailDomain(domain3));



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
console.log("Opdracht 2:")
function typeOfEmail (email){
    if (email.includes("@novi-education")) {
        return "Student";
    }else if (email.includes("@novi.nl")) {
        return "Medewerker";
    } else {
        return "Extern";
    }
}
// const employeeEmail = typeOfEmail("@novi.nl");
// const studentEmail = typeOfEmail("@novi-education");
// const externEmail = typeOfEmail()

// console.log(employeeEmail);
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("n.eeken@novi-education.nl"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
console.log("Opdracht 3:")
function checkEmailValidity (email) {
    const emailIncludes = email.includes("@");
    const emailIncludes2 = email.includes (",");
    const emailLastIndex = email.includes(".");
switch (true) {
    case (emailIncludes === false):
        return false + "- want geen @";
    case (emailIncludes2 === true):
        return false + "- want er staat een komma in";
    case (emailLastIndex === email.length - 1):
        return false + "- want de punt mag niet als laatst";
    default:
        return true;

}
}
console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));


