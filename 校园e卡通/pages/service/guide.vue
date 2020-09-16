<template>
	<view>
		<image class="bgSet" :src="guideList[index]"></image>
		<image v-if="button" class="changeBtn" @click="next" src="../../static/images/service/next.png" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				button:true,
				guideList:[
					"../../static/images/service/guide1.png",
					"../../static/images/service/guide2.png",
					"../../static/images/service/guide3.png",
					"../../static/images/service/guide4.png",
					"../../static/images/service/guide5.png",
					"../../static/images/service/guide6.png",
					"../../static/images/service/guide7.png",
					"../../static/images/service/guide8.png",
					"../../static/images/service/guide9.png",
					"../../static/images/service/guide10.png",
					"../../static/images/service/guide11.png"
				]
			}
		},
		methods: {
			next(){
				this.index++;
				if(this.index>=this.guideList.length-1){
					this.button=false;
				}
			}
		}
	}
</script>

<style>
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
