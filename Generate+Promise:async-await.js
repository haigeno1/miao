function get(value) {
  console.log('开始请求',value)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value,'请求结束')
      resolve(value)
    }, 1000 + Math.random() * 3000)
  })
}

function *g(){
  var a3 = yield get(3)
  var a5 = yield get(5)
  var a7 = yield get(7)
  console.log(a3+a5+a7)
}

function run(g){
  var iter = g()
  var generated

  // generated = iter.next()
    // generated.value.then(val=>{
    //   generated = iter.next(val)
    //   generated.value.then(val=>{
    //     generated = iter.next(val)
    //     generated.value.then(val=>{
    //       generated = iter.next(val)
    //     })    
    //   })
    // })
    // 
    // ????
    // generated = iter.next()
    // generated.value
    // .then(val=> generated = iter.next(val))
    // .then(generated.value)
    // .then(val=> generated = iter.next(val))

  function start(value){
    generated = iter.next(value)
    if (!generated.done){
      generated.value.then(start)
    } else {
      //resolve(generated.value)
    }
  }
  start()
}

run(g)







