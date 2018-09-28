import { Component, OnInit, ViewChild } from '@angular/core';
import { pages } from '../../../Models/pages.model';
import { DataService } from '../../../Data/data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort, MatTableDataSource } from '@angular/material';
import { post } from '../../../Models/post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

  //MatTable
  dataSource;
  dataSourceV;
  columnsToDisplay = ['Id', 'Date', 'Alcance','Likes'];

  @ViewChild(MatSort) sort: MatSort;

  fansF;
  public fansI: any;
  public alcanceF: any;
  public alcanceI: any;
  public likesI: any;
  public likesF: any;
  public sac: any;
  public sacD: any;
  public cliente: any;
  public Rtotal = [];

  constructor(private dataService: DataService) { }

  onGet() {
    //this.dataService.getPages();
  }

  testee() {
    
    this.fansF = this.dataService.total[0];
    this.fansI = this.dataService.total[1];
    this.alcanceF = this.dataService.total[2];
    this.alcanceI = this.dataService.total[2];
    this.likesF = this.dataService.total[3];
    this.likesI = this.dataService.total[3];
    this.sac = this.dataService.sac;
    this.sacD = this.dataService.sacD;
    this.cliente = this.dataService.getUser();
    this.Rtotal = this.dataService.Rtotal;
    this.dataSource = this.dataService.getPosts();
    this.dataSourceV = this.dataService.getPostsV();
    this.dataSource.sort = this.sort;
    this.dataSourceV.sort = this.sort;

  }

  ngOnInit() {
  }

  /*
  /  Chart.Js
  */

  // Doughnut
  public doughnutChartLabels: string[] = ['Mulheres', 'Homens'];
  public doughnutChartData: number[] = [76, 24];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}


/*
/ MatTable 
*/
