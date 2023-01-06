import { Roles } from '../enums/role.enum';

export interface User {
  id: string;
  role: Roles;
  name: string;
  surname: string;
  album: number;
  status: string;
  phoneNumber: string;
  email: string;
  birthdayDate: Date;
  adress: string;
  studyField: string;
  specialization: string;
}
