import { takeEvery, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

let callTakeEvery = function*(action, method) {
  return yield takeEvery(action, function*(...arg) {
    try {
      return yield method(...arg);
    } catch (e) {
      // message.warning(e && e.message, 3)
      console.log('callTakeEvery error: ', e && e.message);
    }
  });
};

let callTakeLatest = function*(action, method) {
  return yield takeLatest(action, function*(...arg) {
    try {
      return yield method(...arg);
    } catch (e) {
      // message.warning(e && e.message, 3)
      console.log('callTakeLatest error: ', e && e.message);
    }
  });
};

/**
 * 时间格式化函数
 *
 * @param {string} time 时间戳，为空则取当前时间
 * @param {string} format format格式，为空则返回扩展过的date对象
 * @returns format格式时间或者扩展过的date对象
 */
let dateFormat = function(time, format) {
  let date;
  if (time) {
    //兼容ios 把yyyy-MM-dd hh:mm 改为 yyyy/MM/dd hh:mm
    if (typeof time == 'string') {
      time = time.replace(/\s+/g, ' '); //转换中文空格
      time = time.replace(/-/g, '/');
    }
    if (typeof time == 'string' && time.indexOf('24:') >= 0) {
      time = time.replace('24:', '23:');
      var _temp_date = new Date(time);
      date = new Date(_temp_date.getTime() + 60 * 60 * 1000);
    } else {
      date = new Date(time);
    }
  } else {
    date = new Date();
  }
  let _time = date.getTime(),
    _year = date.getFullYear(),
    _month = date.getMonth() + 1,
    _date = date.getDate(),
    _hour = date.getHours(),
    _minute = date.getMinutes(),
    _second = date.getSeconds();
  if (format) {
    //大小写转换
    format = format.replace(/Y/g, 'y');
    format = format.replace(/D/g, 'd');
    format = format.replace(/H/g, 'h');
    format = format.replace(/S/g, 's');
    //yyyy-MM-dd hh:mm:ss 2006-07-02 08:09:04
    format = format.replace('yyyy', _year);
    format = format.replace('MM', _month < 10 ? '0' + _month : _month);
    format = format.replace('dd', _date < 10 ? '0' + _date : _date);
    format = format.replace('hh', _hour < 10 ? '0' + _hour : _hour);
    format = format.replace('mm', _minute < 10 ? '0' + _minute : _minute);
    format = format.replace('ss', _second < 10 ? '0' + _second : _second);

    //yyyy-M-d h:m:s hh:mm:ss 2006-7-2 8:9:4.18
    format = format.replace('M', _month);
    format = format.replace('d', _date);
    format = format.replace('h', _hour);
    format = format.replace('m', _minute);
    format = format.replace('s', _second);

    // alert('dateFormat:'+format);
    return format;
  } else {
    let _dateTime = new Date(_year + '/' + _month + '/' + _date + ' 00:00');
    let obj = {
      year: _year,
      month: _month,
      day: _date,
      hour: _hour,
      minute: _minute,
      second: _second,

      time: _time, // 毫秒数
      dateTime: _dateTime.getTime(),
      date: date,
    };
    // if(!window.showDate){
    // alert('dateFormat:'+JSON.stringify(obj))
    // window.showDate = true;
    // }

    return obj;
  }
};
// 时长格式化
let timeFormat = function(time, time2) {
  let _time = 0;
  if (time2) {
    _time = (dateFormat(time2).time - dateFormat(time).time) / 60 / 1000;
  } else {
    _time = time;
  }
  let hour = parseInt(_time / 60),
    minute = parseInt(_time % 60),
    second = parseInt((_time - hour * 60 - minute) * 60);
  return (
    (hour > 0 ? hour + '小时' : '') +
    (minute > 0 ? minute + '分钟' : '') +
    (second > 0 ? second + '秒' : '')
  );
};
/**
 * 获取浏览器的params
 *
 * @param {string} key
 * @returns string
 */
let getUrlParam = function(key, _url) {
  let url = _url ? _url : location.href;
  // debugger
  if (url.lastIndexOf('?') < 0) {
    return '';
  }
  let arr = url.substring(url.lastIndexOf('?') + 1).split('&');

  for (let i = 0; i < arr.length; i++) {
    let _cks = arr[i].split('=');
    if (_cks[0] == key) {
      return _cks[1];
    }
  }
  return '';
};
/**
 * 从cookie获取获取用户信息
 *
 * @returns userInfo
 */
let getUserInfo = function() {
  let cookies = document.cookie.split(';');
  let userInfo = {
    isAdmin: false,
  };
  for (let i = 0; i < cookies.length; i++) {
    let _cks = cookies[i].split('=');
    if (_cks[0].trim() == 'yzuid') {
      userInfo.id = decodeURIComponent(decodeURIComponent(_cks[1].trim()));
    }
    if (_cks[0].trim() == 'yzuname') {
      userInfo.name = decodeURIComponent(_cks[1].trim());
    }
    if (_cks[0].trim() == 'yzuavatar') {
      userInfo.avatar = decodeURIComponent(_cks[1].trim());
    }
    if (_cks[0].trim() == 'yzadminflag') {
      userInfo.isAdmin = _cks[1].trim() == '1' ? true : false;
    }
    // 企业初始化状态
    if (_cks[0].trim() == 'corpActiveStatus') {
      userInfo.corpActiveStatus = _cks[1].trim() == '1' ? true : false;
    }
    // 企业名称
    if (_cks[0].trim() == 'yzcname') {
      userInfo.corpName = _cks[1].trim() == '1' ? true : false;
    }
  }

  let spaceId = window.sessionStorage.getItem('spaceId');
  if (spaceId) {
    userInfo.spaceId = spaceId;
  }
  if (localStorage.getItem('corpId')) {
    userInfo.corpId = localStorage.getItem('corpId');
  }
  return userInfo;
};
/**
 * cookie取值
 *
 * @param {any} key
 * @returns
 */
let getValueFromCookieByKey = function(key) {
  let cookies = document.cookie.split(';');
  let obj = cookies
    .map(ck => {
      let _cks = ck.split('=');
      return {
        key: typeof _cks[0] == 'string' && _cks[0].trim(),
        value: typeof _cks[1] == 'string' && _cks[1].trim(),
      };
    })
    .filter(item => {
      return item.key === key;
    })[0];
  return obj && obj.value ? obj.value : null;
};
/**
 * 链接地址切换成https
 * @param {any} url
 * @returns
 */
let urlFormat = function(url) {
  if (url.indexOf('http://') > -1) {
    return url.replace('http://', 'https://');
  }
  return url;
};
/**
 * 返回设备类型
 * @returns android/iphone/pc
 */
let getDevice = function() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //判断iPhone|iPad|iPod|iOS
    return 'iphone';
  } else if (/(Android)/i.test(navigator.userAgent)) {
    //判断Android
    return 'android';
  } else {
    //pc
    return 'pc';
  }
};
/**
 * 打点函数
 * @param {any} params
 */
