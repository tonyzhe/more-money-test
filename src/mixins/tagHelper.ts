import {Component, Vue} from 'vue-property-decorator';


@Component
export default class tagHelper extends Vue {
  createTag(): void {
    const name = window.prompt('请输入标签名');
    if (name) {
      this.$store.commit('createTag', name);
    }

  }
}
