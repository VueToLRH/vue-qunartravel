<template>
  <div id="app">
    <!-- 当每次路由进行变化的时候，数据将会请求一次，降低了性能，可以使用keep-alive进行优化 -->
    <!-- keep-alive 路由被加载一次之后，就将路由中的内容放在内存中，当重新进入路由的时候，不需要重新渲染组件，直接从内存中拿出数据进行显示 -->
    <!-- 问题：当城市改变的时候，首页数据应该跟随着城市改变，发生请求，但是数据没有跟随着该改变 -->
    <!-- 解决方法：可以使用 keep-alive 多出的一个生命周期函数 —— activated（keep-alive组件激活时调用。）
                  通过 activated 的生命周期函数，判断页面显示的城市是否与上次页面显示的城市是否是相同的，不相同则进行请求。
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
