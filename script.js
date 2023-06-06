// api to fecth the data from the data.json
//generate function which will display the data

getJsonData();

async function getJsonData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  console.log(data);
  processData(data);
}

function processData(x) {
  x.forEach((item) => {
    generate(item);
  });
}

// const cate = document.querySelectorAll(".category");
const summaryData = document.querySelector("#summary-data");

function generate(data) {
  const divEl = document.createElement("div");

  divEl.classList.add("items");
  divEl.setAttribute("id", `${data.color}`);
  divEl.innerHTML = `
  
            <div class="category" >
              <h5 >${data.category}</h5>
              <img  class="icon" src="${data.icon}" alt="Lighting bolt"> 
            </div>
    
            <div class="data">
              <p class="score" >${data.score} <span>/100</span></p> 
            </div>`;

  summaryData.appendChild(divEl);
}
