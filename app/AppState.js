import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE the type is Car but the [] tells it that it is an array of cars
  /** @type {import('./Models/Car').Car[]} */
  // cars = [
  //   new Car({ make: 'toyota', model: 'tacoma', year: 2025, color: '#000', description: "It's so new, it doesn't exist yet", img: 'https://trailtacoma.com/wp-content/uploads/2022/03/Taco_Tuesday_Midnight_Black_tacoma07.jpg', price: 5 }),
  //   new Car({ make: 'Subaru', model: 'tsunami', year: 2027, color: '#16161d', description: "Cool car, cool color", img: 'https://www.cnet.com/a/img/resize/d028f516616211e789c534381db4ddcb742a3f0b/hub/2019/03/06/a84a4a02-09a1-4616-809d-3ca4c63fede1/subaru-viziv-adrenaline-concept-geneva-2019.jpg?auto=webp&fit=crop&height=675&width=1200', price: 12 })
  // ] DONE WITH TEST DATA moving to local

  cars = loadState('cars', [Car])

  /** @type {import('./Models/House').House[]} */
  // houses = [
  //   new House({year: 2010, address: '123 Main St', bedrooms: 4, bathrooms: 2, sqft: 1900, price:300000, description: 'A house', imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}),
  //   new House({year: 2000, address: '321 Weird Ave', bedrooms: 3, bathrooms: 2, sqft: 1500, price:250000, description: 'Another house', imgUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'}),
  // ]

  houses = loadState('houses', [House])

  // NOTE super weird type case as an example
  /** @type {[Number, String, Number]} */
  example
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
