import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { DataService } from '../../../Data/data.service';
import { DataStorageService } from '../../../Data/data-storege.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'dpm-production-build';
  constructor( private socialAuthService: AuthService,private router: Router,private dataService: DataService, private dataStorage: DataStorageService ) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.clear();
        console.log(socialPlatform+" sign in data : " , userData);
        var aToken = userData.token;
        this.dataStorage.atoken = "?access_token=" + userData.token;
        this.dataService.setUser(userData.name);
        this.dataStorage.getRecipes();
        this.router.navigate(['Home']);
        // Now sign-in with userData
        // ...
            
      }
    );
  }
  ngOnInit() {
  }
  
}

