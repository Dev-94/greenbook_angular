import { Component } from '@angular/core'

import { FetchTrefleService } from './fetch-trefle.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  plants: any

  constructor(private fetchTrefleService: FetchTrefleService) { }


  getAllPlants() {
    this.fetchTrefleService.fetchAllPlantData().subscribe(res => {
      console.log(res)
      this.plants = res
    })

  }


}
