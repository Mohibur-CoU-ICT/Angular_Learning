import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {

  filterString: string = '';

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

}
