import { EventEmitter, Injectable } from '@angular/core';
import { Farm } from './farm';

@Injectable()
export class SelectedFarmService {
  
  NewFarmSelectedResponseEvent: EventEmitter<Farm> = new EventEmitter<Farm>();
}
