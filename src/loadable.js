import React, { Component } from 'react';

import Loadable from 'react-loadable';
export const Loading = props => {
        return null
        if (props.error) {
          // window.location.reload();
          // return <LoadingInfo icon={require('./images/empty_list.png')} info='加载失败' operating='点击重新加载' />
        } else if (props.timedOut) {
          // window.location.reload();
          // return <LoadingInfo icon={require('./images/empty_list.png')} info='加载超时' operating='点击重新加载' />;
        } else if (props.pastDelay) {
          // return <LoadingInfo icon={require('./images/Shape@2x.png')} info='正在拼命加载中...' />;
        } else {
          return null;
        }
};
      
export const importPath = ({loader}) => {
        return  Loadable({
          loader,
          loading: Loading,
          delay: 200,
          timeout: 10000,
        })
      }