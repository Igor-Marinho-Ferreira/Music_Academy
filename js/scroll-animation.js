const scrollAnima = document.querySelectorAll('[data-anime="scroll"]');

const metadeWindow = window.innerHeight * 1.4;

function animarScroll(){
    scrollAnima.forEach((item) =>{
        const topoItem = item.getBoundingClientRect().top;
        const ItemVisivel = topoItem - metadeWindow < 0;      


        if(ItemVisivel){
            item.classList.add('show-button');
        }else{
            item.classList.remove('show-button');  
        }
    })
}

animarScroll();
window.addEventListener('scroll', animarScroll);