let clickPoint = function(point) {
  var user = getUserInfo();
  if (!user.id) {
    return;
  }
  var $img = $(
      '<img style="position:absolute;bottom:0;left:-100px;width:0;height:0;" />'
    ),
    keyMap = {
      app_type: 'url_tj', // 必须是这个才能统计出来
      log_type: 'click',
      taobaoNick: user.id,
      point: point,
      type: 'dingding_tj',
      userId: user.id,
      userName: user.name,
      corpId: user.corpId,
      corpName: user.corpName,
      role: user.isAdmin ? 'admin' : '',
      rad: Math.random(),
    };
  var queryStr = $.param($.extend({}, keyMap));
  $img.attr('src', '//ftj.superboss.cc/tj.jpg?' + queryStr);
  $img.on('load', function() {
    $img.remove();
  });
  $('body').append($img);
};
/**
 * 将对象数组转为 key的obj
 * example: let arr = [{"dataId":'a',b:1},{"dataId":'b',b:1}]
 * getObjByKey(arr, 'dataId')
 * return {'a':{"dataId":'a',b:1},'b':{"dataId":'b',b:1}}
 * @param {any} params
 */
let getObjByKey = function(arrObj, key) {
  if (!arrObj) return {};
  let res = {};
  arrObj.map(item => {
    item[key] ? (res[item[key]] = item) : null;
  });
  return res;
};
// 拷贝对象
let getValue = function(value) {
  return JSON.parse(JSON.stringify(value));
};
// 权限相关
let showThis = function(array, value) {
  if (array.indexOf(value) >= 0) {
    return true;
  } else {
    return false;
  }
};
let datedifference = function(sDate1, sDate2) {
  //sDate1和sDate2是2006-12-18格式
  var dateSpan, tempDate, iDays;
  sDate1 = dateFormat(sDate1, 'yyyy-MM-dd');
  sDate2 = dateFormat(sDate2, 'yyyy-MM-dd');
  sDate1 = Date.parse(sDate1);
  sDate2 = Date.parse(sDate2);
  dateSpan = sDate2 - sDate1;
  dateSpan = Math.abs(dateSpan);
  iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
  return iDays;
};
let fileSizeFormat = function(fileSize) {
  //sDate1和sDate2是2006-12-18格式
  if (!fileSize) return null;
  return parseInt(fileSize / 1024) + 'kb';
};

