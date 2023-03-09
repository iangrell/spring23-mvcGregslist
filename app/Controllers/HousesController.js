import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";

import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    appState.on('houses', _drawHouses)
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  createHouse() {
    event.preventDefault()
    console.log("creating house")
    const form = event.target
    console.log(form)
    console.log(form.address.value, form.bedrooms.value, form.bathrooms.value)
    let formData = getFormData(form)
    housesService.createHouse(formData)
    form.reset()
  }

  async deleteHouse(id) {
    if(await Pop.confirm('Are you sure you want to delete?'))
    console.log('delete house', id)
    housesService.deleteHouse(id)
  }
}