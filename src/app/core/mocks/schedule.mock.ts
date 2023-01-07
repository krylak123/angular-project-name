import { ListResponse } from '@appStore/models/list-response.interface';
import { Schedule } from './../models/schedule.interface';

interface ScheduleDates {
  id: number;
  schedule: ListResponse<Schedule>;
}

const mockSchedule1: ListResponse<Schedule> = {
  list: [
    {
      id: crypto.randomUUID(),
      data: new Date('2022-12-26'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2022-12-27'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2022-12-28'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2022-12-29'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2022-12-30'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2022-12-21'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-01'),
      classes: [],
    },
  ],
};

const mockSchedule2: ListResponse<Schedule> = {
  list: [
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-02'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-03'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-04'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-05'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-06'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-07'),
      classes: [
        {
          name: 'Projektowanie systemów informatycznych',
          type: 'Wykład',
          teacher: 'Name Surname',
          classTime: '13:25 - 15:00',
        },
        {
          name: 'Projektowanie systemów informatycznych',
          type: 'Wykład',
          teacher: 'Name Surname',
          classTime: '15:10 - 16:45',
        },
        {
          name: 'Narzędzia pracy front-end developera',
          type: 'Wykład',
          teacher: 'Name Surname',
          classTime: '16:50 - 18:30',
        },
        {
          name: 'Projektowane witryn typu SPA',
          type: 'Wykład',
          teacher: 'Name Surname',
          classTime: '18:35 - 20:10',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-08'),
      classes: [
        {
          name: 'Proseminarium',
          type: 'Ćwiczenia',
          teacher: 'Name Surname',
          classTime: '08:00 - 9:30',
        },
        {
          name: 'Narzędzia pracy front-end developera',
          type: 'Laboratorium',
          teacher: 'Name Surname',
          classTime: '10:30 - 12:00',
        },
        {
          name: 'Projektowanie systemów informatycznych',
          type: 'Laboratorium',
          teacher: 'Name Surname',
          classTime: '12:15 - 15:55',
        },
        {
          name: 'Systemy CMS - studium przypadku',
          type: 'Laboratorium',
          teacher: 'Name Surname',
          classTime: '16:00 - 17:35',
        },
        {
          name: 'Projektowanie interfejsów użytkownika',
          type: 'Laboratorium',
          teacher: 'Name Surname',
          classTime: '17:45 - 20:10',
        },
      ],
    },
  ],
};

const mockSchedule3: ListResponse<Schedule> = {
  list: [
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-09'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-10'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-11'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-12'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-13'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-14'),
      classes: [],
    },
    {
      id: crypto.randomUUID(),
      data: new Date('2023-01-15'),
      classes: [],
    },
  ],
};

export const mockSchedule: ScheduleDates[] = [
  {
    id: 1,
    schedule: mockSchedule1,
  },
  {
    id: 2,
    schedule: mockSchedule2,
  },
  {
    id: 3,
    schedule: mockSchedule3,
  },
];
