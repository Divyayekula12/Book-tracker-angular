import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  private selectedStatusesSubject = new BehaviorSubject<string[]>([]);

  users$ = this.usersSubject.asObservable();
  selectedStatuses$ = this.selectedStatusesSubject.asObservable();

  addUser (user: any) {
    const currentUsers = this.usersSubject.value;
    
    // Add the new user to the end of the current users array
    this.usersSubject.next([...currentUsers, user]);
  }

  setSelectedStatuses(statuses: string[]) {
    this.selectedStatusesSubject.next(statuses);
  }
}