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
  element.style.transition = "all 0.5s";
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
