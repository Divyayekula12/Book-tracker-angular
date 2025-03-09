import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() title: string = "";
  
  nameOfBorrower: string = '';
  bookId: string = '';
  bookTitle: string = '';
  contactNumber: string = '';
  issueDate: string = '';
  status: string = 'Completed';

  constructor(private sharedService: SharedService) {}

  addUser () {
    if (!this.nameOfBorrower || !this.bookId || !this.bookTitle || !this.contactNumber || !this.issueDate) {
      alert('All fields are required.');
      return;
    }

    if (!/^\d{10}$/.test(this.contactNumber)) {
      alert('Contact Number must be exactly 10 digits.');
      return;
    }

    const newUser  = {
      nameOfBorrower: this.nameOfBorrower,
      bookId: this.bookId,
      bookTitle: this.bookTitle,
      contactNumber: this.contactNumber,
      issueDate: this.issueDate,
      status: this.status
    };

    this.sharedService.addUser (newUser ); 
    this.clearForm();  
  }

  clearForm() {
    this.nameOfBorrower = '';
    this.bookId = '';
    this.bookTitle = '';
    this.contactNumber = '';
    this.issueDate = '';
  }
}