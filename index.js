let celsiusinput = document.querySelector('.celsius>input')
let farhenheitinput =document.querySelector('.farhnheit>input')
let kelvininput = document.querySelector('.Kelvin>input')
let btn = document.querySelector('.btn-box button')
function roundnumber(number){
    return Math.round(number*100)/100
}
celsiusinput.addEventListener('input',function(){
    let ctemp=parseFloat(celsiusinput.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15
    farhenheitinput.value=roundnumber(ftemp)
    kelvininput.value=roundnumber(ktemp)
})
farhenheitinput.addEventListener('input',function(){
    let ftemp=parseFloat(farhenheitinput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*5/9+273.15
    celsiusinput.value=ctemp
    kelvininput.value=ktemp
})
kelvininput.addEventListener('input',function(){
    let ktemp=parseFloat(kelvininput.value)
    let ctemp=ktemp-273.15
    let ftemp=(ktemp-273.15)*(9/5)+32
    celsiusinput.value=ctemp
    farhenheitinput.value=ftemp
})
btn.addEventListener('click',()=>{
    celsiusinput.value=""
    farhenheitinput.value=""
    kelvininput.value=""
})