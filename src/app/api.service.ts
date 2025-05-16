import { inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://hp-api.onrender.com/api/characters';
  private http = inject(HttpClient);
  getData():Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  constructor() { }

}
