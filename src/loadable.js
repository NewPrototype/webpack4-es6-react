import Loadable from 'react-loadable';
export const Loading = props => {
  if (props.error) {
    return '加载错误';
  } else if (props.timedOut) {
    return '加载超时';
  } else if (props.pastDelay) {
    return '正在加载中...';
  } else {
    return null;
  }
};

export const importPath = ({loader}) => {
  return Loadable ({
    loader,
    loading: Loading,
    delay: 200,  
    timeout: 10000,
  });
};
