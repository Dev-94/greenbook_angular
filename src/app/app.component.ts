import { Component } from '@angular/core'

import { FetchTrefleService } from './fetch-trefle.service'


// how to show list of plants from IdName() --- COMPLETED
// Create search functionality --- COMPLETED
// Create clear field for search --- COMPLETED
// Search API for search --- COMPLETED
// create page button
// get growth info for queryPlants
// get growth info for all plants
// how to pass id to Growth()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


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

  page = 1



  constructor(private fetchTrefleService: FetchTrefleService) { }


  handleQuery(input) {
    this.query = input
    this.fetchTrefleService.getPlantsForQuery(this.query).subscribe(res => console.log(this.queryPlants = res))
  }

  nextPage() {

  }


  fetchPlantInfo(): void {
    this.fetchTrefleService.getPlantImageIdName(this.page).subscribe(res => {
      this.plantInfo = res

    })
  }

  fetchPlantGrowth(): void {
    this.fetchTrefleService.getPlantGrowth(this.page).subscribe(res => {
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
