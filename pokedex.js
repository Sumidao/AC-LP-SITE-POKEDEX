function pokedex() {
    let selecionar = document.getElementById("pokemon-selecao");
    let pokemon = selecionar.value;
  
    
    let pokemonInfo = document.getElementById("pokemon-info");
  
    pokemonInfo.innerHTML = "";
  
    
    switch (pokemon) {
      case "bulbasaur":
        pokemonInfo.innerHTML = `
          <h2>Bulbasaur</h2>
          <img src="IMAGE/BOMBASSAUR.png" alt="Bulbasaur">
          <p>Tipo: Grama/Veneno</p>
          <p>Poder: Chicote</p>
        `;
        break;
        case "PIKACHU":
          pokemonInfo.innerHTML = `
            <h2>Pikachu</h2>
            <img src="IMAGE/PIKACHU.png" alt="Pikachu">
            <p>Tipo: eletrico</p>
            <p>Poder: Choque do Trovão</p>
          `;
          break;
          case "SQUIRTLE":
            pokemonInfo.innerHTML = `
              <h2>Squirtle</h2>
              <img src="IMAGE/SQUIRTLE.png" alt="squirtle">
              <p>Tipo: agua</p>
              <p>Poder: Aqua Jet</p>
            `;
            break;
      case "charmander":
        pokemonInfo.innerHTML = `
          <h2>Charmander</h2>
          <img src="IMAGE/CHARMANDER.png" alt="Charmander">
          <p>Tipo: Fogo</p>
          <p>Poder: Brasa</p>
        `;
        break;
      case "ARCEUS":
        pokemonInfo.innerHTML = `
          <h2>Arceus</h2>
          <img src="IMAGE/ARCEUS.png" alt="Arceus">
          <p>Tipo: Normal</p>
          <p>Poder: Meteoro</p>
        `;
        break;
      case "GIRATINA":
        pokemonInfo.innerHTML = `
          <h2>Giratina</h2>
          <img src="IMAGE/GIRATINA (2).png" alt="Giratina">
          <p>Tipo: Sombrio</p>
          <p>Poder: Bola sombria </p>
        `;
        break;
      case "DIALGA":
        pokemonInfo.innerHTML = `
          <h2>Dialga</h2>
          <img src="IMAGE/dialga.png" alt="Dialga">
          <p>Tipo: Metal/dragão</p>
          <p>Poder: expansão temporal</p>
        `;
        break;
        case "PALKIA":
        pokemonInfo.innerHTML = `
          <h2>Palkia</h2>
          <img src="IMAGE/palkia.png" alt="Palkia">
          <p>Tipo: Metal/dragão</p>
          <p>Poder: espaço absoluto</p>
        `;
        break;
      default:
        pokemonInfo.innerHTML = "<p>Selecione um Pokémon válido.</p>";
    }
  }
  