import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  nameOfBorrower: string = '';
  bookId: string = '';
  bookTitle: string = '';
  contactNumber: string = '';
  issueDate: string = '';

  @Output() userAdded = new EventEmitter<any>();  

  addUser() {
    const newUser = {
      nameOfBorrower: this.nameOfBorrower,
      bookId: this.bookId,
      bookTitle: this.bookTitle,
      contactNumber: this.contactNumber,
      issueDate: this.issueDate
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
