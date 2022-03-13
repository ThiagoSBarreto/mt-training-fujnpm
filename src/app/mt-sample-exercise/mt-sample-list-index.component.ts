import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent implements OnInit {
  public filters = [
    { id: 0, name: 'All' },
    { id: 1, name: 'No' },
    { id: 2, name: 'Active Date' },
  ];

  public farms: Farm[];
  public showFilter: Farm[];
  public errorMessage: String;
  public errorVisible: Boolean;

  constructor(
    private dataService: DataService,
    private farmService: SelectedFarmService
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  onFilterChange(value) {
    if (value == 'All') {
      this.showFilter = this.farms;
    } else if (value == 'No') {
      this.showFilter = this.farms.filter((f) => {
        return f.FarmNo.startsWith('100');
      });
    } else if (value == 'Active Date') {
      this.showFilter = this.farms.filter((f) => {
        const date: Date = new Date(f.ActiveDate);
        return date.getFullYear() == 2020;
      });
    }
  }

  fetchData() {
    this.dataService
      .getJsonData()
      .then((resp) => {
        this.farms = resp;
        this.showFilter = this.farms;
      })
      .catch((err) =>
        this.showErrorMessage('Error while fetching data from server')
      );
  }

  selectRow(index) {
    this.farmService.NewFarmSelectedResponseEvent.emit(this.showFilter[index]);
  }

  errorButton() {
    this.dataService
      .getJsonDataException()
      .then((resp) => {
        this.farms = resp;
        this.showFilter = this.farms;
      })
      .catch((err) =>
        this.showErrorMessage('Error while fetching data from server')
      );
  }

  showErrorMessage(message: String) {
    this.errorMessage = message;
    this.errorVisible = true;

    interval(5000).subscribe((x) => {
      this.errorVisible = false;
    });
  }
}
