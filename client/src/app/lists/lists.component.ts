import { Component, OnInit } from '@angular/core';
import { Member } from '../_model/member';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  members: Partial<Member[]>;
  predicate = 'Members I like';
  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadLikes(this.predicate);
  }
  
  loadLikes(event) {
    console.log(event);
    if(event == "Members I like") this.predicate='liked'
    if(event == "Members who like me") this.predicate='likedBy'

    this.memberService.getLikes(this.predicate).subscribe(response => {
      this.members = response;
    })
  }

}

