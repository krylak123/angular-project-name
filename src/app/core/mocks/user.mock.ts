import { User } from '@core/models/user.interface';

export const mockUser: User = {
  id: crypto.randomUUID(),
  role: 'USER',
  name: 'Darrell',
  surname: 'Simmons',
  album: 13827,
  status: 'AKTYWNY',
  email: 'darrell.simmons@example.com',
  adress: 'ul. Adresowa 12 m. 24',
  birthdayDate: new Date('1996-02-1'),
  phoneNumber: '(444) 951-8590',
  specialization: 'Fronend Developer',
  studyField: 'Informatyka',
};
