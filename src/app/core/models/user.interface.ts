import { Roles } from '../enums/role.enum';

export interface User {
  id: string;
  role: Roles;
  name: string;
  surname: string;
}
