import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
//import { DataService } from "../data/data.service";
import 'rxjs/Rx';
import { pages } from "../Models/pages.model";
import { DataService } from "./data.service";
import { DashboardComponent } from "../view/main/dashboard/dashboard.component";

//import { DataComponent } from "../data/data.component";
@Injectable()
export class DataStorageService {
    constructor(private http: Http, private dataservice: DataService, private dashboardComponent: DashboardComponent) { }

    readonly rootUrl =
        "https://graph.facebook.com/v3.1/me/";

    atoken: string;
    total = [];
    teste;
    citys: string;

    storeInfo() {

    }

    getRecipes() {
        this.http.get(this.rootUrl + "accounts" + this.atoken)
            .subscribe(
                (response: Response) => {
                    const paginas: pages[] = response.json();
                    this.dataservice.setPages(paginas.data);
                }
            );
    }

    getData() {

        /*
        /   ?fields=type tipo de POST
        */
        this.http.get(this.rootUrl + "insights/page_fans,page_impressions_unique?since=2018-07-01&until=2018-08-01" + this.atoken).map((data) => data.json())
            .subscribe((data) => {
                console.log(data);

                this.dataservice.setData(data);
            });
        this.http.get(this.rootUrl + "insights/page_actions_post_reactions_like_total,page_actions_post_reactions_love_total,page_actions_post_reactions_wow_total,page_actions_post_reactions_haha_total,page_actions_post_reactions_sorry_total,page_actions_post_reactions_anger_total/day?since=2018-07-01&until=2018-08-01?since=2018-07-01&until=2018-08-01" + this.atoken).map((data) => data.json())
            .subscribe((data) => {
                this.dataservice.setReactions(data);
            });

        this.http.get(this.rootUrl + "insights/page_fans_gender_age,page_fans_city?until=2018-08-01" + this.atoken).map((data) => data.json())
            .subscribe((data) => {
                console.log(data.data[1].values[0].value);
            });

        this.http.get(this.rootUrl + "conversations?limit=100" + this.atoken).map((data) => data.json())
            .subscribe((data) => {
                this.dataservice.setSac(data);
            });
        this.http.get(this.rootUrl + "me" + this.atoken).map((data) => data.json())
            .subscribe((data) => {
                this.dataservice.setUser(data.name);
            });

        this.http.get(this.rootUrl + "insights/page_impressions_unique/day?since=2018-09-01" + this.atoken).map((data) => data.json())
            .subscribe((data) => {
                this.dataservice.setNav(data);
            });

        this.http.get(this.rootUrl + "posts?fields=name,message,link,type,full_picture,created_time,insights.metric(post_impressions_unique)&since=2018-07-01&until=2018-08-01" + this.atoken).map((data) => data.json())
            .subscribe((data) => {
                console.log(data);
                this.dataservice.setPosts(data);
            });

    }
}