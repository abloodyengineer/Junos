import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_model/member';
import { User } from 'src/app/_model/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm;
  member: Member
  user: User
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private accountService: AccountService, private memberService: MembersService, private toastr: ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user=user)
   }

  ngOnInit(): void {
    this.loadMember()
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member=>{
      this.member=member
    })
  }
  
  updateMember(){
    this.memberService.updateMember(this.member).subscribe(()=>{
      console.log(this.member);
      this.toastr.success("Profile Updated successfully")
      this.editForm.reset(this.member)
    })
    
    
  }

}
