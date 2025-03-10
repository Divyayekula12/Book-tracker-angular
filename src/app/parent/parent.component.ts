import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SharedService } from '../shared.service';
import { User } from '../user.model';
import { ChildComponent } from '../child/child.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, NgFor, ChildComponent, DropdownComponent],  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  title: string = "Book Stream Tracker";
  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Subscribe to users observable
    this.sharedService.users$.subscribe(users => {
      this.users = users;
      this.applyFilters();
    });

    // Subscribe to selected statuses observable
    this.sharedService.selectedStatuses$.subscribe(() => {
      this.applyFilters();
    });
  }
  
  handleUserAdded(newUser: User) {
    this.sharedService.addUser(newUser); 
  }
  applyFilters() {
    const selectedStatuses = this.sharedService.getSelectedStatuses();
    this.filteredUsers = selectedStatuses.length === 0 ? [...this.users] : this.users.filter(user => selectedStatuses.includes(user.status));
  }
}
