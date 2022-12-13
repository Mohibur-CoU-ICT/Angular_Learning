import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeactiveGuard } from '../services/guards/deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, IDeactiveGuard {

  constructor() { }

  ngOnInit(): void {
  }

  canExit(): boolean | Promise<boolean> | Observable<boolean> {
    if (confirm('Are are sure you want to exit?')) {
      return true;
    }
    return false;
  }

}
