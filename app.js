const array = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const btn = document.getElementById("btn")
const colors = document.getElementById('colors')
let evvents = btn.addEventListener('click',()=>{

    let randomHex = '#'
    for(let i=0;i<6;i++){
        randomHex+=array[random()]
    }
    document.body.style.backgroundColor=randomHex;
    document.getElementById('colors').textContent=randomHex
})
function random(){
    return  Math.floor(Math.random()*array.length);
}