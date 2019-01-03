import { Routes } from '@angular/router';
import {TimeSlotComponent, SlotDetailComponent} from './component-index';

export const routes: Routes = [
  {
    path: '' , children: [
       { path: '', component: TimeSlotComponent },
       { path: 'detail', component: SlotDetailComponent },
    ]
  },
]
