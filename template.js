import { Photographe} from "./class/Photographe.js"

////// TEMPLATE PHOTOGRAPHERS


fetch('/data_photographers.json')
    .then(data => data.json())
    .then(result => {
       //  let photographList;
        const photographList = result.photographers;
        const tags = document.querySelectorAll(".photographer__tags__tag");
        const artistList = []; // crée un nouveau tableau pour les photographes
        console.log(artistList);

      

        for (let i = 0 ; i < photographList.length ; i++) {
          console.log(photographList);
          const photographer = new Photographe( photographList[i].name, photographList[i].id, photographList[i].city, photographList[i].country, photographList[i].tags, " ' " + photographList[i].tagline + " ' ",photographList[i].price + "€", photographList[i].portrait );
            // photographer.render();
            artistList.push(photographer);
            
        }

        //if tag dans la barre d'adresse => boucle pour afficher photographes filtrés
        const myUrl = new URL(window.location);
        const searchTag = new URLSearchParams (myUrl.search);
        const useTag = searchTag.get("tag");
        console.log(useTag === null);

        //1. is there useTag?
        if (useTag !== null ) {
            const filteredByTagArtist = artistList.filter((artist) => {
                return artist.tags.includes(useTag);
    
            })
            document.querySelector("main").innerHTML ="";
            for (let i =0; i<filteredByTagArtist.length; i++)


                filteredByTagArtist[i].render();
            }else{
                for (let i =0; i< artistList.length ; i++){
                    artistList[i].render()
                    console.log(artistList[i]);
                }
            }

        
        


        tags.forEach(tag => {
            tag.addEventListener('click', e => {
           const tagBtn = e.target.getAttribute("data-value"); //get tag button value//
        //    console.log(tagBtn);
        const filteredArtist = artistList.filter((artist) => {
            return artist.tags.includes(tagBtn);

        })
    console.log(filteredArtist);
    document.querySelector("main").innerHTML = ""
    for ( let i = 0; i<filteredArtist.length; i++) {
        filteredArtist[i].render();
    }

         
           
        })
        
    })





    });







// BOUTON CONTENU

// Initial visibility set to "none"
 
const btnContentUp = document.getElementById("btn-content");
 
btnContentUp.style.display = "none";
 
 
 
// Visibility set to "block" when scrolling
 
window.addEventListener("scroll", function(){
 
	if(window.scrollY > 100){
 
		btnContentUp.style.display = "block";
        console.log("test"); //add limit
	}
	else{
 
		btnContentUp.style.display = "none";
	}
}, false);


// TRIER PAR //select options// sort



// const tableauDesTags = [
//     portrait,
//     art,
//     fashion,
//     architecture,
//     travel,
//     sport,
//     animals,
//     events,
//  ];
//  tableauDesTags.filter(tags);
//  console.log(tableauDesTags);

//onclick="filterSelection('portrait')

 //1.shoot previous media data
//  document.querySelector("main").innerHTML ="";
 //2.sort by tags

//  const tags = document.querySelectorAll('.general_tags');
//  if (tags){
//      tags.forEach(tag => {
//          tags.addEventListener('onclick', e => {
//              console.log("test");
//          })
//      })

//  }


//  tableauDesTags.filter(tags => tags.name.includes);
// // methodeclick + addEventListener(onclick, () => {
//     searchTerm = e.target.value;
//     affichageParTag();
// })

//if (!!filterTag) {
//     return ??
// }