export interface RecordItem {
  tags: Tag[];
  notes: string;
  types: string;
  amount: number;
  createdAt?: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface RootState {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}


