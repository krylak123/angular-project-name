import { Roles } from '../enums/role.enum';

export interface User {
  id: number;
  role: Roles;
  name: string;
  surname: string;
  email: string;
  password: string;
}
