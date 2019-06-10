const logData = () => { };

//前端错误日志监控
window.onerror = function (errorMessage, scriptURI, lineNo, columnNo, error) {
  console.log('errorMessage: ' + errorMessage); // 异常信息
  console.log('scriptURI: ' + scriptURI); // 异常文件路径
  console.log('lineNo: ' + lineNo); // 异常行号
  console.log('columnNo: ' + columnNo); // 异常列号
  console.log('error: ' + error); // 异常堆栈信息
  let errorInfo = {
    errorMessage,
    scriptURI,
    lineNo,
    columnNo,
    error,
    time: new Date(),
  };
  if (localStorage.getItem('errorLog')) {   //检查本地是否有错误日志
    let errorLog = JSON.parse(localStorage.getItem('errorLog'));
    errorLog.push(errorInfo);
  } else {
    localStorage.setItem('errorLog', JSON.stringify([errorInfo]));
  }
};

window.addEventListener(  //在页面注销时候检查是否有错误日志，如果有上传
  'unload',
  () => {
    if (localStorage.getItem('errorLog')) { //
      localStorage.removeItem('errorLog')
      //ajax 上传
    }
  },
  false
);
