// callbackName({
//   "users": ["zhangsan","lishi","wangwu","zhaoliu"]
// })

function jsonp(url,okCallback,errorCallback,timeoutCallback){
  var callbackName = "JSON__P" + Math.random().toString().substr(2)
  window[callbackName] = function(data){
    clear()
    try{
      okCallback(data)
    } catch(e){
      console.warn(e)
    }
  }

  if (url.includes("?")){
    url = url + "&callback=" + callbackName
  } else {
    url = url + "?callback=" + callbackName
  }
  var tag = document.createElement("script")
  tag.src = url
  document.body.appendChild(tag)

  //这里的tag.onerror捕获的是前两种类型的错误?
  //错误可以是请求没有发出去/发出去但是响应不正常/正常响应但是执行代码的时候出错
  tag.onerror(function(e){
    clear()
    errorCallback(e)
  })

  var isTimeoutInvoked = false
  var timeoutId = setTimeout(function(){
    isTimeoutInvoked = true
    delete window[callbackName]
    timeoutCallback()
  },5000)

  function clear(){
    delete window[callbackName]
    clearTimeout (timeoutId)
    if (isTimeoutInvoked){
      return
    }
  }
}