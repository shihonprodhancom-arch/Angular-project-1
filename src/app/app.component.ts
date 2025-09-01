import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eshop';
  isLoggedIn = true;

  constructor(private router: Router) {}

    ngOnInit(): void {
      this.login();
    }
    login(){
      if (this.isLoggedIn) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login'])
      }
    }
  
 
}
