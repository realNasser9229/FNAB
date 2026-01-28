console.log("FNAB loaded");

const timeEl = document.getElementById("time");
const powerEl = document.getElementById("power");
const camBtn = document.getElementById("camBtn");
const camsUI = document.getElementById("cams");
const camImg = document.getElementById("camImg");
const camName = document.getElementById("camName");
const prevCam = document.getElementById("prevCam");
const nextCam = document.getElementById("nextCam");

let minutes = 0;
let power = 100;
let currentCam = 0;

const cams = [
  {
    name: "CAM 1 – Nas",
    img: "https://i.postimg.cc/8zZPcbpB/no-Filter-4.webp"
  },
  {
    name: "CAM 2 – Mikica",
    img: "https://i.postimg.cc/50LVB5JN/no-Filter-2.webp"
  },
  {
    name: "CAM 3 – Lifter",
    img: "https://i.postimg.cc/QtGLdBT6/no-Filter-3.webp"
  }
];

function updateCam() {
  camImg.src = cams[currentCam].img;
  camName.textContent = cams[currentCam].name;
}

camBtn.onclick = () => {
  camsUI.classList.toggle("hidden");
  updateCam();
};

prevCam.onclick = () => {
  currentCam = (currentCam - 1 + cams.length) % cams.length;
  updateCam();
};

nextCam.onclick = () => {
  currentCam = (currentCam + 1) % cams.length;
  updateCam();
};

function updateTime() {
  minutes++;

  const hour = 12 + Math.floor(minutes / 60);
  const min = minutes % 60;

  timeEl.textContent =
    `${hour}:${min.toString().padStart(2, "0")} AM`;

  power = Math.max(0, power - 0.15);
  powerEl.textContent = `Power: ${power.toFixed(0)}%`;

  if (minutes >= 360) {
    alert("6:00 AM — YOU SURVIVED 😎");
    location.reload();
  }

  if (power <= 0) {
    jumpscare();
  }
}

function jumpscare() {
  document.body.innerHTML = `
    <img src="https://i.postimg.cc/kggq0tQY/no-Filter.webp"
         style="width:100vw;height:100vh;">
  `;
}

setInterval(updateTime, 1000);
