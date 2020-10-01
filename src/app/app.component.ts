import { Component } from '@angular/core'


import { FetchTrefleService } from './fetch-trefle.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  plants: any
  plantGrowth: any

  constructor(private fetchTrefleService: FetchTrefleService) { }

  fetchPlantInfo() {
    this.fetchTrefleService.getPlantImageIdName().subscribe(res => {
      console.log('getPlantImageIdName()', res)
      this.plants = res
    })
  }
  fetchPlantGrowth(id) {
    this.fetchTrefleService.getPlantGrowth().subscribe(res => {
      console.log('getPlantGrowth()', res)
      this.plantGrowth = res
    })
  }

  nextPlant() {
    this.fetchTrefleService.getNextPlant()
    this.fetchPlantInfo()

  }

}