// 获取订购的版本信息
let getVersion = function() {
  let crm_item_code = getValueFromCookieByKey('crm_item_code');
  let crm_item_charge_status = getValueFromCookieByKey(
    'crm_item_charge_status'
  );
  let crm_item_detail = getValueFromCookieByKey('crm_item_detail');
  let crm_item_name = getValueFromCookieByKey('crm_item_name');
  let crm_item_service_stop_time = getValueFromCookieByKey(
    'crm_item_service_stop_time'
  );
  let current = getValueFromCookieByKey('current')
    ? parseFloat(getValueFromCookieByKey('current'))
    : new Date().getTime();

  let crm_item = {
    code: crm_item_code || '',
    charge_status: crm_item_charge_status || '',
    detail: crm_item_detail
      ? JSON.parse(decodeURIComponent(crm_item_detail))
      : {},
    name: crm_item_name ? decodeURIComponent(crm_item_name) : '',
    max_people: getValueFromCookieByKey('crm_item_max_people'),
    min_people: getValueFromCookieByKey('crm_item_min_people'),
  };
  if (crm_item_service_stop_time) {
    crm_item.stop_time = parseFloat(crm_item_service_stop_time);
    crm_item.stop_time_str = dateFormat(crm_item.stop_time, 'yyyy-MM-dd');

    if (crm_item.stop_time > current) {
      crm_item.leftDays = datedifference(crm_item.stop_time, current);
      crm_item.timeOut = false;
    } else {
      crm_item.leftDays = 0;
      crm_item.timeOut = true;
    }
  }
  return crm_item;
};
/**
 * 日期格式 大小写转换，可以被moment识别
 * @param {*} dateFormat
 * yyyy-MM-dd -> YYYY-MM-DD
 */
let dateFormatTransform = function(dateFormat) {
  dateFormat = dateFormat.replace(/y/g, 'Y');
  dateFormat = dateFormat.replace(/d/g, 'D');
  dateFormat = dateFormat.replace(/H/g, 'h');
  return dateFormat;
};

/**
 * 检查对象是否为空
 * @param {*} obj
 */
const isEmptyObj = obj => {
  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      return false;
    }
  }
  return true;
};
/**
 * 回车换行处理
 * @param {} value
 */
const enter = value => {
  let content = [];
  if (!value) return content;
  if (value.indexOf('\n') > -1) {
    //内容有回车处理
    content = value.split('\n');
  } else {
    content = [value];
  }
  return content;
};
/**
 *
 * @param {排序} property  属性
 *  type true 是降序 false 升序
 */
const compare = (property, type) => {
  return (a, b) => {
    var value1 = a[property];
    var value2 = b[property];
    if (!type) {
      return value1 - value2;
    } else {
      return value2 - value1;
    }

  }
}
/**
 * 获取所选月份的
 * @param type s为开始日期
 * @param selectMonth  "2018-5"
 * @param months
 * @returns {string}
 */
let getMonth= (type, selectMonth, months = 0)=> {
  var d = new Date(selectMonth);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  if (Math.abs(months) > 12) {
    months = months % 12;
  };
  if (months != 0) {
    if (month + months > 12) {
      year++;
      month = (month + months) % 12;
    } else if (month + months < 1) {
      year--;
      month = 12 + month + months;
    } else {
      month = month + months;
    };
  };
  month = month < 10 ? "0" + month: month;
  var date = d.getDate();
  var firstday = year + "-" + month + "-" + "01";
  var lastday = "";
  if (month == "01" || month == "03" || month == "05" || month == "07" || month == "08" || month == "10" || month == "12") {
    lastday = year + "-" + month + "-" + 31;
  } else if (month == "02") {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
      lastday = year + "-" + month + "-" + 29;
    } else {
      lastday = year + "-" + month + "-" + 28;
    };
  } else {
    lastday = year + "-" + month + "-" + 30;
  };
  var day = "";
  if (type == "s") {
    day = firstday;
  } else {
    day = lastday;
  };
  return day;
};
const format_MULTILEVEL_SELECT = (datas, dataParentId) => {
  let arr = [];
  datas.map(data => {
    if (data.dataParentId != dataParentId) return;
    let obj = {
      value: data.dataValue,
      label: data.dataName,
      dataId: data.dataId,
      dataParentId: data.dataParentId,
      dataLevel: data.dataLevel
    };
    obj.children = format_MULTILEVEL_SELECT(datas, data.dataId);
    arr.push(obj);
  });
  return arr;
};
/**
 * 格式化金额
 * @param s
 * @param n
 * @returns {string}
 */
let fmoney=(s, n = 2)=> {
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
}
let util = {
	callTakeEvery,
	callTakeLatest,
	dateFormat,
	timeFormat,
	getUrlParam,
	getUserInfo,
	getValueFromCookieByKey,
	urlFormat,
	getDevice,
	clickPoint,
	getObjByKey,
	getValue,
	showThis,
	datedifference,
	fileSizeFormat,
	getVersion,
	dateFormatTransform,
  getMonth,
  isEmptyObj,
  enter,
  compare,
  format_MULTILEVEL_SELECT,
  fmoney
}
module.exports = util;
