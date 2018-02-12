<template>
	<div v-if="type == 'msg'" class="msg" @click="remove"><slot></slot></div>
</template>

<script type="text/javascript">
	export default {
		props:{
			type:{
				type:String,
				default:'msg'
			},		//msg, alert, confirm
			isShow:{
				type:Boolean,
				default:true
			},
			txt:String,
			title:String
		},
		methods:{
			remove(e){
				this.$emit('remove')
			}
		},
		mounted: function(){
			this.$nextTick(function(e){
				setTimeout(() => this.$emit('load', this.$el), 200);
			})
		}
	}
</script>

<style scoped>
	.msg {
		display: block;
		padding:10px 15px;
		background-color: #fff;
		border:1px solid #f1f1f1;
		box-shadow: 0 0 4px #eee;
		min-width: 100px; 
		max-width: 200px;
		font-size: 14px;
		line-height: 22px;
		color: #888;
		position: fixed;
		bottom: 20px;
		right: 10px;
		transition:bottom 0.6s;
		transform: rotateX(0deg);
		z-index: 99;
		animation: showmsg 0.6s;
		border-radius: 2px;
		word-break: break-all;
	}

	@keyframes showmsg{
		0%{
			right:100%;
			transform: rotateX(20deg);
		}
		80%{
			right:10px;
			transform: rotateX(90deg);
		}
		100%{
			right:10px;
			transform: rotateX(0deg);
		}
	}
</style>