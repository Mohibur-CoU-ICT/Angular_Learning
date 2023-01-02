import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], filterString: string) {
    if (filterString.length === 0) {
      return value;
    }
    const users: User[] = [];
    for (let user of value) {
      if (user.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
        users.push(user);
      }
    }
    return users;
  }

}
