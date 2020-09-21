import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FetchTrefleService {

  constructor(private http: HttpClient) { }

  url = 'https://trefle.io/api/v1/plants?token=GTF4gOKNDJTmYmR2ut6r6y1fyD3pN1GrGSEoST_s0mA'

  proxyurl = "https://cors-anywhere.herokuapp.com/"

  options = { headers: { "Access-Control-Allow-Origin": "*" } }

  fetchAllPlantData(): Observable<any> {
    return this.http.get(this.proxyurl + this.url)
  }
}
