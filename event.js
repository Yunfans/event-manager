var EventManager = (function () {
  var event = {};
  var observer = {};
  /**
   * 订阅事件
   * @param eventName 瞬间名称
   * @param listener 订阅者
   * @returns {boolean}
   */
  event.subscribe = function (eventName, listener) {
    observer[eventName] = observer[eventName] || [];

    observer[eventName].push(listener);
    return true;
  };

  /**
   * 发布时间
   * @param eventName 事件名称
   * @param params 参数
   */
  event.publish = function (eventName, params) {
    params = params || {};
    var handlers = observer[eventName] || [];
    var length = handlers.length;
    var stop = false;
    for (var i = length - 1; i >= 0; i--) {
      if (!stop) {
        var listener = handlers[i];

        if (listener && listener[eventName]) {
          listener[eventName](params);
        }
      }
    }

    return true;
  };

  /**
   * 删除某事件上的监听者
   * @param eventName 事件名称
   * @param listener 监听者
   */
  event.removeListener = function (eventName, listener) {
    var handlers = observer[eventName];
    var length = handlers.length;
    for (var i = length - 1; i >= 0; i--) {
      if (handlers[i] === listener) {
        handlers.splice(i, 1);
        break;
      }
    }
  };

  /**
   * 删除事件
   * @param eventName 事件名称
   */
  event.removeEvent = function (eventName) {
    observer[eventName] = [];
  };

  return event;
})();
exports = module.exports = EventManager

if (global == 'window') {
  window.EventManager = EventManager;
}


