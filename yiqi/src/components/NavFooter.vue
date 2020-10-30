<template>
  <footer>
  	<div class="main">
      <div class="footer_content">
        <div class="code_box">
          <img class="code" src="@/assets/images/code.png"></img>
          <div class="word">
            <span>扫一扫</span>
            <span>关注伊伊同行公众号</span>
          </div>
        </div>
        <div class="footer_link">
          <div class="footer_link_left">
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
          <div class="footer_link_right">
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
      </div>
      <div class="footer_copy" style="padding-top: 39px;">广东伊起网络科技有限公司 提供服务支持</div>
  		<div class="footer_copy">Copyright © 2018-2020  粤ICP备19045836号</div>
  	</div>
  </footer>
</template>

<script>
</script>

<style scoped="true" lang="less">
	footer{
		width: 100%;
		height: 437px;
		margin-top: 52px;
		padding-top: 1px;
		background-color: #f24849;
		color: #fff;
		text-align: left;
    .main{
      width: 1196px;
      margin: 0 auto;
      .footer_content{
        margin-top: 75px;
        margin-bottom: 40px;
        .code_box{
          width: 179px;
          height: 229px;
          float: left;
          .code{
            width: 175px;
            height: 175px;
          }
          .word{
            font-family: PingFang-SC-Regular;
            font-size: 17px;
            text-align: center;
            span{
              display: block;
            }
          }
        }
        .footer_link{
          width: 1010px;
          height: 229px;
          float: left;
          margin-top: -10px;
          .footer_link_left{
            width: 40%;
            height: 229px;
            float: left;
            margin-left: 26px;
            .link_content{
            	margin-bottom: 25px;
            	.link_logo{
            		float: left;
            		width: 46px;
            		height: 46px;
            		margin-right: 11px;
            	}
              .link_body{
                width: 290px;
                line-height: 30px;
                margin-top: 15px;
              	height: auto;
              	justify-content: space-between;
              	align-items: flex-start;
              	overflow: hidden;
              	.link_text{
              		font-family: PingFang-SC-Medium;
              		font-size: 21px;
                  margin-top: 8px;
              		text-align: justify;
              	}
              }
            }
          }
          .footer_link_right{
            width: 56%;
            height: 229px;
            float: right;
            padding-top: 16px;
            padding-left: 10px;
            .link_content{
            	margin-bottom: 25px;
              text-align: right;
            	.link_logo{
            		float: left;
            		width: 46px;
            		height: 46px;
            		margin-right: 11px;
            	}
              .link_body{
                width: 480px;
                line-height: 30px;
              	height: auto;
              	justify-content: space-between;
              	align-items: flex-start;
              	overflow: hidden;
              	.link_text{
              		font-family: PingFang-SC-Medium;
              		font-size: 21px;
                  margin-top: 8px;
              		text-align: justify;
              	}
              }
             }
          }
        }
      }
      .footer_copy{
        clear: both;
        margin-top: 12px;
        text-align: center;
        font-family: PingFang-SC-Medium;
        font-size: 18px;
      }
    }
	}
</style>
