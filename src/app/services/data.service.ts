import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }
  public request(ep: string, params: string, load: any) {
    const url: string = "http://localhost/bscs/api/";
    let result: any;
    let dt = { payload: load }
    let header = new HttpHeaders({
        'Content-Type': 'text/plain',
    })

    result = this.http.post(url+ep+params, JSON.stringify(dt), { headers: header });
    return result;
  }
}
