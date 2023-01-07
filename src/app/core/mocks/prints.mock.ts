import { Prints } from './../models/pritns.interface';

export const mockPrints: Prints[] = Array.from({ length: 32 }, (_, i) => ({
  name: `file-name-${i}.pdf`,
  size: i * Math.floor(Math.random() * 100) + 1,
  dateModify: new Date(),
}));
