<template>
  <footer>
  	<div id="main" class="main">
      <div class="footer_content">
        <div class="code_box">
          <img class="code" src="@/assets/images/code.png"></img>
          <div class="word">
            <span>扫一扫</span>
            <span>关注伊伊同行公众号</span>
          </div>
        </div>
        <div id="footer_link" class="footer_link">
          <div id="link_left" class="footer_link_left">
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
          <div id="link_right" class="footer_link_right">
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
            		<div class="link_text last">违法不良信息举报电话：0753-2395668</div>
            	</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_copy footer_copy_top">广东伊起网络科技有限公司 提供服务支持</div>
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
                .last{
                  margin-top: 0;
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
      .footer_copy_top{
        padding-top: 39px;
      }
    }
	}
  @media screen and (min-width: 0px) and (max-width: 300px) {
    footer{
      height: 900px;
    }
    #main{
      width: 100%;
      height: 750px;
      margin: 0 auto;
      font-size: 15px;
      text-align: center;
      .code_box{
        float: none;
        margin: 0 auto;
      }
      .footer_copy_top{
          margin-top: 430px;
      }
      .footer_copy{
        font-size: 15px;
      }
    }
    #footer_link{
      width: 100%;
    }
    #link_left{
      width: 100%;
      height: 229px;
      margin: 0 auto;
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
       margin: -20px auto 30px auto;
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
    footer{
      height: 900px;
    }
    #main{
      width: 80%;
      height: 750px;
      margin: 0 auto;
      font-size: 15px;
      text-align: center;
      .code_box{
        float: none;
        margin: 0 auto;
      }
      .footer_copy_top{
          margin-top: 430px;
      }
      .footer_copy{
        font-size: 15px;
      }
    }
    #footer_link{
      width: 100%;
    }
    #link_left{
      width: 100%;
      height: 229px;
      margin: 0 auto;
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
       margin: -20px auto 30px auto;
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
  @media screen and (min-width: 650px) and (max-width: 920px) {
      footer{
        height: 900px;
      }
      #main{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        font-size: 18px;
        .code_box{
          float: none;
          margin: 0 auto;
        }
        .footer_copy_top{
            margin-top: 450px;
            font-size: 18px;
        }
      }
      #footer_link{
        width: 100%;
      }
      #link_left{
        width: 80%;
        height: 229px;
        margin: 15px auto 0 auto;
        .link_logo{
          width: 45px;
          height: 45px;
        }
        .link_text{
          font-size: 18px;
        }
        .last{
          margin-top: 8px;
        }
      }
      #link_right{
         width: 100%;
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
           font-size: 18px;
           width: 300px;
         }
         .last{
           margin-top: 0;
         }
      }
  }
  @media screen and (min-width: 920px) and (max-width: 1200px) {
      footer{
        height: 1420px;
      }
      #main{
        width: 100%;
        .code_box{
          float: none;
          margin: 0 auto;
        }
        .footer_link{
          width: 100%;
          float: none;
          margin: 0 auto;
          margin-top: 30px;
        }
        .link_logo{
          width: 55px;
          height: 55px;
        }
        .link_text{
          font-size: 18px;
          margin-top: 12px;
        }
        .footer_copy_top{
            padding-top: 0;
            font-size: 18px;
        }
      }
      #link_left .last{
        margin-top: 0;
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
