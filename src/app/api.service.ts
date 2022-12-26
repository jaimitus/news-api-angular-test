import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_KEY = '16ff3d7beda14afdb46915bd35166';
  constructor(private httpClient: HttpClient) {}
  public getNews() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`
    );
  }
}
