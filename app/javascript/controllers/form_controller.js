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
    console.log(this.inputTarget.value)

    // Construire le séquençage dont j'ai besoin pour savoir ce que je mets en bold
    const boldResult = `<strong>${this.inputTarget.value}</strong>`

    this.resultTarget.insertAdjacentHTML("afterbegin", boldResult)


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
