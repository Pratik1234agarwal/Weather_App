/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

console.log("Started");

// Get method 
const getData = async (url = "") => {
  console.log(url);
  const request = await fetch(url);
  console.log(request);
  try {
    const allData = await request.json();
    console.log(allData);
  } catch (error) {
    console.log("error ", error);
  }
};

/*getData(
  "http://api.openweathermap.org/data/2.5/weather?q=400001&units=metric&appid=27b5467a4be2c6107b1d2e0c7ba4054b"
);*/

//Post method 

const data = async(url='',data={})=>{
    const response = await fetch(url,{
        method : "POST",
        credentials : 'same-origin',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(data),
    });
    console.log(response);
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error ",error);
    }
}

data('/weather',{pin:831001})
.then(function(){
   getData('/all');
});


const btn = document.querySelector('.btn');
const form = document.querySelector('.input');
const result = document.querySelector('.result');
const pin = document.querySelector('.zip');
const feel = document.querySelector('.feeling');

btn.addEventListener('click',()=>{
  form.classList.add('invisible');
  result.classList.remove('invisible');
  let val = pin.value;
  if(val == ""){
    val = 831001
  } 
  val = parseInt(val);
  console.log(val);
})