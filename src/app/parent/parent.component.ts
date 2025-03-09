import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent, DropdownComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title: string = "Book Stream Tracker";
  users: any[] = [
    { nameOfBorrower: 'Alice', bookId: '101', bookTitle: 'Angular Basics', contactNumber: '9876543210', issueDate: '2024-03-01', status: 'Pending' },
    { nameOfBorrower: 'Bob', bookId: '102', bookTitle: 'React Advanced', contactNumber: '8765432109', issueDate: '2024-02-15', status: 'Completed' },
    { nameOfBorrower: 'Charlie', bookId: '103', bookTitle: 'Vue Mastery', contactNumber: '7654321098', issueDate: '2024-01-10', status: 'In Progress' },
    { nameOfBorrower: 'Divya', bookId: 'B601', bookTitle: 'Wings of fire', contactNumber: '9876543210', issueDate: '2024-03-07', status: 'Cancelled' },
    { nameOfBorrower: 'Divya', bookId: 'G101', bookTitle: 'Moonlight Stories', contactNumber: '9876543210', issueDate: '2024-03-07', status: 'Pending' },
    { nameOfBorrower: 'Divya', bookId: 'C101', bookTitle: 'It ends with us', contactNumber: '9876543210', issueDate: '2024-03-07', status: 'Completed' },
    { nameOfBorrower: 'Divya', bookId: 'J101', bookTitle: 'Java programming', contactNumber: '9876543210', issueDate: '2024-03-07', status: 'Cancelled' },
    { nameOfBorrower: 'Divya', bookId: '3G01', bookTitle: 'linux basics', contactNumber: '9876543210', issueDate: '2024-03-07', status: 'Pending' },
    { nameOfBorrower: 'Divya', bookId: 'VT61', bookTitle: 'DBMS complete Guide', contactNumber: '9876543210', issueDate: '2024-03-07', status: 'In Progress' }
  ];

  filteredUsers: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    
    // Initialize the filteredUsers with the default users
    this.filteredUsers = [...this.users];

    // Subscribe to the shared service to get the updated users
    this.sharedService.users$.subscribe(users => {
      this.filteredUsers = users; // Update filteredUsers whenever users change
    });

    // Subscribe to selected statuses to filter users
    this.sharedService.selectedStatuses$.subscribe(selectedStatuses => {
      this.filterUsers(selectedStatuses);
    });
  }

  addUser (user: any) {
    this.sharedService.addUser (user); // Add user through the shared service
  }

  filterUsers(selectedStatuses: string[]) {
    if (selectedStatuses.length === 0) {
      this.filteredUsers = [...this.users]; // Show all users by default
    } else {
      this.filteredUsers = this.users.filter(user => selectedStatuses.includes(user.status));
    }
  }
}