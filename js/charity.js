fetch('https://dog.ceo/api/breeds/image/random')
.then(resp => resp.json())
.then(data => {
    console.log(data.message);
    document.querySelector('.random-imgs').innerHTML = `<div class="charity-rand-img" style="background-image: url('${data.message}');"></div>`
})
.catch(err => console.error('An error has ocurred', err))