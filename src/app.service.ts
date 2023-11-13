import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  usernames: string[];
  constructor() {
    this.usernames = ['노정훈', '권예진', '이정원'];
  }

  getHello(): string {
    return 'Hello World!';
  }

  getUsernameByIndex(index: number) {
    if (index < 0 || index >= this.usernames.length) {
      throw Error('Index out of range');
    }
    return this.usernames[index];
  }

  postUsername(name: string) {
    if (name == null) {
      throw Error('Invalid User Name');
    }
    this.usernames.push(name);
    return this.usernames;
  }

  deleteUsernameByIndex(index: number) {
    if (index < 0 || index >= this.usernames.length) {
      throw Error('Index out of range');
    }
    this.usernames.splice(index, 1);
    return this.usernames;
  }
}
