import { Component } from '@angular/core'

import { FetchTrefleService } from './fetch-trefle.service'


// how to show list of plants from IdName() --- COMPLETED
// Create search functionality --- COMPLETED
// Create clear field for search --- COMPLETED
// Search API for search
// create page button
// how to pass id to Growth()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // state data, splice to get through number indices, use item to filter out all except name, id, image, return objects in an array
  /*
  data:
   0:

    common_name: "Red fescue"
    id: 137025
    image_url: "https://bs.floristic.org/image/o/d073c0ecfeb2f69248e9102eb6ec10f8ccc628cb"

   1:

    common_name: "Creeping buttercup"
    id: 173910
    image_url: "https://bs.floristic.org/image/o/c6d9a5222b6ef0e3a7bdef3350278718d3097bce"

  */


  objIdNameImage: any
  id: Array<any>
  name: Array<any>
  image: Array<any>
  scientific_name: string
  maximum_precipitation: string
  minimum_precipitation: string

  plantInfo: any

  query: string = ''

  queryPlants: any


  constructor(private fetchTrefleService: FetchTrefleService) { }


  handleQuery(input) {
    this.query = input
    console.log('handleQuery()', this.query)
    // send this.query as argument to service function
    // service function is the url with the search term, presumably
    // depends on docs
    // look at docs on how to search
    // http://{defaultHost}/api/v1/plants/search + this.q + this.token
    // this.q is the query being passed down to the service
    // may have issues with bubbling data back up to ui (data binding)
    this.fetchTrefleService.getPlantsForQuery().subscribe(res => this.queryPlants = res)
  }


  // I need an array of objects
  // obj should have keys of id, name, image
  // the array should then be listed in template
  fetchPlantInfo(): void {
    this.fetchTrefleService.getPlantImageIdName().subscribe(res => {
      console.log('getPlantImageIdName()', res)
      // var results = res.data.splice(0, 5)
      // this.objIdNameImage = results
      // console.log('results', results)
      // id is not an array, it inside an object that is within an array
      // results.map(item => {
      //   this.id.push(item.id)
      //   this.name.push(item.common_name)
      //   this.image.push(item.image_url)

      // })
      // console.log('id, name, image', [this.id, this.name, this.image])
      this.plantInfo = res

    })
  }

  fetchPlantGrowth(): void {
    this.fetchTrefleService.getPlantGrowth().subscribe(res => {
      console.log('getPlantGrowth()', res)
      // this.plantGrowth = res
      this.scientific_name = res.data.main_species.scientific_name,
        this.maximum_precipitation = res.data.main_species.growth.maximum_precipitation.mm,
        this.minimum_precipitation = res.data.main_species.growth.minimum_precipitation.mm,

        console.log('scientific_name, maximum_precipitation, minimum_precipitation', [this.scientific_name, this.maximum_precipitation, this.minimum_precipitation])
    })
  }

  nextPlant(): void {
    this.fetchTrefleService.getNextPlant()
    this.fetchPlantInfo()
  }

}
