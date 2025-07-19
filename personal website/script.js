const players = [
  { name: "Erling Haaland", club: "Man City", position: "FWD" },
  { name: "Bukayo Saka", club: "Arsenal", position: "MID" },
  { name: "Virgil van Dijk", club: "Liverpool", position: "DEF" },
  { name: "Kevin De Bruyne", club: "Man City", position: "MID" },
  { name: "Mohamed Salah", club: "Liverpool", position: "FWD" },
  { name: "Bruno Fernandes", club: "Man Utd", position: "MID" },
  { name: "James Maddison", club: "Spurs", position: "MID" },
  { name: "Andre Onana", club: "Man Utd", position: "GK" },
  { name: "William Saliba", club: "Arsenal", position: "DEF" },
  { name: "João Pedro", club: "Brighton", position: "FWD" },
  { name: "Reece James", club: "Chelsea", position: "DEF" },
  { name: "Son Heung-min", club: "Spurs", position: "FWD" },
  { name: "Declan Rice", club: "Arsenal", position: "MID" },
  { name: "Trent Alexander-Arnold", club: "Liverpool", position: "DEF" },
  { name: "Ederson", club: "Man City", position: "GK" },
  { name: "Alejandro Garnacho", club: "Man Utd", position: "FWD" },
  { name: "James Tarkowski", club: "Everton", position: "DEF" },
  { name: "Kaoru Mitoma", club: "Brighton", position: "MID" },
  { name: "Alexander Isak", club: "Newcastle", position: "FWD" },
  { name: "Nick Pope", club: "Newcastle", position: "GK" }
];


function getRandomPlayer() {
  const player = players[Math.floor(Math.random() * players.length)];
  const container = document.getElementById("randomPlayer");
  if (container) {
    container.innerHTML = `<strong>${player.name}</strong><br>${player.position} - ${player.club}`;
  }
}

const generateBtn = document.getElementById("generatePlayer");
if (generateBtn) {
  generateBtn.addEventListener("click", getRandomPlayer);
}

function renderPlayerPool() {
  const playerList = document.getElementById("playerList");
  if (playerList) {
    players.forEach(player => {
      const div = document.createElement("div");
      div.className = "player-card";
      div.textContent = `${player.name} (${player.position})`;
      div.draggable = true;

      div.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", div.textContent);
      });

      playerList.appendChild(div);
    });
  }
}

function enableDropZones() {
  const slots = document.querySelectorAll(".slot");
  slots.forEach(slot => {
    slot.addEventListener("dragover", e => e.preventDefault());
    slot.addEventListener("drop", e => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      slot.textContent = data;
      slot.classList.add("filled");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlayerPool();
  enableDropZones();
});
