// alert("js est connecté");

// page who we are
team = document.querySelectorAll(".team-person");
team1 = document.getElementById("team-person-1");
team2 = document.getElementById("team-person-2");
team3 = document.getElementById("team-person-3");
team4 = document.getElementById("team-person-4");
job = document.querySelectorAll(".job");

function changeImage(element, imagePerson) {
  element.classList.add(imagePerson);
  element.style.transition = "all 0.5s ease-in-out";
}

function removeImage(element, imagePerson) {
  element.classList.remove(imagePerson);
}

//

for (let i = 0; i < team.length; i++) {
  team[i].addEventListener("mouseover", function (event) {
    changeImage(team[i], "image-team-" + (i + 1));
    job[i].classList.add("text-white");
  });
}

for (let i = 0; i < team.length; i++) {
  team[i].addEventListener("mouseleave", function (event) {
    removeImage(team[i], "image-team-" + (i + 1));
    job[i].classList.remove("text-white");
  });
}

// ------------------ page get involved---------------
// ---------------- validation du formulaire ----------------

let form = document.querySelector("form");
// console.log(form);
let inputPrenom = document.querySelector("#prenom");

let inputNom = document.querySelector("#name");
// console.log(inputNom);
let inputEmail = document.querySelector("#email");
// console.log(inputEmail);
let inputMessage = document.querySelector("#message");
// console.log(inputMessage);

let select = document.querySelector("#select");
let message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //création de variables qui stocke la valeur des inputs
  let vPrenom = inputPrenom.value.trim();
  // console.log(vPrenom);
  let vNom = inputNom.value.trim();
  // console.log(vNom);

  let vEmail = inputEmail.value.trim();
  let vMessage = inputMessage.value.trim();
  //regex
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  //on teste le prénom
  if (vPrenom.length < 5 || vPrenom.length > 20) {
    let p = document.createElement("p");
    p.textContent = "Le prénom n'est pas valide";
    //ajout de la classe error
    p.setAttribute("class", "error");
    document.querySelector(".divPrenom").append(p);
  } else {
    let i = document.createElement("i");
    i.setAttribute("class", "bi");
    i.classList.add("text-success", "bi-check", "position-absolute");
    document.querySelector(".divPrenom").append(i);
  }

  //on teste le nom
  if (vNom.length < 5 || vNom.length > 20) {
    let p = document.createElement("p");
    p.textContent = "Le nom n'est pas valide";
    //ajout de la classe error
    p.setAttribute("class", "error");
    document.querySelector(".divName").append(p);
  } else {
    let i = document.createElement("i");
    i.setAttribute("class", "bi");
    i.classList.add("text-success", "bi-check", "position-absolute");
    document.querySelector(".divName").append(i);
  }

  //on teste l'email
  if (!regexEmail.test(vEmail)) {
    let p = document.createElement("p");
    p.textContent = "L'email n'est pas valide";
    p.setAttribute("class", "error");
    document.querySelector(".divEmail").append(p);
  } else {
    let i = document.createElement("i");
    i.setAttribute("class", "bi");
    i.classList.add("text-success", "bi-check", "position-absolute");
    document.querySelector(".divEmail").append(i);
  }

  //ON TESTE LE SELECT et le message
  if (select.value == "" && message.value.length < 10) {
    //erreur
    select.style.border = "thick solid rgb(208, 24, 36)";
    message.style.border = "thick solid rgb(208, 24, 36)";
  } else if (select.value != "" && message.value.length < 10) {
    select.style.border = "thick solid rgb(24, 208, 61)";
    message.style.border = "thick solid rgb(208, 24, 36)";
  } else if (select.value == "" && message.value.length >= 10) {
    select.style.border = "thick solid rgb(208, 24, 36)";
    message.style.border = "thick solid rgb(24, 208, 61)";
  } else {
    //tout est ok
    select.style.border = "thick solid rgb(24, 208, 61)";
    message.style.border = "thick solid rgb(24, 208, 61)";
  }
});
