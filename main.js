var vert = new Couleur("Vert", "rgb(0, 255, 0)"),
  jaune = new Couleur("Jaune", "rgb(255, 255, 0)"),
  bleu = new Couleur("Bleu", "rgb(0, 0, 255)"),
  rouge = new Couleur("Rouge", "rgb(255, 0, 0)"),
  blanc = new Couleur("Blanc", "rgb(255, 255, 255)"),
  noir = new Couleur("Noir", "rgb(0, 0, 0)");

var couleurs = document.querySelectorAll(".contenair > .line .dot");
var currentLine = 10;
var btn = document.getElementById("btn");
var selectedCase = 1;
let kases;

let verifContainer = document.getElementsByClassName("notes");
let verifIncrement = 1;
let count = 0;
let correspond = true;
const params = {
  couleurs: [vert, jaune, bleu, rouge, blanc, noir],
  lignes: 10,
  columnsPlays: 4,
};

function btnCreate(currentLine) {
  let el = document.querySelector(
    ".contenair div:nth-of-type(" + currentLine + ")"
  );
  el.querySelector(".line").classList.add("selected");
  let lastDiv = document.createElement("div");
  let newBtn = document.createElement("button");
  newBtn.innerText = "Valider";
  el.insertAdjacentElement("beforeend", lastDiv);
  lastDiv.insertAdjacentElement("beforeend", newBtn);
}
btnCreate(currentLine);
var buttonValidate = document.querySelector("button");
function soluce(arrayCol) {
  let result = [
    arrayCol[Math.floor(Math.random() * arrayCol.length)].hexa,
    arrayCol[Math.floor(Math.random() * arrayCol.length)].hexa,
    arrayCol[Math.floor(Math.random() * arrayCol.length)].hexa,
    arrayCol[Math.floor(Math.random() * arrayCol.length)].hexa,
  ];

  return result;
}
let ordiCode = soluce(params["couleurs"]);
function colorSet(arrayCol) {
  let n = arrayCol.length;
  for (let i = 0; i < n; i++) {
    let place = i + 1;
    let docCase = document.querySelector(
      ".contenair > .line .dot[data-case='" + i + "']"
    );
    docCase.style.backgroundColor = arrayCol[i].hexa;
  }
}
function btnSelect() {
  let newBtn = document.querySelector("button");
  btnListener(newBtn);
}

function btnListener(btn) {
  btn.addEventListener("click", () => {
    kases = document.querySelectorAll(
      ".contenair > div:nth-of-type(" + currentLine + ") .dot"
    );
    let tabCode = [];
    for (let i = 0; i < kases.length; i++) {
      tabCode[i] = kases[i].style.backgroundColor;
    }
    compare(tabCode);
    if (correspond == true) {
      if (!alert("Vous avez gagné!")) {
        window.location.reload();
      }
    }
    if (currentLine == 1 && correspond == false) {
      if (!alert("Vous avez perdu!")) {
        window.location.reload();
      }
    }

    let el = document.querySelector(
      ".contenair div:nth-of-type(" + currentLine + ")"
    );
    el.querySelector(".line").classList.remove("selected");
    el.querySelector("button").remove();
    currentLine--;
    selectedCase = 1;
    btnCreate(currentLine);
    btnSelect();
    tabCode.splice(0, tabCode.length);
  });
}
btnListener(document.querySelector("button"));
//Evan

// sélectionner case
kases = document.querySelectorAll(
  ".contenair > div:nth-of-type(" + currentLine + ") .dot"
);
kases.forEach((kase) => {
  kase.addEventListener("click", () => {
    for (let kasee of kases) {
      kasee.style.border = "2px solid black";
    }
    kase.style.border = "2px solid rgb(255, 145, 0)";
    selectedCase = Number(kase.getAttribute("data-case")) + 1;
  });
});

// Choisir couleur
for (let couleur of couleurs) {
  couleur.addEventListener("click", function () {
    document.querySelector(
      ".contenair div:nth-of-type(" +
        currentLine +
        ") .dot:nth-of-type(" +
        selectedCase +
        ")"
    ).style.backgroundColor = couleur.style.backgroundColor;

    selectedCase++;
  });
}

function compare(joueurCode) {
  count = 0;
  correspond = true;
  // Copie du tableau ordiCode
  let ordiCodeCopy = ordiCode.slice(0);
  // Bonne couleur au bonne endroit
  for (let i = 0; i < ordiCode.length; i++) {
    if (ordiCode[i] == joueurCode[i]) {
      // insérer note noir
      insertNote("black");
      ordiCodeCopy[i] = 0;
      joueurCode[i] = -1;
    } else {
      correspond = false;
    }
  }

  // Bonne couleur pas au bonne endroit
  for (let j = 0; j < ordiCode.length; j++) {
    // ici on cherche si une couleur du code du joueur est présente dans le code de l'ordi
    // indexOf retourne l'index d'une valeur, si cette valeur n'est pas dans le tableau alors l'index retourné est -1
    // joueurCode[i] va retourner une valeur par exemple 3, si 3 est dans le code de l'ordi alors l'index sera supérieur à -1 et on mettra la note blanche sinn l'index est égal à -1
    if (ordiCodeCopy.indexOf(joueurCode[j]) !== -1) {
      // insérer note blanc
      insertNote("white");
      ordiCodeCopy[ordiCodeCopy.indexOf(joueurCode[j])] = 0;
    }
  }
  verifIncrement += 1;
  joueurCode.splice(0, joueurCode.length);
  return correspond;
}

// Insérer une note
function insertNote(type) {
  let note =
    verifContainer[
      verifContainer.length - verifIncrement
    ].getElementsByClassName("note");

  note[count].classList.add(type);
  count = count + 1;
}
soluce(params["couleurs"]);
colorSet(params["couleurs"]);
