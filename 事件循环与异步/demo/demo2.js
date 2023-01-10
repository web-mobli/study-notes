setTimeout(function () {
  console.log(1);
}, 0);

function delay(duration) {
  let start = Date.now();
  while (Date.now() - start < duration) {}
}
delay(2000);
Promise.resolve().then(function () {
  console.log(3);
});

console.log(2);

/* 
输出代码：

渲染主线程：

微队列：
延时队列：
交互队列：
*/
