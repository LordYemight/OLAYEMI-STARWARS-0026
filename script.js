// function fetchDog () {
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then(respond =>respond.json())
//   .then(data => {
//     console.log(dog)
//     const dogImage = document.createElement('img');
//     dogImage.src = data.message;
//     document.body.appendChild(dogImage);
//   })
//   .catch(e => console.error(e))
// }
// fetchDog();


document.title = 'Star Wars Characters';

const characterList = document.getElementById('character-list');

// Fetch Star Wars character data from the API
fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => {
    // Iterate over the data and create a list item for each character
    for (const character of data.results) {
      const li = document.createElement('li');
      let characterImage;
      if (character.name === "Luke Skywalker") {
        characterImage = "Imagem-Luke-Skywalker.png";
      } else if (character.name === "C-3PO") {
        characterImage = "Imagem-C-3PO.png";
      } else if (character.name === "R2-D2") {
        characterImage = "Imagem-R2-D2.png";
      } else if (character.name === "Darth Vader") {
        characterImage = "Imagem-Darth-Vader.png";
      } else if (character.name === "Owen Lars") {
        characterImage = "Imagem-Owen-Lars.png";
      } else if (character.name === "Beru Whitesun lars") {
        characterImage = "Imagem-Beru-Whitesun-lars.png";
      } else if (character.name === "R5-D4") {
        characterImage = "Imagem-R5-D4.png";
      } else if (character.name === "Biggs Darklighter") {
        characterImage = "Imagem-Biggs-Darklighter.png";
      } else if (character.name === "Obi-Wan Kenobi") {
        characterImage = "Imagem-Obi-Wan-Kenobi.png";
      } else if (character.name === "Leia Organa") {
        characterImage = "Imagem-Leia-Organa.png";
      } else {
        characterImage = "default-image.png";
      }
      li.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${characterImage}" alt="">
        
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Height:</strong> ${character.height} cm</p>
        <p><strong>Hair Color:</strong> ${character.hair_color}</p>
        <p><strong>Skin Color:</strong> ${character.skin_color}</p>
        <p><strong>Gender:</strong> ${character.gender}</p> 
        
      `;
      characterList.appendChild(li);
    }
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });


  

