
//create Random Hex color

const hexBtn = document.querySelector('.hex-button')
const hexValue = document.querySelector('.hex-color-value')
const hexColorContainer = document.querySelector('.hex-color-container')
const hexCopyBtn = document.querySelector(".hex-color-copy")


hexBtn.addEventListener('click',()=>{
    let characterSet = "123456789ABCDEF";
    let hexColorOutput = "";

    for(let i=0,charSetLength = characterSet.length; i<6;++i){
        hexColorOutput += characterSet.charAt(
            Math.floor(Math.random() * charSetLength)
        )
    }
    hexValue.textContent =`#${hexColorOutput}`
   hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
   hexBtn.style.color = `#${hexColorOutput}`
})

function copyHexColorToClipBoard(){
    navigator.clipboard.writeText(hexValue.textContent)
    alert("Hex Color copied successfully")
}


hexCopyBtn.addEventListener("click",copyHexColorToClipBoard)



//RGB Color generator

const rgbBtn = document.querySelector('.rgb-button')
const getRedInputRange = document.querySelector("#red")
const getGreenInputRange = document.querySelector("#green")
const getBlueInputRange = document.querySelector("#blue")
const rgbColorContainer = document.querySelector(".rgb-color-container")
const rgbColorValue = document.querySelector(".rgb-color-value")
const rgbCopyBtn = document.querySelector(".rgb-color-copy")


rgbBtn.addEventListener("click",(e)=>{
  
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
  rgbColorValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
})


function copyRgbColorToClipBoard(){
    navigator.clipboard.writeText(rgbColorValue.textContent)
    alert("Rgb Color copied successfully")
}


rgbCopyBtn.addEventListener("click",copyRgbColorToClipBoard)

