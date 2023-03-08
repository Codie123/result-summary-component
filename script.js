// api to fecth the data from the data.json
//generate function which will display the data
const data = [
  {
    category: "Reflex",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 55,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const cate = document.querySelectorAll(".category");
const summaryData = document.querySelector("#summary-data");

data.forEach((x) => {
  generate(x);
});

function generate(data) {
  const divEl = document.createElement("div");
  console.log(data.icon);
  divEl.classList.add("items");
  divEl.innerHTML = ` 
    <h5 class="category"><img  class="icon" src="${data.icon}" alt="Lighting bolt"> ${data.category}</h5>
    <div class="data">
      <p class="score" >${data.score}</p> /100
    </div>`;
  summaryData.appendChild(divEl);
}
