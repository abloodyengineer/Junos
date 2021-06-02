import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any ={};
  loggedIn: boolean= false
  constructor(private accountService: AccountService) { }
  collapsed = true;

  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  ngOnInit(): void {
    this.getCurrentUser()
  }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response)
      this.loggedIn=true
    },error=>{
      console.log(error)
    })
    
  }

  logout(){
    this.accountService.logout()
    this.loggedIn=false;
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user=>{
      console.log(!user)
      this.loggedIn=!!user
    },error=>{
      console.log(error);
      
    })
  }

}
