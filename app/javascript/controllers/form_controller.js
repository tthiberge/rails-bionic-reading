import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {

  static targets = ["content"]

  connect() {
    // console.log("Connected")
    console.log(this.item)
  }

  display() {
    console.log("clicked")
  }
}
