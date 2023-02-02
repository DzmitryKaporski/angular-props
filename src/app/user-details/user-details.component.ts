import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userLastName: string = 'Kaporski'
  userFirstName: string = 'Dima'
  userAge: number = 25

  constructor() { }

  ngOnInit(): void {
  }

  get userFullName(): string {
    return `${this.userFirstName} ${this.userLastName}`
  }

}
