/* Global Variables */
const temp = document.querySelector(".cur__temp");
const rangeTemp = document.querySelector(".max_min");
const humidity = document.querySelector(".humidity");

let programData;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Get method
const getData = async (url = "") => {
  const request = await fetch(url);
  try {
    allData = await request.json();
    return allData;
  } catch (error) {
    console.log("error ", error);
  }
};

//Post Data
const postData = async (url = "", data = {}) => {
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

const btn = document.querySelector(".btn");
const form = document.querySelector(".input");
const result = document.querySelector(".result");
const pin = document.querySelector(".zip");
const feel = document.querySelector(".feeling");
const feelingDis = document.querySelector('.info_feel');
const icon = document.querySelector('.image');

btn.addEventListener("click", async() => {
  btn.textContent = "Generating ...";
  let val = pin.value;
  if (val == "") {
    val = "831001" ;
  }
  await postData("/weather",{pin:val});
  const programData = await getData('/all');
  temp.textContent = "Temp : " + programData.main.temp+" \u00B0C";
  rangeTemp.textContent =
    "Max Temp . = " +
    programData.main.temp_max +
    "    Min Temp = " +
    programData.main.temp_min;
    rangeTemp.textContent = "City : "+programData.name;
  humidity.textContent += programData.main.humidity + "%";
  const type = programData.weather[0].main;
  if(type == "Drizzle" || type == "Rain"){
      icon.classList.remove('cloudy');
      icon.classList.add('rainy');
  }
  let text = feel.value;
  if(text === ""){
    text = "Confused , can't describe";
  }
  feelingDis.textContent = "How are you feeling : "+text;
  form.classList.add("invisible");
  result.classList.remove("invisible");
  btn.textContent = "Generate";
});






/// Adding new code to improve 


const baseUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "&appid=27b5467a4be2c6107b1d2e0c7ba4054b";

const weatherInfo = async(pin) =>{
  const request = await fetch(baseUrl+pin+apiKey);
  try{
    const res = await request.json();
    console.log("Logging data");
    console.log(res);
    return res;
  }catch(error){
    console.log("error",error);
  }
}