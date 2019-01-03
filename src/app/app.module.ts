import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SlotDetailComponent } from './time-slot/slot-detail/slot-detail.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TimeSlotComponent,
    SlotDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
