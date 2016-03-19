# event-manager
###事件的监听处理工具

##使用方法
    <script src="/path/to/event.js"></script>

首先创建一个对象

```
    var XiaoMing = {
      name: 'XiaoMing',
      age: 22
    };
```

然后进行事件的订阅，当事件发生的时候可以通知到所有订阅它的对象

```
	event.subscribe('Say', XiaoMing);
```

设置当事件发生的时候，对象如何处理

```
	XiaoMing.Say = function (msg) {
	  console.log(this.name + ' say \"' + msg + '\"');
	};
```

事件发生

```
event.publish('Say', 'I\'m hungry!!!'); // XiaoMing say I'm hungry!!!
```
