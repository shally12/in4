import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Tab4Service {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get('/assets/mock/data.json')
    .subscribe(res => {
      console.log('Response: ' + res);
    });
  }
}
