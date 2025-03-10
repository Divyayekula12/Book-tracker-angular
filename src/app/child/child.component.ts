import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  nameOfBorrower: string = '';
  bookId: string = '';
  bookTitle: string = '';
  contactNumber: string = '';
  issueDate: string = '';
  status: string = '';

  @Output() userAdded = new EventEmitter<User>();  


  addUser() {
    if (!this.nameOfBorrower || !this.bookId || !this.bookTitle || !this.contactNumber || !this.issueDate) {
      alert('All fields are required.');
      return;
    }
  
    if (!/^\d{10}$/.test(this.contactNumber)) {
      alert('Contact Number must be exactly 10 digits.');
      return;
    }
  
    const newUser: User = {
      nameOfBorrower: this.nameOfBorrower,
      bookId: this.bookId,
      bookTitle: this.bookTitle,
      contactNumber: this.contactNumber,
      issueDate: this.issueDate,
      status: this.status
    };
  
    this.userAdded.emit(newUser); 
  
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
