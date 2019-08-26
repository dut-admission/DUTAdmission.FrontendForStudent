export class Document {
  Id: number;
  DocumentTypeId: number;
  DocumentTypeName: string;
  Url: string;
  StatusId: number;
  StatusName: string;
  IsRequired: boolean;
  ResponseMessage: string;
  Description: string;
  FileName: string;
}

export class DocumentForUpload {
  DocumentId: number;
  File: string;
  FileName: string;

  constructor() {
    this.File = '';
    this.FileName = '';
    this.DocumentId = 0;
  }
}
