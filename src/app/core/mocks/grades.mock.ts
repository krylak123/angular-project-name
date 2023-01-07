import { ListResponse } from '@appStore/models/list-response.interface';
import { Grades } from '@core/models/grades.interface';

export const mockGrades: ListResponse<Grades> = {
  list: [
    {
      semester: 1,
      subjects: [],
    },
    {
      semester: 2,
      subjects: [],
    },
    {
      semester: 3,
      subjects: [],
    },
    {
      semester: 4,
      subjects: [],
    },
    {
      semester: 5,
      subjects: [],
    },
    {
      semester: 6,
      subjects: [],
    },
    {
      semester: 7,
      subjects: [],
    },
  ],
};
