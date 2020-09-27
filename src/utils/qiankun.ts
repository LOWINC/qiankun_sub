export const qiankun = {
  isInQiankun: !!(window as any).__POWERED_BY_QIANKUN__,
  publicPath: (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__,
};
