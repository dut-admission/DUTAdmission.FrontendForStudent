export class DeleteObject {
  Id: number;
  ObjectType: number;

  constructor(id: number, type: number) {
    this.Id = id;
    this.ObjectType = type;
  }
}
