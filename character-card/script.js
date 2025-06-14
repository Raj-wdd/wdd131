const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
    } else {
      alert("Character Died");
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};

const image = document.querySelector(".image");
const nameDiv = document.querySelector(".name");
const classSpan = document.getElementById("class");
const levelSpan = document.getElementById("level");
const healthSpan = document.getElementById("health");
const log = document.getElementById("log");

const attackedBtn = document.getElementById("attacked");
const levelupBtn = document.getElementById("levelup");

function updateCard() {
  image.src = character.image;
  image.alt = character.name;
  nameDiv.textContent = character.name;
  classSpan.textContent = character.class;
  levelSpan.textContent = character.level;
  healthSpan.textContent = character.health;
}

attackedBtn.addEventListener("click", () => {
  character.attacked();
  log.textContent = `${character.name} was attacked!`;
  updateCard();
});

levelupBtn.addEventListener("click", () => {
  character.levelUp();
  log.textContent = `${character.name} leveled up!`;
  updateCard();
});

updateCard();
