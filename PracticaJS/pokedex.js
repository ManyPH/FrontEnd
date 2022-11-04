const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    console.log(pokeName);
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(data.stats[0].base_stat);
            pokename= document.getElementById("pokeid").textContent="#"+data.id+" "+data.species.name;
            /* Se obtienen las estadisticas del pokemon y se imprimen en su respectivo id */
            pokestat0=document.getElementById("stat0").textContent=data.stats[0].base_stat;
            pokestat1=document.getElementById("stat1").textContent=data.stats[1].base_stat;
            pokestat2=document.getElementById("stat2").textContent=data.stats[2].base_stat;
            pokestat3=document.getElementById("stat3").textContent=data.stats[3].base_stat;
            pokestat4=document.getElementById("stat4").textContent=data.stats[4].base_stat;
            pokestat5=document.getElementById("stat5").textContent=data.stats[5].base_stat;
            poketype=document.getElementById("poketype").textContent=data.types[0].type.name+" type";
            /*Se realiza la obtención de numeros aleatorios para que cada vez que se obtenga un pokemon tenga ataques diferentes */
            num0 = Math.round(50*Math.random());
            num1 = Math.round(50*Math.random());
            num2 = Math.round(50*Math.random());
            num3 = Math.round(50*Math.random());
            /*Se obtiene el ataque aleatorio y se imprime en su respectivo id*/
          pokemove0=document.getElementById("move0").textContent=data.moves[num0].move.name;
          pokemove1=document.getElementById("move1").textContent=data.moves[num1].move.name;
          pokemove2=document.getElementById("move2").textContent=data.moves[num2].move.name;
          pokemove3=document.getElementById("move3").textContent=data.moves[num3].move.name;
          /*Se imprime la habilidad, tipo y movimiento del pokemon */
          pokehab=document.getElementById("abilitie").textContent="ability: "+data.abilities[0].ability.name;
          pmoves=document.getElementById("moves").textContent="moves: ";
          poketype=document.getElementById("poketype").textContent=data.types[0].type.name+"-"+data.types[1].type.name+" type";
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;

}