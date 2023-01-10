function a() {
  console.log(1);
  Promise.resolve().then(function () {
    console.log(2);
    queueMicrotask(()=>{
      console.log(4);
    })
  });
}
setTimeout(function () {
  console.log(3);
}, 0);

Promise.resolve().then(a);

console.log(5);

/* 
输出代码：

渲染主线程：

微队列：
延时队列：
交互队列：
*/
