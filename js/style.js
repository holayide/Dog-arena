const more = document.querySelector('.more');
const dot = document.querySelector('.dots');
const conthText = document.querySelector('.conth-text');
const btn = document.querySelector('.btn');
const paraText = document.querySelector('.para-text');

more.addEventListener('click',() => {
    paraText.classList.toggle('show-more');
    if(more.innerHTML === 'READ MORE') {
        more.innerHTML = 'READ LESS';
        dot.style.display = 'none';
        btn.style.display = 'none';
    } else {
        more.innerHTML = 'READ MORE';
        dot.style.display = 'inline';
        btn.style.display = 'block';
    }
})