import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
          <div class="card elevation-3">
            <img src="${this.imgUrl}">
              <h5 class="text-center border-bottom p-2">${this.address}</h5>
              <p class="p-2">Bedrooms: ${this.bedrooms} | Bathrooms: ${this.bathrooms} | Sqft: ${this.sqft} | Built: ${this.year}</p>
              <p class="p-2">$ ${this.price}</p>
              <p class="p-2">${this.description}</p>
                <div class="row">
                  <div class="col-12 d-flex justify-content-end">
                    <button class="btn btn-outline-danger p-2 my-2" title="delete house" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
                  </div>
                </div>    
            </div>
          </div>
    `
  }

  static HouseForm () {
    return`
    <form onsubmit="app.housesController.createHouse()" action="" class="row bg-white rounded p-4 elevation-2">
            <h3>List a House</h3>
            <div class="mb-2 col-12">
              <label for="address">Address</label>
              <input type="text" name="address" id="address" class="form-control" required>
            </div>
            <div class="mb-2 col-3">
              <label for="bedrooms">Bedrooms</label>
              <input type="number" name="bedrooms" id="bedrooms" class="form-control">
            </div>
            <div class="mb-2 col-3">
              <label for="bathrooms">Bathrooms</label>
              <input type="number" name="bathrooms" id="bathrooms" class="form-control">
            </div>
            <div class="mb-2 col-3">
              <label for="sqft">Sqft</label>
              <input type="number" name="sqft" id="sqft" class="form-control">
            </div>
            <div class="mb-2 col-3">
              <label for="year">Year Built</label>
              <input type="number" name="year" id="year" class="form-control">
            </div>
            <div class="mb-2 col-3">
              <label for="price">Price</label>
              <input type="number" name="price" id="price" class="form-control">
            </div>
            <div class="mb-2 col-12">
              <label for="description">Description</label>
              <input type="text" name="description" id="description" class="form-control" maxlength="100">
            </div>
            <div class="mb-2 col-12">
              <label for="imgUrl">Image URL</label>
              <input type="url" name="imgUrl" id="imgUrl" class="form-control" placeholder="Please enter a url for an image">
            </div>
            <div class="text-end mt-2">
              <button class="btn" type="reset">cancel</button>
              <button class="btn btn-primary" type="submit">submit</button>
            </div>
          </form>
    
    `
  }
}