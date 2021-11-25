const listOfDogs = document.querySelector(`.dogs-list`)
const mainCard = document.querySelector(`.main__dog-section`)
const main = document.querySelector(`.main`)
const listButtons = document.querySelectorAll(`.dogs-list__button`)


function dogCard (dog){

    const mainCard = document.querySelector(`.main__dog-section`)
    const name = document.createElement(`h2`)
    name.textContent = dog.name
    const image = document.createElement(`img`)
    image.src = dog.image
    const attributes = document.createElement(`div`)
    attributes.setAttribute(`class`,`main__dog-section__desc`)


    const h3Elem = document.createElement(`h3`)
    h3Elem.textContent= `Bio`
    const dogBio = document.createElement(`p`)
    dogBio.textContent = dog.bio

    attributes.append(h3Elem, dogBio)

    const goodDog = document.createElement(`p`)
    goodDog.textContent =  `Is naughty?`
    if(dog.isGoodDog){
        goodDog.textContent =  `Is naughty? No!`
    } else goodDog.textContent =  `Is naughty? Yes!`


    const button = document.createElement(`button`)
    button.setAttribute(`class`,`main__dog-section__btn`)

    if(dog.isGoodDog){
        button.textContent=`Bad dog`
    } else button.textContent=`Good dog`


    mainCard.append(name, image, attributes, goodDog, button)

    return mainCard

}

for(const dog of data){
    const listItem = document.createElement(`li`)
    listItem.setAttribute(`class`,`dogs-list__button`)
    listItem.textContent = dog.name
    listOfDogs.append(listItem)
}





for (let i = 0; i < listButtons.length; i++) {
    listButtons[i].addEventListener('click', () => {
        while (mainCard.firstChild)(
            mainCard.removeChild(mainCard.firstChild)
        )
        main.append(dogCard(data[i - 1]))
        console.log(listButtons)
    })
}
