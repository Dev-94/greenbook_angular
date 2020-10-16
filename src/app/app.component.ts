import { Component } from '@angular/core'

import { FetchTrefleService } from './fetch-trefle.service'


// how to show list of plants from IdName() --- COMPLETED
// Create search functionality --- COMPLETED
// Create clear field for search --- COMPLETED
// Search API for search --- COMPLETED
// create page button --- COMPLETED
// how to pass id to Growth() --- COMPLETED
// get growth info for queryPlants --- COMPLETED
// get growth info for all plants --- COMPLETED
// style component --- COMPLTETED
// create card component to render results
// have growth info updated for each specific plant on an individually basis
// create user accounts to save info

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  id: any = 0

  plantInfo: any

  plantGrowth: any

  query: string = ''

  queryPlants: any

  page = 1

  clicked = false


  constructor(private fetchTrefleService: FetchTrefleService) { }


  handleQuery(input) {
    this.query = input
    this.fetchTrefleService.getPlantsForQuery(this.query).subscribe(res => console.log(this.queryPlants = res))
  }

  prevPage() {
    if (this.page > 1) {
      this.page--
      this.fetchPlantInfo()
    }
  }

  nextPage() {
    this.page++
    this.fetchPlantInfo()
  }

  fetchPlantInfo(): void {
    this.fetchTrefleService.getPlantImageIdName(this.page).subscribe(res => {
      this.plantInfo = res

    })
  }


}
