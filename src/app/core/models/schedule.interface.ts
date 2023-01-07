export interface Schedule {
  id: string;
  data: Date;
  classes: Classes[];
}

export interface Classes {
  name: string;
  type: string;
  teacher: string;
  classTime: string;
}
