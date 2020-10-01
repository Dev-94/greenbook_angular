import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { pluck, tap, concatMap, mergeMap, map, filter, first, elementAt } from 'rxjs/operators'

// create new data type to store returns from both requests
// create button that when clicked makes request for growth info, sending back id -- COMPLETE
// pass id from plantInfo to plantGrowth -- COMPLETE
// turn response from array to objects
// show multiple getPlantImageIdName responses
// create button to switch to next plant

// only shows last element in PlantInfo object - check why that it is


@Injectable({
  providedIn: 'root'
})
export class FetchTrefleService {

  constructor(private http: HttpClient) { }


  url: any = 'https://trefle.io/api/v1/plants?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA'

  proxyurl: any = 'https://cors-anywhere.herokuapp.com/'

  page: any = '&page=1'


  plantInfo = {
    plantId: 0,
    common_name: '',
    image_url: '',
    id: 0,
    scientific_name: '',
    maximum_precipitation: '',
    minimum_precipitation: '',
  }

  i = 0




  // fetchAllPlantData(): Observable<any> {

  // return this.getPlantGrowth()
  // return this.getPlantImageIdName()


  // this function is invoked and invokes two functions that get info from two http requests
  // one isthe name and image and id
  // the other makes a request with the id as arg
  // then sends info at the same time to component

  // go into data from plant and pluck common_name and image_url
  // return this.http.get(this.proxyurl + this.url + this.page)
  //   .pipe(
  //     elementAt(0)
  // filter(item => item["data"])
  // pluck('common_name', 'image_url')
  //   )
  // }

  getPlantImageIdName(): Observable<any> {
    // data.common_name, data.image_url, data.main_species_id
    return this.http.get(this.proxyurl + this.url + this.page)
      .pipe(
        pluck("data"),
        map((item: any) => {
          // item = item.splice(0, 10)
          // return (item[0].id, item[0].common_name, item[0].image_url = { ...this.plantInfo })
          return (this.plantInfo.plantId = item[this.i].id, this.plantInfo.common_name = item[this.i].common_name, this.plantInfo.image_url = item[this.i].image_url)
          // return [this.plantId, this.common_name, this.image_url] = [item[0].id, item[0].common_name, item[0].image_url]
        })
      )
  }

  getPlantGrowth(): Observable<any> {
    return this.http.get(this.proxyurl + 'https://trefle.io/api/v1/plants/' + this.plantInfo.plantId + '?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA' + this.page)
      .pipe(
        pluck("data"),
        pluck("main_species"),
        map((item: any) => {
          return (item.id, item.common_name, item.scientific_name, item.growth.maximum_precipitation.mm, item.growth.minimum_precipitation.mm = { ...this.plantInfo })

          // return (this.plantInfo.id = item.id, this.plantInfo.common_name = item.common_name, this.plantInfo.scientific_name = item.scientific_name, this.plantInfo.maximum_precipitation = item.growth.maximum_precipitation.mm, this.plantInfo.minimum_precipitation = item.growth.minimum_precipitation.mm)
          // return [this.id, this.common_name, this.scientific_name, this.maximum_precipitation, this.minimum_precipitation] = [item.id, item.common_name, item.scientific_name, item.growth.maximum_precipitation.mm, item.growth.minimum_precipitation.mm]
        })
      )
  }


  getNextPlant() {
    this.i++
  }




}