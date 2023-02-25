export class User {
  id?: number;
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;

  constructor() {
    this.id = 1;
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
  }
}
