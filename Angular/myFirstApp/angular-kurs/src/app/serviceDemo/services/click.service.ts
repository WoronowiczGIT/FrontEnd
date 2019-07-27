import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { LogService } from './log.service';


@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClicks = 0;

  private sum = new Subject<number>();
  //wstrzykujemy serwis w serwis
  constructor(private log: LogService) { }

  addClicks(): void {
    this.sumClicks++;
    // Dajemy znać że wartość Subject uległa zmianie
    // ponieważ @Injectable nie ma tablicy providers
    // musimy zarejestrowac servis w ngModule
    this.sum.next(this.sumClicks);
    console.log('suma: ' + this.sumClicks);
    this.log.logger('Kliknalem');
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }

}
