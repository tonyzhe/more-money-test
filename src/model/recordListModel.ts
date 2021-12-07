import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  
  fetch(): RecordItem[] {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(record: RecordItem): void {
    const record2 = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
  },
  save(): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }

};
export default recordListModel;