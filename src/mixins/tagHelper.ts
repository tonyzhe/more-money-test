import {Component, Vue} from 'vue-property-decorator';

const map: { [key: string]: string } = {
  'tag name duplicated': '标签名重复'
};
@Component
export default class tagHelper extends Vue {
  createTag(): void {
    const name = window.prompt('请输入标签名');
    if (!name) {
      return window.alert('标签名不能为空');
    }
    this.$store.commit('createTag', name);
    if (this.$store.state.creatTagError) {
      window.alert(map[this.$store.state.creatTagError.message] || '未知错误');


    }


  }
}
