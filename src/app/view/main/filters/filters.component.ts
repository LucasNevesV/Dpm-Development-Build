import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../../Data/data-storege.service';
import { DataService } from '../../../Data/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private dataService: DataService, private dataStorage: DataStorageService,private router: Router) { }

  names = [];
  selectedDate1: Date;
  selectedDate2;
  selectedDate3;
  selectedDate4;
  token;
  selectedValue: string;

  dates: DataTime[] = [
    {value: 'since=2018-01-01&until=2018-01-31', viewValue: 'Janeiro'},
    {value: 'since=2018-02-01&until=2018-02-28', viewValue: 'Fevereiro'},
    {value: 'since=2018-03-01&until=2018-03-31', viewValue: 'Março'},
    {value: 'since=2018-04-01&until=2018-04-30', viewValue: 'Abril'},
    {value: 'since=2018-05-01&until=2018-05-31', viewValue: 'Maio'},
    {value: 'since=2018-06-01&until=2018-06-30', viewValue: 'Junho'},
    {value: 'since=2018-07-01&until=2018-07-31', viewValue: 'Julho'},
    {value: 'since=2018-08-01&until=2018-08-31', viewValue: 'Agosto'},
    {value: 'since=2018-09-01&until=2018-09-30', viewValue: 'Setembro'},
    {value: 'since=2018-10-01&until=2018-10-31', viewValue: 'Outrubro'},
    {value: 'since=2018-11-01&until=2018-11-30', viewValue: 'Novembro'},
    {value: 'since=2018-12-01&until=2018-12-31', viewValue: 'Dezembro'}
  ];
  
  ngOnInit() {
    this.getNames();
    if(this.dataStorage.atoken == null){
      this.router.navigate(['login']);

    }
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

  sendFilters() {

    this.dataStorage.atoken = this.token;
    this.dataStorage.date.push(this.selectedDate1);
    this.dataStorage.date.push(this.selectedDate2);
    this.dataStorage.date.push(this.selectedDate3);
    this.dataStorage.date.push(this.selectedDate4);
    this.dataStorage.getData();

  }

  selectChangeHandler(event: any) {

    this.token = "&access_token=" + event.target.value;
    //this.dataStorage.getData();

  }
  date1ChangeHandler(event: any) {

    this.selectedDate1 = event.target.value;
    console.log('Teste');
    

  }
  date2ChangeHandler(event: any) {

    this.selectedDate2 = event.target.value;

  }

}

export interface DataTime {
  value: string;
  viewValue: string;
}