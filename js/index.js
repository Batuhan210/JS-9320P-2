const characters = [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://i0.wp.com/www.thewhitetree.org/wp-content/uploads/2016/02/Leia-Organa.jpg",
  
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 17,
      name: "Wedge Antilles",
      pic: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/07/Wedge-Antilles-Star-Wars.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
      homeworld: "corellia",
    },
    {
      id: 18,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 19,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      
    },
    {
      id: 20,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ];
  
    /* Eğer "homeworld" değeri undefined veya null ise "other" dönecektir. */
    const homeWorldsRaw = characters.map(character => character.homeworld ?? 'other');
    console.log(homeWorldsRaw);
  
  
    /* Set unique değerler içeren bir koleksiyondur. homeWorldsRaw array'indeki tüm değerleri alır ve bunları "Set" veri yapısına ekler.
      daha sonra "Set" içindeki unique değerleri yeni bir array'e kaydeder.
    */
    const homeWorldsUnique = [...new Set(homeWorldsRaw)];
    console.log(homeWorldsUnique);
    
    /* homeworldsRaw" array'indeki her bir değerin küçük harfli versiyonunu alır ve bunları yeni bir array'e kaydeder. */
    const homeWorldsLowercase = homeWorldsUnique.map(homeworld => homeworld.toLowerCase());
    console.log(homeWorldsLowercase);
  
    /* ismi değiştirdik */
    const homeworlds = homeWorldsLowercase;
    console.log(homeworlds);
  
  let selectedHomeworld = null;
    /* radio butonu*/
    homeworlds.forEach((homeworld, index) => {
      const radioInput = document.createElement("input");
      radioInput.id = `homeworld-${index}`;
      radioInput.type = "radio";
      radioInput.name = "homeworld";
      radioInput.value = homeworld;

      const label = document.createElement("label");
      label.textContent = homeworld;
      label.htmlFor = `homeworld-${index}`;
      
      const radioWrapper = document.createElement("div");
      radioWrapper.className = "form-check";

      radioWrapper.appendChild(radioInput);
      radioWrapper.appendChild(label);

      document.body.appendChild(radioWrapper);
   
    radioInput.addEventListener("change", () => {
      selectedHomeworld = radioInput.value;
      console.log(`Selected homeworld: ${selectedHomeworld}`);
      showCharacters();
    });
    });

  function showCharacters() {
    if (selectedHomeworld!== null) {
      const filteredCharacters = characters.filter(character => character.homeworld === selectedHomeworld);
      filteredCharacters.forEach(character => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h2>${character.name}</h2>
          <p>Homeworld: ${character.homeworld}</p>
        `;
        document.body.appendChild(card);
      });
    } else {
      console.log("Please select a homeworld");
    }
  }