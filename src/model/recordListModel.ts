const localStorageKeyName = 'recordList';
const recordListModel = {
  fetch(): RecordItem[] {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
  },
  save(data: RecordItem[]): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }

};
export default recordListModel;