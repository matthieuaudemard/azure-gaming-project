import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private static readonly ROOT_URL = 'http://localhost:5000/api/games';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(GameService.ROOT_URL);
  }
}
