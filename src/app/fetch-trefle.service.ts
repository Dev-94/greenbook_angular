import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FetchTrefleService {

  constructor(private http: HttpClient) { }

  url: any = 'https://trefle.io/api/v1/plants?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA'

  proxyurl: any = 'https://cors-anywhere.herokuapp.com/'


  getPlantsForQuery(item) {
    return this.http.get(this.proxyurl + 'https://trefle.io/api/v1/plants/search?q=' + item + '&token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA')
  }

  getPlantImageIdName(page): Observable<any> {
    return this.http.get(this.proxyurl + this.url + '&page=' + page)
  }

  getPlantGrowth(id): Observable<any> {
    console.log('getPlantGrowth service here:', id)
    return this.http.get(this.proxyurl + 'https://trefle.io/api/v1/plants/' + id + '?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA')
  }

}
