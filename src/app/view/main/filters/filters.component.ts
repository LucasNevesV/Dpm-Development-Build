import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataStorageService } from '../../../Data/data-storege.service';
import { DataService } from '../../../Data/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private dataService: DataService, private dataStorage: DataStorageService, private dashboardComponent: DashboardComponent) { }

  names = [];

  ngOnInit() {
    this.getNames();

  }
  getRequest() {
    this.dashboardComponent.testee();
  }

  getNames() {
    this.names = this.dataService.getNames();
    /*this.dataService.getPages().map(value => {
      if (value) {
        return true;
      }
      else {
      }
    }*/

    /*var index = 0;
    console.log("element");
    this.info.forEach(element => {
      console.log(element);
      this.names[index] = element.name;
    });*/
  }

  onCreate() {
    //console.log(this.paginas); 
  }
  showAll = false;
  toShow() {
    this.showAll = true;
  }
  selectChangeHandler(event: any) {
    //update the ui
    // console.log(event.target.value); ==> Token
    this.dataStorage.atoken = "&access_token=" + event.target.value;    
    this.dataStorage.getData();
  }
}