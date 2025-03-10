import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  private selectedStatusesSubject = new BehaviorSubject<string[]>([]);
  selectedStatuses$ = this.selectedStatusesSubject.asObservable();

  addUser(user: User) {
    const currentUsers = this.usersSubject.getValue();
    this.usersSubject.next([...currentUsers, user]);
  }

  toggleStatus(status: string): void {
    const currentStatuses = this.selectedStatusesSubject.getValue();
    const updatedStatuses = currentStatuses.includes(status)
      ? currentStatuses.filter(s => s !== status)
      : [...currentStatuses, status];

    this.selectedStatusesSubject.next(updatedStatuses);
  }

  getSelectedStatuses(): string[] {
    return this.selectedStatusesSubject.getValue();
  }

  setSelectedStatuses(statuses: string[]): void {
    this.selectedStatusesSubject.next(statuses);
  }
}
