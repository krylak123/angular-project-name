import { ListResponse } from '@appStore/models/list-response.interface';
import { Grades, SemesterSubject } from '@core/models/grades.interface';

export const mockGrades: ListResponse<Grades> = {
  list: [
    {
      semester: 1,
      subjects: Array.from({ length: 11 }, (_, i) => ({
        name: `Przedmiot ${i}`,
        techer: `Wykładowca ${i}`,
        passForm: `Forma zaliczenia ${i}`,
        subjectType: `Rodzaj przedmiotu ${i}`,
        date: new Date(),
        grade: Math.floor(Math.random() * (5 - 2 + 1) + 2),
      })),
    },
    {
      semester: 2,
      subjects: Array.from(
        { length: 8 },
        (_, i) =>
          ({
            name: `Przedmiot ${i}`,
            techer: `Wykładowca ${i}`,
            passForm: `Forma zaliczenia ${i}`,
            subjectType: `Rodzaj przedmiotu ${i}`,
            date: new Date(),
            grade: Math.floor(Math.random() * (5 - 2 + 1) + 2),
          } as SemesterSubject)
      ),
    },
    {
      semester: 3,
      subjects: Array.from(
        { length: 14 },
        (_, i) =>
          ({
            name: `Przedmiot ${i}`,
            techer: `Wykładowca ${i}`,
            passForm: `Forma zaliczenia ${i}`,
            subjectType: `Rodzaj przedmiotu ${i}`,
            date: new Date(),
            grade: Math.floor(Math.random() * (5 - 2 + 1) + 2),
          } as SemesterSubject)
      ),
    },
    {
      semester: 4,
      subjects: Array.from(
        { length: 7 },
        (_, i) =>
          ({
            name: `Przedmiot ${i}`,
            techer: `Wykładowca ${i}`,
            passForm: `Forma zaliczenia ${i}`,
            subjectType: `Rodzaj przedmiotu ${i}`,
            date: new Date(),
            grade: Math.floor(Math.random() * (5 - 2 + 1) + 2),
          } as SemesterSubject)
      ),
    },
    {
      semester: 5,
      subjects: Array.from(
        { length: 8 },
        (_, i) =>
          ({
            name: `Przedmiot ${i}`,
            techer: `Wykładowca ${i}`,
            passForm: `Forma zaliczenia ${i}`,
            subjectType: `Rodzaj przedmiotu ${i}`,
            date: new Date(),
            grade: Math.floor(Math.random() * (5 - 2 + 1) + 2),
          } as SemesterSubject)
      ),
    },
    {
      semester: 6,
      subjects: Array.from(
        { length: 6 },
        (_, i) =>
          ({
            name: `Przedmiot ${i}`,
            techer: `Wykładowca ${i}`,
            passForm: `Forma zaliczenia ${i}`,
            subjectType: `Rodzaj przedmiotu ${i}`,
            date: new Date(),
            grade: Math.floor(Math.random() * (5 - 2 + 1) + 2),
          } as SemesterSubject)
      ),
    },
    {
      semester: 7,
      subjects: Array.from(
        { length: 5 },
        (_, i) =>
          ({
            name: `Przedmiot ${i}`,
            techer: `Wykładowca ${i}`,
            passForm: `Forma zaliczenia ${i}`,
            subjectType: `Rodzaj przedmiotu ${i}`,
            date: new Date(),
            grade: Math.floor(Math.random() * (5 - 2 + 1) + 2),
          } as SemesterSubject)
      ),
    },
  ],
};
