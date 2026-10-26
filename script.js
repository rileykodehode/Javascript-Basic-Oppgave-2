/*
Javascript Basic Oppgave 2: Funksjoner & Metoder
Hjem
Moduler
Oppgaver
Sider
Filer
Diskusjoner
Quizer
Notatbok
Javascript Basic Oppgave 2: Funksjoner & Metoder
Forfall Onsdag av 23.59 Poeng 0 Må leveres en tekstboks eller en nettsteds-URL Tilgjengelig etter 13. okt. i 11.30
Javascript Basic Oppgave 2: Funksjoner & Metoder
Lag en javascript fil og kopier koden under inn i den. Dine løsninger skal legges inn mellom kommentarblokkene. Oppgaven skal leveres som en link til GitHub repo med din besvarelse.

Hvis du står fast, spør en meddeltaker eller en av oss veiledere 😊👍 Lykke til!
*/

/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her

let tall = 1;
console.log(tall);

function myFunction() {
  if (tall % 2 === 0) {
    return "Partall";
  } else {
    return "Oddetall";
  }
}

myFunction(tall);
console.log(myFunction(tall));
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

const kult = "Dette er kult";
console.log(kult);

function capitalize(rawString) {
  const capitalizeString = rawString.toUpperCase();
  return capitalizeString;
}
console.log(capitalize(kult));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
let tid = 15;

const namn = "Riley";

console.log(tid);

function tidsHilsen() {
  if (tid <= 0) {
    return `Ugyldig tid. ${namn}...`;
  } else if (tid <= 5) {
    return `God natt ${namn}.`;
  } else if (tid <= 11) {
    return `God morgen ${namn}.`;
  } else if (tid <= 17) {
    return `God dag ${namn}.`;
  } else if (tid <= 23) {
    return `God kveld ${namn}.`;
  } else {
    return `Ugyldig tid. ${namn}...`;
  }
}

console.log(tidsHilsen(tid));

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

const farger = ["Rød", "Grønn", "Blå", "Gul"];

function fargeArrayShift(rawString) {
  const shift = rawString.shift();
  return shift;
}
function fargeArrayPop(rawString) {
  const pop = rawString.pop();
  return pop;
}

fargeArrayShift(farger);
fargeArrayPop(farger);

console.log(farger);
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

const setning1 = "  Javascript er vanskelig   ";
const setning2 = " Det er vanskelig å bruke metoder ";
const setning3 = "   vanskelig        ";

function oppgaveTrim(oppgaveString) {
  const trimmedString = oppgaveString.trim().replace("vanskelig", "gøy");
  return trimmedString;
}

console.log(oppgaveTrim(setning1));
console.log(oppgaveTrim(setning2));
console.log(oppgaveTrim(setning3));
/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her

function bokRemove(rawArray) {
  const bokPop = rawArray.shift();
  return bokPop;
}

function linjalReplace(rawArray) {
  const linjalAdd = rawArray.replace("Viskelær", "Linjal");
  return linjalAdd;
}

function oppgaveSplice(rawArray) {
  const splice = rawArray.splice(1, 2, "Markeringspenn");
  return splice;
}

const joinedText = items.join("|");

bokRemove(items);
// linjalReplace(items)
oppgaveSplice(items);

console.log(items);

console.log(joinedText);

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
