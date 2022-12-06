import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: { id: string; name: string };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });

    this.route.queryParams.subscribe((data: Params) => {
      console.log('queryParams =', data, typeof(data));
    });

    this.route.fragment.subscribe((data) => {
      console.log('fragment =', data, typeof(data));
    });
  }

  getHasanDetails() {
    this.router.navigate(['/users', '2', 'hasan'], {
      queryParams: {
        page: 1,
        search: 'hasan',
      },
      fragment: 'loading'
    });
  }

  onUserEdit() {
    this.router.navigate(
      ['/users', this.user.id, this.user.name, 'edit'],
      { queryParamsHandling: 'merge' }
    );
  }
}
