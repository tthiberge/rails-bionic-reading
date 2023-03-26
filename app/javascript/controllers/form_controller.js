import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {

  static targets = ["input", "list", "window"]

  connect() {
    console.log("Connected")
    // console.log(this.element)
  }

  display(event) {
    event.preventDefault()
    // console.log("clicked")
    // console.log("submitted") // Marche pas mon data-action sur submit, seulement sur click. Submit se met sur le formulaire, pas le bouton!! ça marche!
    console.log(this.inputTarget.value)

    // console.log(this.windowTarget)
    // this.windowTarget.scrollTo(0, this.windowTarget.scrollHeight)

    console.log(this.listTarget)
    const contentValue  = `<li><strong>${this.inputTarget.value}</strong></li>`
    console.log(contentValue)
    this.listTarget.insertAdjacentHTML("beforeend", contentValue)

    // Les acolades ont l'ir d'être problématique
  }

  type() {
    // console.log(this.inputTarget.value)
  }
}
