import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SelectedFarmService } from './selected-farm.service';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import {
  EditService,
  ToolbarService,
  SortService,
} from '@syncfusion/ej2-angular-grids';
import { DataService } from './data.service';

@Component({
  selector: 'mt-sample-detail',
  templateUrl: './mt-sample-detail.component.html',
})
export class MtSampleDetailComponent implements OnInit {
  selectedFarm: Farm;
  constructor(private selectedFarmService: SelectedFarmService) {}

  ngOnInit() {
    this.selectedFarmService.NewFarmSelectedResponseEvent.subscribe((resp) => {
      this.newFarmSelected(resp);
    });
  }

  newFarmSelected(farm: Farm) {
    this.selectedFarm = farm;
  }
}
