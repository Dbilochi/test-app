import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot-detail',
  templateUrl: './slot-detail.component.html',
  styleUrls: ['./slot-detail.component.css']
})
export class SlotDetailComponent implements OnInit {
  public slot_id;
  form_value = {};
  public slotForm: FormGroup = this.builder.group({
    'firstName' : ['',[Validators.required]],
    'lastName': ['', [Validators.required]],
    'PhoneNumber' : ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
  });

  constructor(
  private builder: FormBuilder,
  public router: Router) { }

  ngOnInit() {
    const queryParams = this.router.routerState.snapshot.root.queryParams;
    this.slot_id = queryParams['SlotId'];
    this.form_value = JSON.parse(localStorage.getItem(this.slot_id));
    this.slotForm.patchValue(this.form_value);
  }

  submitForm(value: any):void{
    if(this.slotForm.valid){
      localStorage.setItem(this.slot_id , JSON.stringify(value));
      this.router.navigate(['/']);
    }
  }

  back(){
    this.router.navigate(['/']);
  }
}
