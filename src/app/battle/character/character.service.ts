import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Character } from './character';

@Injectable()
export class CharacterService {

  public apiUrl:string = 'https://pokemon-battle-lumen.herokuapp.com';

  constructor(private http: HttpClient) { 

  }

  all(): Observable<Character[]> {
  	return this.http.get<Character[]>(`${this.apiUrl}/all`)
  }

}
