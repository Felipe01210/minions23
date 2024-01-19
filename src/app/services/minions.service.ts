import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minions.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MinionsService {

  private url = 'http://localhost:3000/minions/'

  constructor(private http: HttpClient) { 
    console.log('Servicio iniciado')
  }

  getMinions(): Observable<Minion[]>{
    return this.http.get<Minion[]>(this.url)
  }

  getMinionById(id:number): Observable<Minion>{
    return this.http.get<Minion>(this.url+id)
  }

  getMinionByName(name:string): Observable<Minion[]>{
    return this.http.get<Minion[]>(`${this.url}?name=${name}`)
  }

  getMinionByQuery(query:string): Observable<Minion[]>{
    return this.http.get<Minion[]>(`${this.url}?q=${query}`)
  }

  addMinion(minion: Minion): Observable<Minion>{
    return this.http.post<Minion>(this.url, minion);
  }

  editMinion(minion: Minion): Observable<Minion>{
    return this.http.put<Minion>(this.url+minion.id, minion)
  }

  deleteMinion(id:number): Observable<any>{
    return this.http.delete(this.url+id)
  }

  // getMinionsByName(searchTerm:String){
  //   return this.minions.filter(minion => minion.name.toLowerCase().includes(searchTerm.toLowerCase()));
  // }

  // getOneMinionByName(name:String){
  //   return this.minions.filter(minion =>  minion.name == name)[0];
  // }
}
