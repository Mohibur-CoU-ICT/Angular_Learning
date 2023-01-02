import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {

  filterString: string = '';

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data received");
    }, 3000);
  });

  users: User[] = [
    {
      name: 'Mohibur Rahman',
      dateOfBirth: new Date(1996, 3, 12)
    },
    {
      name: 'Bodiul Alam',
      dateOfBirth: new Date(1989, 10, 24)
    },
    {
      name: 'Moshiur Rahman',
      dateOfBirth: new Date(2000, 6, 14)
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded() {
    let year = this.getRandomInteger(1990, 2000);
    let month = this.getRandomInteger(0, 11);
    let day = this.getRandomInteger(0, 11);
    this.users.push({
      name: "Md. Fahim",
      dateOfBirth: new Date(year, month, day)
    });
  }

  // return a random integer number between [min-max] inclusive
  getRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
