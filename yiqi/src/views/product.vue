<template>
  <div>
    <img class="banner" src="@/assets/images/product.jpg">
    <special-title title="产品介绍" style="margin-top: 68px; margin-bottom: 83px" />
    <div id="main" class="main">
      <div class="intro_box">
        <div class="intro_number">
          <img src="@/assets/images/num1.png">
        </div>
        <div class="intro_title">
          项目来源
        </div>
        <div class="intro_text">
          互联网的发展，生机勃勃，这是属于“互联网+”的时代，互联网行业讲得最多的是风口、机会，“内容经济+用户场景+服务体验”或将成为下一个风口。伊伊同行APP，其特色功能就是瞄准“内容经济+用户场景+服务体验”，用互联网来连接内容、场景、服务。
        </div>
      </div>
      <div class="intro_box">
        <div class="intro_number">
          <img src="@/assets/images/num2.png">
        </div>
        <div class="intro_title">
          产品的用处
        </div>
        <div class="intro_text">
          随着业余时间的越来越多，自由职业者网赚职业兴起，解决自由职业者需要系统化平台问题；解决社交软件众多，但线下约见难问题，帮助内心孤寂缺少交际的人实现社交；解决商旅途中到异地的不习惯以及行程安排等问题。
        </div>
      </div>
      <div class="intro_box">
        <div class="intro_number">
          <img src="@/assets/images/num3.png">
        </div>
        <div class="intro_title">
          产品形式
        </div>
        <div class="intro_text">
          （1）自有团队自发自研，有核心技术支持的手机APP软件端；（2）电脑终端管理系统，全国情况一目了然；（3）设立全国5大区域运营中心，四种合伙模式，实现推广管理制度化。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import specialTitle from '@/components/index-components/special_title'
 export default {
     components: {
         specialTitle,
     },
     data() {
         return {

         }
     }
 }
</script>

<style scoped="true" lang="less">
.banner{
  width: 100%;
}
.main{
    width: 1196px;
    margin: 0 auto;
    text-align: center;
    .intro_box{
      text-align: center;
      .intro_number{
        width: 201px;
        height: 189px;
        margin: 0 auto;
      }
      .intro_title{
        width: 254px;
        height: 74px;
        margin: 28px auto 57px auto;
        line-height: 74px;
        font-family: PingFang-SC-Bold;
        font-size: 38px;
        letter-spacing: 0px;
        color: #ffffff;
        background-color: #f24849;
        border-radius: 10px;
        border: solid 1px #f24849;
        box-shadow:0px 5px 1px #9c1c1c;
      }
      .intro_text{
        margin: 0 auto 118px auto;
        text-align: justify;
        text-align-last: center;
        font-family: PingFang-SC-Medium;
        font-size: 28px;
        line-height: 50px;
        letter-spacing: 0px;
        color: #333333;
      }
    }
}
@media screen and (min-width: 0px) and (max-width: 1215px) {
    .main{
      width: 90%;
    }
}
</style>
