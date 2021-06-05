import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any ={};
  constructor(public accountService: AccountService) { }
  collapsed = true;

  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  ngOnInit(): void {
  }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response)

    },error=>{
      console.log(error)
    })
    
  }

  logout(){
    this.accountService.logout()

  }
}
