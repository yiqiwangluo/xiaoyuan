<template>
	<view @touchstart="start" @touchend="end">
		<image class="bgSet" :src="guideList[index]"></image>
		<image v-if="button" class="changeBtn" @click="next" src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/next.png" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				guideList:[
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide2.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide3.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide4.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide5.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide6.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide7.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide8.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide9.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide10.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide11.png"
				],
				startDataClientY:0
			}
		},
		computed:{
			button:function(){
				if(this.index>=this.guideList.length-1){
					return false;
				}else{
					return true;
				}
			}
		},
		methods: {
			next(){
				this.index++;
			},
			start(e){                            
			    this.startDataClientY=e.changedTouches[0].clientY;
			},
			end(e){
			    const subY=e.changedTouches[0].clientY - this.startDataClientY;
			    if(subY<-50){
					if(this.index<this.guideList.length-1){
						this.index++;
					}
					console.log(this.index)
			    } else if(subY>50){
					if(this.index>0){
						this.index--;
					}
				}
			}
		}
	}
</script>

<style lang="less">

.bgSet{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
}
.changeBtn{
	width: 120rpx;
	height: 120rpx;
	position: fixed;
	left: 50%;
	bottom: 13rpx;
	margin-left: -60rpx;
	z-index: 10001;
}
</style>
