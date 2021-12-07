const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [],
  clone(value: RecordItem) {
    return JSON.parse(JSON.stringify(value));
  },
  fetch(): RecordItem[] {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save(): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }

};
export default recordListModel;