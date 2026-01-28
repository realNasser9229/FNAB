let time = 0; // minutes
let power = 100;
let currentCam = 0;

const cams = [
  {
    name: "CAM 1 – Dining",
    img: "https://i.postimg.cc/8zZPcbpB/no-Filter-4.webp", // Nas
  },
  {
    name: "CAM 2 – Hall",
    img: "https://i.postimg.cc/50LVB5JN/no-Filter-2.webp", // Mikica
  },
  {
    name: "CAM 3 – Storage",
    img: "https://i.postimg.cc/QtGLdBT6/no-Filter-3.webp", // Lifter
  }
];

const animatronics = {
  Bananski: { level: 0.2, cam: 0 },
  Nas: { level: 0.3, cam: 1 },
  Mikica: { level: 0.4, cam: 2 },
  Lifter: { level: 0.5, cam: 2 }
};

setInterval(() => {
  time++;
  power -= 0.2;

  document.getElementById("time").innerText =
    `${12 + Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")} AM`;

  document.getElementById("power").innerText =
    `Power: ${Math.max(0, power.toFixed(0))}%`;

  moveAI();

  if (power <= 0) jumpscare("Bananski");
  if (time >= 360) alert("6:00 AM – YOU SURVIVED 😎");
}, 1000);

function moveAI() {
  for (let name in animatronics) {
    if (Math.random() < animatronics[name].level) {
      animatronics[name].cam++;
      if (animatronics[name].cam > 3) {
        jumpscare(name);
      }
    }
  }
}

function jumpscare(name) {
  document.body.innerHTML =
    `<img src="${cams[2].img}" style="width:100vw;height:100vh;">`;
}

document.getElementById("camBtn").onclick = () => {
  document.getElementById("cams").classList.toggle("hidden");
};

function switchCam(dir) {
  currentCam = (currentCam + dir + cams.length) % cams.length;
  document.getElementById("camImg").src = cams[currentCam].img;
  document.getElementById("camName").innerText = cams[currentCam].name;
}
