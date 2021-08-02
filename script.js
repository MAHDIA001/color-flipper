let btn = document.getElementById("btn");
let color = document.getElementById("colors");
let array = ['rgb(10,200,70)','#facfa2','#a8a8a8a8','#333','rgb(100,150,200)']
let event = btn.addEventListener('click',()=>{
   
         const rand =Math.floor(Math.random()*array.length);
         document.body.style.backgroundColor = array[rand]

    color.textContent = array[rand]
})