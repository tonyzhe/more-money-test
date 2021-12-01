const localStorageKeyName = 'recordList';
const model = {
  fetch(): RecordItem {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
  },
  save(data: RecordItem[]): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }

};
export {model};