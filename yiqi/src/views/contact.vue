<template>
  <div>
    <img class="banner" src="@/assets/images/contact.jpg">
    <div class="bg_box">
      <special-title title="联系我们" style="padding-top: 68px; padding-bottom: 83px" />
      <div id="main" class="main">
        <div class="link">
          <div id="link_left" class="link_left">
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
            		<div class="link_text last">广东省梅州市梅江区梅州联通大厦6楼整层</div>
            	</div>
            </div>
          </div>
          <div id="link_right" class="link_right">
            <div class="link_content">
            	<img class="link_logo" src="@/assets/images/bottom_yiyi.png"></img>
            	<div class="link_body">
            		<div class="link_text">伊伊同行 - 人人共商、万人互联</div>
            	</div>
            </div>
            <div class="link_content">
            	<img class="link_logo" src="@/assets/images/bottom_url.png"></img>
            	<div class="link_body">
            		<div class="link_text last">Copyright (C)gd-yiqi.com, All Rights Reserved.</div>
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
 // 引入公共生命周期
 import mixinsIndex from '@/mixins/index'
 export default {
     components: {
         specialTitle
     },
    mixins:[mixinsIndex],
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
            background-color: #fd5d5d;
            border-radius: 50%;
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
            .last{
              margin-top: 0;
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
            background-color: #fd5d5d;
            border-radius: 50%;
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
@media screen and (min-width: 0px) and (max-width: 300px) {
  #main{
    width: 100%;
    height: 750px;
    margin: 0 auto;
    text-align: center;
    .code_box{
          clear: both;
          width: 133px;
          height: 200px;
          .code{
            width: 130px;
            height: 130px;
          }
          .word{
            font-size: 15px;
          }
    }
    .code_bottom_text{
        clear: both;
        width: 250px;
        margin: -30px auto 0 auto;
        font-size: 15px;
    }
  }
  #link_left{
    width: 100%;
    height: 229px;
    margin: -50px auto 0 auto;
    .link_logo{
      width: 30px;
      height: 30px;
    }
    .link_body{
      width: 210px;
    }
    .link_text{
      width: 210px;
      font-size: 15px;
      margin-top: 0;
    }
    .last{
      margin-top: 0;
    }
  }
  #link_right{
     width: 100%;
     height: 229px;
     margin: 0 auto 30px auto;
     .link_body{
       width: 210px;
     }
     .link_logo{
       width: 30px;
       height: 30px;
     }
     .link_text{
       font-size: 15px;
       width: 210px;
       margin-top: 0;
     }
     .last{
       margin-top: 0;
     }
  }
}
@media screen and (min-width: 300px) and (max-width: 650px) {
  #main{
    width: 80%;
    height: 750px;
    margin: 0 auto;
    text-align: center;
    .code_box{
          clear: both;
          width: 133px;
          height: 200px;
          .code{
            width: 130px;
            height: 130px;
          }
          .word{
            font-size: 15px;
          }
    }
    .code_bottom_text{
        clear: both;
        width: 250px;
        margin: -30px auto 0 auto;
        font-size: 15px;
    }
  }
  #link_left{
    width: 100%;
    height: 229px;
    margin: -50px auto 0 auto;
    .link_logo{
      width: 30px;
      height: 30px;
    }
    .link_body{
      width: 200px;
    }
    .link_text{
      width: 200px;
      font-size: 15px;
      margin-top: 0;
    }
    .last{
      margin-top: 0;
    }
  }
  #link_right{
     width: 100%;
     height: 229px;
     margin: 0 auto 30px auto;
     .link_body{
       width: 200px;
     }
     .link_logo{
       width: 30px;
       height: 30px;
     }
     .link_text{
       font-size: 15px;
       width: 200px;
       margin-top: 0;
     }
     .last{
       margin-top: 0;
     }
  }
}
@media screen and (min-width: 650px) and (max-width: 920px) {
    #main{
      width: 100%;
      height: 700px;
      .code_box{
            width: 133px;
            height: 200px;
            .code{
              width: 130px;
              height: 130px;
            }
            .word{
              font-size: 15px;
            }
      }
      .code_bottom_text{
          width: 492px;
          margin-top: 140px;
          font-size: 15px;
      }
    }
    #link_left{
      width: 70%;
      display: block;
      height: 229px;
      margin: 0 auto;
      padding-left: 22%;
      .link_logo{
        width: 45px;
        height: 45px;
      }
      .link_text{
        font-size: 15px;
        margin-top: 8px;
      }
      .last{
        margin-top: 8px;
      }
    }
    #link_right{
       width: 78%;
       display: block;
       height: 229px;
       margin: 0 auto;
       .link_body{
         width: 300px;
       }
       .link_logo{
         width: 45px;
         height: 45px;
       }
       .link_text{
         font-size: 15px;
         width: 300px;
         margin-top: 8px;
       }
       .last{
         margin-top: 0;
       }
    }
}
@media screen and (min-width: 920px) and (max-width: 1200px) {
    #main{
      width: 100%;
      .link{
        width: 100%;
        float: none;
        margin: 0 auto;
      }
      .link_logo{
        width: 55px;
        height: 55px;
      }
      .link_text{
        font-size: 20px;
      }
    }
    #link_left{
      margin-left: 26px;
      .link_body{
        width: 290px;
      }
    }
    #link_right{
      width: 56%;
      float: left;
      padding-left: 0;
      .link_body{
        width: 400px;
      }
    }
}

</style>
