import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html'
})
export class MtSampleListIndexComponent {

  constructor() {

  }

}