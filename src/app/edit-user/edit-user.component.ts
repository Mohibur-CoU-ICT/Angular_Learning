import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactiveGuard } from '../services/guards/deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, IDeactiveGuard {

  user!: { id: string, name: string };

  editUserDetails!: { id: string, name: string };

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name']
      };

      this.editUserDetails = { ...this.user };
    });
  }

  canExit(): boolean | Promise<boolean> | Observable<boolean> {
    if (this.user.id !== this.editUserDetails.id || this.user.name !== this.editUserDetails.name) {
      if (confirm('All unsaved changes will be lost')) {
        return true;
      }
      else {
        return false;
      }
    }

    return true;
  }

}
