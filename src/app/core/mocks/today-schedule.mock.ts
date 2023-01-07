import { Schedule } from '@core/models/schedule.interface';

export const mockTodaySchedule: Schedule = {
  id: crypto.randomUUID(),
  data: new Date(),
  classes: [
    {
      name: 'Proseminarium',
      type: 'ćwiczenia',
      classTime: '8:00 - 9:30',
      teacher: 'Name Surname',
    },
    {
      name: 'Narzędzia pracy Front-end developera',
      type: 'laboratorium',
      classTime: '10:30 - 12:00',
      teacher: 'Name Surname',
    },
    {
      name: 'Projektowanie systemów informatycznych',
      type: 'laboratorium',
      classTime: '12:15 - 15:55',
      teacher: 'Name Surname',
    },
    {
      name: 'Systemy CMS - studium przypadku',
      type: 'ćwiczenia',
      classTime: '16:00 - 17:35',
      teacher: 'Name Surname',
    },
    {
      name: 'Projektowanie interfesów użytkownika',
      type: 'ćwiczenia',
      classTime: '17:45 - 20:10',
      teacher: 'Name Surname',
    },
  ],
};
