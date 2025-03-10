import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  statuses = ["Pending", "Completed", "In Progress", "Cancelled"];
  selectedStatuses: string[] = [];
  isDropdownOpen = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Subscribe to shared service to keep statuses updated
    this.sharedService.selectedStatuses$.subscribe(statuses => {
      this.selectedStatuses = statuses;
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSelectionChange(status: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      if (!this.selectedStatuses.includes(status)) {
        this.selectedStatuses.push(status);
      }
    } else {
      this.selectedStatuses = this.selectedStatuses.filter(item => item !== status);
    }

    this.sharedService.setSelectedStatuses([...this.selectedStatuses]); 
  }
}
