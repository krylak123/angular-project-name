export interface Grades {
  semester: number;
  subjects: SemesterSubject[];
}

export interface SemesterSubject {
  name: string;
  techer: string;
  passForm: string;
  subjectType: string;
  grade: number;
  date: Date;
}
