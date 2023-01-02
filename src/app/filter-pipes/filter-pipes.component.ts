import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {

  users = [
    {
      name: 'Mohibur Rahman',
      dateOfBirth: new Date(1996, 3, 12)
    },
    {
      name: 'Bodiul Alam',
      dateOfBirth: new Date(1989, 10, 24)
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
