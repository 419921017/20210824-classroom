import LoadingComponent from '@/components/LoadingComponent';

const loadable = (asyncFn) => {
  let component = () => ({
    component: asyncFn(),
    loading: LoadingComponent,
  });
  return {
    render(h) {
      return h(component);
    },
  };
};

export default loadable;
