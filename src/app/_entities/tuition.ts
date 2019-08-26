export class TuitionType {
  id: number;
  name: string;
  money: number;
  description: string;
}

export class Tuition {
  tuitionTypes: TuitionType[];
  tuitionFee: number;
  totalOfFee: number;
}
