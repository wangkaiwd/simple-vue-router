import { getHash } from '@/my-router/util';

export default {
  props: {
    to: {
      type: String,
    },
    tag: {
      type: String,
      default: () => 'a'
    }
  },
  methods: {
    onClick () {
      this.$router.push(this.to);
    }
  },
  render () {
    // How to add current active class ?
    return (
      <this.tag
        onClick={this.onClick}
        href="javascript:;"
        class={{ 'router-link-active': this.$route.path === this.to }}
      >
        {this.$slots.default}
      </this.tag>
    );
  }
};
