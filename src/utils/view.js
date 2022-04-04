export function backTop() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop
  if (currentScroll > 0) {
    // window.requestAnimationFrame(smoothscroll);
    window.scrollTo(0, 0)
  }
}

export function windowScroll(func) {
  window.onscroll = function () {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    //变量windowHeight是可视区的高度
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight
    //变量scrollHeight是滚动条的总高度
    var scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight
    //滚动条到底部的条件
    if (scrollTop + windowHeight + 60 > scrollHeight) {
      //写后台加载数据的函数
      func()
    }
  }
}

