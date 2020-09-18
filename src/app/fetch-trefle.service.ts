import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FetchTrefleService {

  constructor(private http: HttpClient) { }

  url = 'https://trefle.io/api/v1/plants?token='

  proxyurl = "https://cors-anywhere.herokuapp.com/"

  options = { headers: { "Access-Control-Allow-Origin": "*" } }

  fetchAllPlantData(): Observable<any> {
    return this.http.get(this.proxyurl + this.url)
  }
}
