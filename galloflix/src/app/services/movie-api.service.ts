import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  
  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3';
  options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjkyNTJjOWFmMDUxNjIyOWVmMDhjMDk4MzIyNTcwNSIsIm5iZiI6MTc0NjgzODkyNi4zNzY5OTk5LCJzdWIiOiI2ODFlYTU4ZTEwMjg1MjU2ODUyZDBlYjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cjxiArhjCZwl-M4U3ysjSNvJFGlrjH6Py5m_sUE4_cs'
  }
};

// Banner de Midias da Semana
bannerApiData(): Observable<any> {
  return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
}

}
