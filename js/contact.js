// Quotes
const funFacts = () => {
  fetch('https://dogapi.dog/api/v2/breeds')
  .then(response => response.json())
  .then(data => {
    const num = Math.floor(Math.random() * 10) 
    const factOutput = data.data[num].attributes.description;
    console.log(factOutput)
    document.querySelector('.description').textContent = `" ${factOutput} "`;
    
  })
}
funFacts();