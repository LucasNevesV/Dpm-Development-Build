import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { pages } from '../Models/pages.model';
import { Subject } from 'rxjs';
import { data } from '../Models/data.model';
import { post } from '../Models/post.model';
//import { data } from './data.model';


@Injectable()
export class DataService {
  pagesChanged = new Subject<pages[]>();

  constructor(private http: Http) { }
  private userName: string;
  atoken: string;
  atokenP: string;
  private paginas: pages[] = [];
  reqReturn;
  private arraydata: any;
  private pages: pages[] = [];
  private posts: post[] = [];
  private postsV: post[] = [];
  private data: data[] = [];
  private in: number[] = [];
  private pages2: any = [];
  total = [];
  aTotal = 0;
  Rtotal = [0, 0, 0, 0, 0, 0];
  sac: number = 0;
  sacD: number = 0;
  nav;
  date;

  readonly rootUrl =
    "https://graph.facebook.com/v3.1/me/";

  getPages() {

    this.http.get(this.rootUrl + "accounts" + this.atoken).map((data) => data.json())
      .subscribe((data) => {
        this.arraydata = data.data;
        var index = 0;
        this.arraydata.forEach(arraydata => {
          this.pages.push(new pages(index, arraydata.name, arraydata.access_token));
        });
        return this.arraydata;
      });
  }

  setPages(paginas: pages[]) {
    var index = 0;
    paginas.forEach(page => {
      this.pages.push(new pages(index, page.name, page.access_token));
    });
    this.paginas = paginas;
  }

  setDate(data){
    this.date = data;
  }
  getDate(){
    return this.date;
  }

  getNames() {
    return this.pages;
  }

  setUser(name: string) {
    this.userName = name;
  }

  getUser() {
    return this.userName;
  }

  setNav(data) {
    var total = 0;
    data.data[0].values.forEach(element => {
      total = element.value + total;
    });
    this.nav = total;
  }

  setSac(data) {
    data.data.forEach(element => {
      if (element.updated_time.charAt(3) === '8' && element.updated_time.charAt(6) === '8') {
        this.sac++;
      }
      if (element.updated_time.charAt(3) === '8' && element.updated_time.charAt(6) === '7') {
        this.sacD++;
      }
    });
    this.sacD = this.sac - this.sacD;
  }

  setData(data) {
    console.log(data);
    
    this.total.push(data.data[0].values.pop().value);
    this.total.push((data.data[0].values.pop().value - data.data[0].values[0].value));
    data.data[1].values.forEach(element => {
      this.aTotal = element.value + this.aTotal;
    });
    this.total.push(this.aTotal);
  }

  setReactions(data) {
    var index = 0;
    data.data.forEach(element => {
      element.values.forEach(element => {
        this.Rtotal[index] = element.value + this.Rtotal[index];
      });
      index++;
    });
  }

  setPosts(data) {
    data.data.forEach(element => {
      if (element.type === 'photo') {
        this.posts.push(new post(element.created_time.substring(0,10), element.message, element.link, element.insights.data[0].values[0].value, element.full_picture,element.insights.data[1].values[0].value));
      } else {
        this.postsV.push(new post(element.created_time.substring(0,10), element.message, element.link, element.insights.data[0].values[0].value, element.full_picture,element.insights.data[1].values[0].value));
      }
    });
    this.posts.sort((a, b): number => {
      if (a.Alcance < b.Alcance) return 1;
      if (a.Alcance > b.Alcance) return -1;
      return 0;
    });
    this.postsV.sort((a, b): number => {
      if (a.Alcance < b.Alcance) return 1;
      if (a.Alcance > b.Alcance) return -1;
      return 0;
    });
    var index = 1;
    this.posts.forEach(element => {
      element.setId(index);
      index++;
    });
    index = 1;
    this.postsV.forEach(element => {
      element.setId(index);
      index++;
    });
  }

  getPosts() {
    return this.posts;
  }

  getPostsV() {
    return this.postsV;
  }
}
