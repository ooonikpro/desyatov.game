// eslint-disable-next-line @typescript-eslint/ban-types,no-unused-vars
const pipe = <F extends (...args: any) => any>(...fns: F[]) => {
  return () => {
    fns.forEach((fn) => fn());
  };
};

export default pipe;
