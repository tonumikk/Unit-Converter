/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert")
let unitEl = document.getElementById("unit")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    convert(unitEl.value)  
})

function convert(unit){
    lengthEl.innerHTML = `${unit} meters = ${(unit * 3.281).toFixed(3)} feet | 
    ${unit} feet = ${(unit / 3.281).toFixed(3)} meters`
    volumeEl.innerHTML = `${unit} liters = ${(unit * 0.264).toFixed(3)} gallons | 
    ${unit} gallons = ${(unit / 0.264).toFixed(3)} liters`
    massEl.innerHTML = `${unit} kilograms = ${(unit * 2.204).toFixed(3)} pounds | 
    ${unit} pounds = ${(unit / 2.204).toFixed(3)} kilograms`
}