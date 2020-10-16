import { Component, OnInit, Input } from '@angular/core'

import { FetchTrefleService } from '../fetch-trefle.service'

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent {

  constructor(private fetchTrefleService: FetchTrefleService) { }

  @Input() queryPlants: any

  @Input() plantInfo: any
  @Input() plantGrowth: any
  page = 1
  id: any = 0
  clicked = false


  fetchPlantGrowth(item): void {
    // find correct path to id for selected and send it back to service
    this.id = item
    this.clicked = true
    this.fetchTrefleService.getPlantGrowth(this.id).subscribe(res => {

      this.plantGrowth = res
      // console.log('plantGrowth', this.plantGrowth)
    })
  }

}
