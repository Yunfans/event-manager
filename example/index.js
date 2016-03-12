var event = require('../event');
var XiaoMing = {
  name: 'XiaoMing',
  age: 22
};
var XiaoLi = {
  name: 'XiaoLi',
  age: 18
};

/**
 * 订阅事件
 */
event.subscribe('Say', XiaoMing);
event.subscribe('Say', XiaoMing);
event.subscribe('Age', XiaoLi);

/**
 * 对订阅的事件的处理
 * @param msg
 * @constructor
 */
XiaoMing.Say = function (msg) {
  console.log(this.name + ' say \"' + msg + '\"');
};
XiaoLi.Age = function () {
  console.log(this.name + ' is ' + this.age + ' years old');
};

/**
 * 发布事件
 */
event.publish('Say', 'I\'m hungry!!!');
event.publish('Age');