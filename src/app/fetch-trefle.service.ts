import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { pluck, concatMap, mergeMap, map, filter, first, elementAt } from 'rxjs/operators'
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


// convert into several mini functions for each property that is being called, multiple requests cascading down


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
  growth: {
    minimum_precipitation: {
      mm
    }
    maximum_precipitation: {
      mm
    }
  }


  fetchAllPlantData(): Observable<any> {

    return this.getPlantGrowth()
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
        // this.id = data.id
      )
  }

  getPlantGrowth(): Observable<any> {
    // data.main_species.growth
    return this.http.get(this.proxyurl + this.growthUrl + this.page)
      .pipe(
        pluck("data"),
        pluck("main_species"),
        mergeMap((item: any): Observable<any> => {
          this.id = of(item["id"]),
            this.common_name = of(item["scientific_name"]),
            this.scientific_name = of(item["scientific_name"]),
            this.scientific_name = of(item["scientific_name"]),
            this.growth.minimum_precipitation.mm = of(item["growth"]["minimum_precipitation"]["mm"]),
            this.growth.maximum_precipitation.mm = of(item["growth"]["maximum_precipitation"]["mm"])
        })
        // pluck("id"),

        // fix map, add interface type
        // couple with other fn
      )

  }




}