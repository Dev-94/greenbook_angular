import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { pluck, tap, concatMap, mergeMap, map, filter, first, elementAt } from 'rxjs/operators'
import { of } from 'rxjs'

interface GrowthData {
  id: number
  common_name: string
  scientific_name: string
  growth: {
    minimum_precipitation: {
      mm: number
    }
    maximum_precipitation: {
      mm: number
    }
  }
}


// create new data type to store returns from both requests
// create button that when clicked makes request for growth info, sending back id


@Injectable({
  providedIn: 'root'
})
export class FetchTrefleService {

  constructor(private http: HttpClient) { }
  plantId = 273225

  url = 'https://trefle.io/api/v1/plants?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA'
  growthUrl = `https://trefle.io/api/v1/plants/${this.plantId}?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA`

  proxyurl = 'https://cors-anywhere.herokuapp.com/'

  page = '&page=1'

  id
  common_name
  scientific_name
  maximum_precipitation
  minimum_precipitation
  image_url

  growth: {
    minimum_precipitation: {
      mm
    }
    maximum_precipitation: {
      mm
    }
  }


  fetchAllPlantData(): Observable<any> {

    // return this.getPlantGrowth()
    return this.getPlantImageIdName()


    // this function is invoked and invokes two functions that get info from two http requests
    // one isthe name and image and id
    // the other makes a request with the id as arg
    // then sends info at the same time to component

    // go into data from plant and pluck common_name and image_url
    // return this.http.get(this.proxyurl + this.url + this.page)
    // .pipe(
    // elementAt(0)
    // filter(item => item["data"])
    // pluck('common_name', 'image_url')
    // )
  }

  getPlantImageIdName(): Observable<any> {
    // data.common_name, data.image_url, data.main_species_id
    return this.http.get(this.proxyurl + this.url + this.page)
      .pipe(
        pluck("data"),
        tap(x => console.log(x)),
        map((item: any) => {
          return [this.id, this.common_name, this.image_url] = [item[0].id, item[0].common_name, item[0].image_url]
        })
        // this.id = data.id
      )
  }

  getPlantGrowth(): Observable<any> {
    return this.http.get(this.proxyurl + this.growthUrl + this.page)
      .pipe(
        pluck("data"),
        pluck("main_species"),
        map((item: any) => {
          return [this.id, this.common_name, this.scientific_name, this.maximum_precipitation, this.minimum_precipitation] = [item.id, item.common_name, item.scientific_name, item.growth.maximum_precipitation.mm, item.growth.minimum_precipitation.mm]
        })
      )
  }




}