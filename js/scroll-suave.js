const linkInterno = document.querySelectorAll('[datascroll="suave"]a[href^="#"]');

function scrollTop(event){
    event.preventDefault();
    const href = event.currentTarget.getAtribute('href');

    const ancora = document.querySelectorAll(href);

    ancora.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

linkInterno.addEventListener('click', ScrollTop);
