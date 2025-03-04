import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ParentComponent], 
  template: `<app-parent></app-parent>`, 
})
export class AppComponent {}
