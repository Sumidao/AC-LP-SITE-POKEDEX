function cidades() {
    let selecionar = document.getElementById("pokemon-selecao");
    let pokemon = selecionar.value;
  
    
    let pokemonInfo = document.getElementById("pokemon-info");
  
    pokemonInfo.innerHTML = "";
  
    
    switch (pokemon) {
      case "Unova":
        pokemonInfo.innerHTML = `
          <h2>Unova</h2>
          <img src="IMAGE/Unova.png" alt="Unova">
          
        `;
        break;
        case "kanto":
          pokemonInfo.innerHTML = `
            <h2>kanto</h2>
            <img src="IMAGE/kanto.png" alt="kanto">
          
          `;
          break;
          case "paldea":
            pokemonInfo.innerHTML = `
              <h2>paldea</h2>
              <img src="IMAGE/paldea.png" alt="paldea">
              
            `;
            break;
     

      case "luminosa":
        pokemonInfo.innerHTML = `
          <h2>luminosa</h2>
          <img src="IMAGE/luminosa.png" alt="luminosa">
         
        `;
        break;
        case "aloha":
        pokemonInfo.innerHTML = `
          <h2>aloha</h2>
          <img src="IMAGE/aloha.png" alt="aloha">
          
        `;
        break;
      default:
        pokemonInfo.innerHTML = "<p>Selecione uma cidade validade.</p>";
    }
  }
  