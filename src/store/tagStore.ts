import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';


const tagStore = {
  tagList: [] as Tag[],
  fetchTags(): Tag[] {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.tagList;
  },
  findTag(id: string): Tag {
    return this.tagList.filter(item => item.id === id)[0];
  },
  createTag(name: string): 'duplicated' | 'success' {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('标签名重复了');
      return 'duplicated';
    }
    const id = createId().toString();
    this.tagList.push({id, name: name});
    this.saveTags();
    window.alert('添加成功');
    return 'success';


  },
  updateTag(id: string, name: string): 'duplicated' | 'success' | 'not found' {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const nameList = this.tagList.map(item => item.name);
      if (nameList.indexOf(name) >= 0) {
        window.alert('标签名重复了');
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        this.saveTags();
        window.alert('修改成功');
        return 'success';
      }

    } else {
      return 'not found';
    }
  },
  removeTag(id: string): boolean {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    return true;
  },
  saveTags(): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  }

};
tagStore.fetchTags();

export default tagStore;