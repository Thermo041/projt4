const clock=document.querySelector(".clock")
// console.log(clock)

setInterval(function(){
    let date= new Date()
    // console.log(date.toLocaleDateString())
    clock.innerHTML=date.toLocaleTimeString()
    clock.append(" ")
    clock.append(date.toLocaleDateString())

},1000)