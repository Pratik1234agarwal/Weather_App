/* Global Variables */
const temp = document.querySelector(".cur__temp");
const rangeTemp = document.querySelector(".max_min");
const humidity = document.querySelector(".humidity");

let programData;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

console.log("Started");

// Get method
const getData = async (url = "") => {
  const request = await fetch(url);
  try {
    programData = await request.json();
    console.log("Logging data");
    console.log(programData);
  } catch (error) {
    console.log("error ", error);
  }
};

/*getData(
  "http://api.openweathermap.org/data/2.5/weather?q=400001&units=metric&appid=27b5467a4be2c6107b1d2e0c7ba4054b"
);*/

//Post method

const data = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error ", error);
  }
};

/*data("/weather", { pin: 831001 }).then(function () {
  getData("/all");
});*/

const btn = document.querySelector(".btn");
const form = document.querySelector(".input");
const result = document.querySelector(".result");
const pin = document.querySelector(".zip");
const feel = document.querySelector(".feeling");

btn.addEventListener("click", () => {
  
  let val = pin.value;
  if (val == "") {
    val = "831001" ;
  }
  //val = parseInt(val);
  console.log(val);
  data("/weather", { pin: val }).then(function () {
    getData("/all");
  });
  console.log("1");
  console.log(programData);
  temp.textContent = "Temp : " + programData.main.temp;
  rangeTemp.textContent =
    "Max Temp . = " +
    programData.main.temp_max +
    "    Min Temp = " +
    programData.main.temp_min;
  humidity.textContent += programData.main.humidity + "%";
  console.log("its here");
  form.classList.add("invisible");
  result.classList.remove("invisible");
});
