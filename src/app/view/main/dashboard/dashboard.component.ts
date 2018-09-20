import { Component, OnInit } from '@angular/core';
import { pages } from '../../../Models/pages.model';
import { DataService } from '../../../Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fansF;
  public fansI: any;
  public alcanceF: any;
  public alcanceI: any;
  public likesI: any;
  public likesF: any;
  public sac:any;
  public sacD:any;
  public cliente:any;
  public Rtotal = [];

  constructor(private dataService: DataService) { }

  onGet(){
    //this.dataService.getPages();
  }

  testee(){
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
  }

  ngOnInit(){
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
