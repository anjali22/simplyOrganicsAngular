import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Inventory } from '../models/inventory';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InventoryService {

  private measuresUrl = 'http://localhost:3000/inventorylist';  // URL to web api

  constructor(
    private http: HttpClient, private messageService: MessageService) { }

  /** GET measures from the server */
  getInventory(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.measuresUrl)
      .pipe(
      tap(measures => this.log(`fetched Inventory`)),
      catchError(this.handleError('getInventory', []))
      );
  }

  /** POST: add a new hero to the server */
  addInventory (inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>('http://localhost:3000/inventoryedit', inventory, httpOptions).pipe(
      tap((hero: Inventory) => this.log(`added hero`)),
      catchError(this.handleError<Inventory>('addHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('InventoryService: ' + message);
  }


}
