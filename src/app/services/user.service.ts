export class UserService {
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
}