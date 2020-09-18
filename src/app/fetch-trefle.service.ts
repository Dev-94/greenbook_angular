import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FetchTrefleService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/posts'

  fetchAllPlantData(): Observable<any> {
    return this.http.get(this.url)
  }
}
