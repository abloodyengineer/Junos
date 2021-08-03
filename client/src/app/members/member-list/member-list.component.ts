import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/_model/member';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members$:Observable<Member[]>
  dummyUser:Member;
  constructor(private memberService: MembersService, public accountService: AccountService) { }

  ngOnInit(): void {
    this.members$=this.memberService.getMembers()
    this.memberService.getMember("DummyUser").subscribe(x=> this.dummyUser=x)
  }

  // loadMembers(){
  //   this.memberService.getMembers().subscribe(members=>{
  //     this.members=members
  //   })
  // }

}
