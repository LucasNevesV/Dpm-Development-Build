import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../../Data/data-storege.service';
import { DataService } from '../../../Data/data.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private dataService: DataService, private dataStorage: DataStorageService) { }

  names = [];
  selectedDate1: Date;
  selectedDate2;
  selectedDate3;
  selectedDate4;
  token;

  ngOnInit() {
    this.getNames();
    //this.selectedDate = new Date();
  }
  getRequest() {
  }

  getNames() {
    this.names = this.dataService.getNames();

  }

  onCreate() {
    //console.log(this.paginas); 
  }
  showAll = false;
  toShow() {
    this.showAll = true;
  }
  
  sendFilters(){

    this.dataStorage.atoken = this.token;
    console.log(this.selectedDate1);
    console.log(this.selectedDate1.toISOString() + " DALE");
    
    this.dataStorage.date.push(this.selectedDate1.toISOString());
    this.dataStorage.date.push(this.selectedDate2.toISOString());
    this.dataStorage.date.push(this.selectedDate3.toISOString());
    this.dataStorage.date.push(this.selectedDate4.toISOString());
    this.dataStorage.getData();

  }

  selectChangeHandler(event: any) {
  
    this.token = "&access_token=" + event.target.value;
    //this.dataStorage.getData();

  }

}