import { Subject } from "rxjs";

export class UserService {

  addUserEvent = new Subject<boolean>();

  getUser(id: string) {
    if (id === '1') {
      return {
        id: '1',
        name: 'Mohibur'
      };
    } else {
      return {
        id: '2',
        name: 'Hasan'
      };
    }
  }

  addUser() {
    this.addUserEvent.next(true);
  }
}