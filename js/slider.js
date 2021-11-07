var balls = document.querySelector(".balls")
var quant = document.querySelectorAll(".slides .videos")
var atual = 0
var videos = document.getElementById("atual")
var rolar = true
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')

for( let i= 0; i < quant.length; i++){
    var div = document.createElement("div")
    div.id = i
    balls.appendChild
}
document.getElementById('0').classList.add('videoAtual')
var pos = document.querySelectorAll('.balls div')
for( let i= 0; i < pos.length; i++){
    pos[i].addEventListener('click', () =>{
    atual = pos[i].id
    rolar = false
    slide()
    })
}
voltar.addEventListener('click',()=>{
    atual--
    slide()
})
next.addEventListener('click', () =>{
    atual++
    slide()
})
function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = quant.length -1
    }
    document.querySelector('.videoAtual').classList.remove('videoAtual')
    document.getElementById(atual).classList.add('videoAtual')
    }
    setInterval(() =>{
        if(rolar){
            atual
            slide()
        }
        else{
            rolar=true
        }
    },5000)
