import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {

  static targets = ["input", "list", "window", "result"]

  connect() {
    console.log("Connected")
  }

  display(event) {
    event.preventDefault()
    // console.log("clicked")
    // console.log("submitted") // Submit se met sur le formulaire, pas le bouton!! ça marche!
    // console.log(this.inputTarget.value)


    // Construire le séquençage dont j'ai besoin pour savoir ce que je mets en bold

    // Décomposer la string en mots
    const input = this.inputTarget.value
    console.log(input)

    // Sur chaque mot, couper au bon endroit et faire une partie avant en strong, une partie après en pas strong
    console.log(input.split(" "))

    const newArray = []

    input.split(" ").forEach((word) => {
      // console.log(word.length)
      if (word.length <= 3) { // pas besoin de l'arrow function
        // Je vérifie que l'interpolation fonctionne bien
        console.log(`<strong>${word[0]}</strong>`)

        // Je crée une variable où j'ai remplacé la graisser la 1ère lettre
        const newWord = word.replace(word[0], `<strong>${word[0]}</strong>` ) // console.log(newWord) // OK ça crée bien le nouveau mot

        // Je pousse ce nouveau mot graissé dans l'array de ma future nouvelle string
        newArray.push(newWord) //console.log(newArray) // OK

      } else {
        // Je vérifie que je rentre dans ma condition de plus de 3 lettres
        // console.log(">3")

        // 



      }
    })

    console.log(newArray)

    // # if element.chars.count <= 3
    //     # element.gsub(element[0], "<strong>#{element[0]}</strong>")
    //     # else
    //     element.gsub(element.first(element.chars.count.to_f.fdiv(2).round), "<strong>#{element.first(element.chars.count.to_f.fdiv(2).round)}</strong>")
    //     # end

    // .replace( /www\./g, '' )   g pour global pour un vrai gsub

    // .length .join('.') .substring(0, milieu de chaine)

    // Re-concatener le mot
    // Je voudrais des envies

    // Re-concatener la string


    // Afficher la string

    // const boldResult = `<strong>${this.inputTarget.value}</strong>`


    // this.resultTarget.insertAdjacentHTML("afterbegin", boldResult)




    // this.resultTarget.insertAdjacentHTML("afterbegin", `<strong>${this.inputTarget.value}</strong>`)
    // this.listTarget.insertAdjacentHTML("afterbegin", `<li><strong>${this.inputTarget.value}</strong></li>`)



  }

  reloadPage() {
    window.location.reload()
  }

  type() {
    // console.log(this.inputTarget.value)
  }
}

// Scroll en bas de page à faire fonctionner ensuite
    // console.log(this.windowTarget)
    // this.windowTarget.scrollTo(0, this.windowTarget.scrollHeight)
