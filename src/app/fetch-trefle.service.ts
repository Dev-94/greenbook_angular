import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

interface PlantInfo {
  plantId: number
  common_name: string
  image: any
}

interface PlantGrowth {
  scientific_name: string
  maximum_precipitation: string
  minimum_precipitation: string
}

@Injectable({
  providedIn: 'root'
})
export class FetchTrefleService {

  constructor(private http: HttpClient) { }

  url: any = 'https://trefle.io/api/v1/plants?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA'

  proxyurl: any = 'https://cors-anywhere.herokuapp.com/'

  // page: any = '&page=1'

  plantInfo = {
    plantId: 1164724,
    common_name: '',
    image: ''
  }

  plantGrowth = {
    scientific_name: '',
    maximum_precipitation: '',
    minimum_precipitation: ''
  }

  i = 0

  getPlantsForQuery(item) {
    return this.http.get(this.proxyurl + 'https://trefle.io/api/v1/plants/search?q=' + item + '&token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA')
  }




  getPlantImageIdName(page): Observable<any> {
    return this.http.get(this.proxyurl + this.url + '&page=' + page)

  }

  getPlantGrowth(page): Observable<any> {
    return this.http.get(this.proxyurl + 'https://trefle.io/api/v1/plants/' + 137025 + '?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA' + page)
  }

  getNextPlant(): void {
    this.i++
  }




}
