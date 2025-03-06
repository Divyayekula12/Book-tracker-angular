import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true, 
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  users: any[] = [];  
  title: string = "Book Stream Tracker";
  addUser(user: any) {
    this.users.push(user);        
  }
}
