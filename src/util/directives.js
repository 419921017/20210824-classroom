export default {
  has: {
    inserted(el, bindings, vnode) {
      let value = bindings.value;
      let permission = vnode.context.$store.state.user.btnPermission;
      if (!permission.includes(value)) {
        el.parent.removeChild(el);
      }
    },
  },
};
