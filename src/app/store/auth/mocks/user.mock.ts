import { User } from '@core/models/user.interface';

export const mockUser: User = {
  id: crypto.randomUUID(),
  role: 'USER',
  name: 'Kazimierz',
  surname: 'Kazimowicz',
  album: 13827,
  status: 'AKTYWNY',
};
