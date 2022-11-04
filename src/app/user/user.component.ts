import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [`
    .offline {
      color: white;
    }
  `]
})
export class UserComponent implements OnInit {
  @Input('user') userName: string = '';

  constructor() {  
  }

  ngOnInit(): void {
    
  }
  
}