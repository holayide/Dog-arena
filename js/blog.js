// fetch data
const fetchData = () => {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => createBreedOptions(data.message))
}
fetchData();

// Creating Breed Options
const createBreedOptions = (breedOptions) => {
  const select = document.getElementById('select');
  select.innerHTML =`
    <select class='options' onchange= 'loadPicturesByBreed(this.value)' >
      <option>Choose a dog breed</option>
      ${Object.keys(breedOptions).map((breed) => {
        return `<option>${breed}</option>`
      }
      )}
    </select> 
  `
}

// loadPicturesByBreed
const loadPicturesByBreed = (breedName) => {
  if(breedName !== 'Choose a dog breed') {
    fetch(`https://dog.ceo/api/breed/${breedName}/images`)
    .then(resp => resp.json())
    .then(data => {
      let resultImg = data.message
      console.log(resultImg )
      // const i = Math.floor(Math.random() *  resultImg.length) 
      const dogImages = document.getElementById('dog-images')
      dogImages.innerHTML = ` <div id="breed-img" style="background-image: url('${resultImg[0]}');"></div>`;
    }) 

} else {
  const dogImages = document.getElementById('dog-images')
  dogImages.innerHTML = ``;
}
}