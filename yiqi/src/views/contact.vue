<template>
  <div>
    <img class="banner" src="@/assets/images/contact.jpg">
    <div class="bg_box">
      <special-title title="联系我们" style="padding-top: 68px; padding-bottom: 83px" />
      <div class="main">
        <div class="link">
          <div class="link_left">
            <div class="link_content">
            	<img class="link_logo" src="@/assets/images/bottom_phone.png"></img>
            	<div class="link_body">
            		<div class="link_text">0753-2395668  (9:00-18:00)</div>
            	</div>
            </div>
            <div class="link_content">
            	<img class="link_logo" src="@/assets/images/bottom_mail.png"></img>
            	<div class="link_body">
            		<div class="link_text">yiqi18125531523@163.com</div>
            	</div>
            </div>
            <div class="link_content">
            	<img class="link_logo" src="@/assets/images/bottom_location.png"></img>
            	<div class="link_body">
            		<div class="link_text" style="margin-top: 0;">广东省梅州市梅江区梅州联通大厦6楼整层</div>
            	</div>
            </div>
          </div>
          <div class="link_right">
            <div class="link_content">
            	<img class="link_logo" src="@/assets/images/bottom_yiyi.png"></img>
            	<div class="link_body">
            		<div class="link_text">伊伊同行 - 人人共商、万人互联</div>
            	</div>
            </div>
            <div class="link_content">
            	<img class="link_logo" src="@/assets/images/bottom_url.png"></img>
            	<div class="link_body">
            		<div class="link_text">Copyright (C)gd-yiqi.com, All Rights Reserved.</div>
            	</div>
            </div>
            <div class="link_content">
            	<img class="link_logo" src="@/assets/images/bottom_jubao.png"></img>
            	<div class="link_body">
            		<div class="link_text">违法不良信息举报电话：0753-2395668</div>
            	</div>
            </div>
          </div>
        </div>
        <div class="code_box">
          <img class="code" src="@/assets/images/contact_code.png"></img>
          <div class="word">
            <span>扫一扫</span>
            <span>关注伊伊同行公众号</span>
          </div>
        </div>
        <div class="code_bottom_text">那些你不想做的事，来伊伊同行都能帮你完成！超多用户资源供你挑选</div>
      </div>
      <img class="bg" src="@/assets/images/contact_bg.jpg">
    </div>
  </div>
</template>

<script>
 import specialTitle from '@/components/index-components/special_title'
 export default {
     components: {
         specialTitle
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
.bg_box{
  width: 100%;
  height: 936px;
  margin-top: -8px;
  margin-bottom: -60px;
  position: relative;
  .main{
    width: 1197px;
    height: 626px;
    margin: 0 auto;
    .link{
      width: 100%;
      height: 229px;
      margin-top: -10px;
      color: #666666;
      .link_left{
        width: 40%;
        height: 229px;
        float: left;
        .link_content{
        	margin-bottom: 28px;
        	.link_logo{
        		float: left;
        		width: 55px;
        		height: 55px;
        		margin-right: 13px;
        	}
          .link_body{
            width: 350px;
            line-height: 30px;
            margin-top: 15px;
          	height: auto;
          	justify-content: space-between;
          	align-items: flex-start;
          	overflow: hidden;
          	.link_text{
          		font-family: PingFang-SC-Medium;
          		font-size: 25px;
              margin-top: 12px;
          		text-align: justify;
          	}
          }
        }
      }
      .link_right{
        width: 53%;
        height: 229px;
        float: right;
        padding-top: 16px;
        padding-left: 80px;
        .link_content{
        	margin-bottom: 28px;
          text-align: right;
        	.link_logo{
        		float: left;
        		width: 55px;
        		height: 55px;
        		margin-right: 13px;
        	}
          .link_body{
            width: 560px;
            line-height: 30px;
          	height: auto;
          	justify-content: space-between;
          	align-items: flex-start;
          	overflow: hidden;
          	.link_text{
          		font-family: PingFang-SC-Medium;
          		font-size: 25px;
              margin-top: 12px;
          		text-align: justify;
          	}
          }
         }
      }
    }
    .code_box{
          margin: 89px auto 28px auto;
          width: 179px;
          height: 229px;
          .code{
            width: 175px;
            height: 175px;
          }
          .word{
            color: #545454;
            font-family: PingFang-SC-Regular;
            font-size: 17px;
            text-align: center;
            span{
              display: block;
            }
          }
    }
    .code_bottom_text{
        width: 492px;
        margin: 0 auto;
        text-align: center;
        font-family: PingFang-SC-Medium;
      	font-size: 24px;
      	line-height: 36px;
      	letter-spacing: 0px;
      	color: #fd5d5d;
    }
  }

  .bg{
    width: 100%;
    height: 936px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
  }
}


</style>
