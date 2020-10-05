import { Component } from '@angular/core'

import { FetchTrefleService } from './fetch-trefle.service'


// how to pass id to Growth()
// how to show list of plants from IdName()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  id: number
  name: string
  image: string
  scientific_name: string
  maximum_precipitation: string
  minimum_precipitation: string

  constructor(private fetchTrefleService: FetchTrefleService) { }

  fetchPlantInfo(): void {
    this.fetchTrefleService.getPlantImageIdName().subscribe(res => {
      console.log('getPlantImageIdName()', res)
      this.id = res.data[5].id
      this.name = res.data[5].common_name
      this.image = res.data[5].image_url
      console.log('id, name, image', [this.id, this.name, this.image])

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
