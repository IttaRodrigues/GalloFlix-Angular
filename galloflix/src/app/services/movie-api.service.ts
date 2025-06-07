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

// Filmes em Destaque do Dia
trendingMovieApiData(): Observable<any> {
  return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options)
}

// Séries em Destaque do Dia
trendingSerieApiData(): Observable<any> {
  return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options)
}

// Filmes de Ação mais Populares
popularActionMovieApiData(): Observable<any> {
  return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28&sort_by=popularity.desc`, this.options)
}

// Detalhes do filme ou serie
mediaDetails(type: any, value: any): Observable<any> {
  return this.http.get(`${this.baseUrl}/${type}/${value}?language=pt-br`, this.options)
}

  // Trailers do filme ou serie
mediaTrailers(type: any, value: any): Observable<any> {
  return this.http.get(`${this.baseUrl}/${type}/${value}/videos?language=pt-br`, this.options)
}

// Elenco do filme ou serie
mediaCast(type: any, value: any): Observable<any> {
  return this.http.get(`${this.baseUrl}/${type}/${value}/credits?language=pt-br`, this.options)
}

//Buscar um ator ou atriz
personDetails(value: any): Observable<any> {
  return this.http.get(`${this.baseUrl}/person/${value}?language=pt-br`, this.options)
}
}