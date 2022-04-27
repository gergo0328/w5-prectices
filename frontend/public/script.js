/*const firstPerson = {
    name: "Peter",
    sex: "male"
}

const secondPerson = {
    name: "Sarah",
    sex: "female"
}

function detectSex(person) {
    console.log(person)
    if (person.sex === "female") {
        return "this person is a female"
    } else if(person.sex === "male") {
        return "this person is a male"
    } else {
        return "the person sex not female or male"
    }
}

console.log(detectSex (firstPerson));
console.log(detectSex (secondPerson));

console.log(detectSex ({
    name: "Eva",
    sex: "female2"
}
));*/

//---------------------------------------------------------------------------------------------//




  //
const beerCardComponent = function (name, company, type) {
    return `
        <div class="card">
            <div class="beerName">${name}</div>
            <div class="beerCompany">${company}</div>
            <div class="beerType">${type}</div>
        </div>
    `
}

const beerTitleComponent = `
<h1>Beers</h1>
`

const loadEvent = function (){
    const rootElement = document.getElementById("root"); 
    console.log (rootElement)
    rootElement.insertAdjacentHTML("beforeend",beerTitleComponent)  //ez egy metódus, 2 stringet kér: egy position (nem CSS) és egy stringet amit HTML-é tud konvertálni

    console.log (beers.cards)
    console.log (beers.logo)

    //for-on belül, of-on után tömb nevét és elérését.
    for (const beer of beers.cards) {
    console.log(beer)
   // console.log(beers.cards[0].title)
    rootElement.insertAdjacentHTML("beforeend",beerCardComponent(beer.title, beer.sub, beer.text))

}

    }

    // ha van adat a forof ciklust használjuk ha nincs akkor a sima for (i++)


 window.addEventListener("load", loadEvent)  //eseményfigyelő mindig legyen benne a JS-ben!
