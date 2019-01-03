import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent {
  public morning_slots : Array<any> = [];
  public afternoon_slots : Array<any> = [];
  constructor(public router: Router) {
    let slot1,slot2 ;
    for (let i = 9; i <= 12; i++) {
      slot1 = {
            "id": i,
            "name": i +" am",
          }
      this.morning_slots.push(slot1);
    }
    for (let i = 1; i <= 5; i++) {
      slot2 = {
            "id": i,
            "name": i +" pm",
          }
      this.afternoon_slots.push(slot2);
    }
  }
  ngAfterViewInit(){
    for(var key in localStorage){
      $("#"+key).addClass("booked");
    }
  }
  select(id){
    this.router.navigate(['/detail'], { queryParams: { SlotId: id}});
  }
}
