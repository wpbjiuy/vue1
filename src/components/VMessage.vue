<template>
	<div v-if="type == 'msg'" class="msg" @click="remove"><slot></slot></div>
</template>

<script type="text/javascript">
	export default {
		props:{
			type:{
				type:String,
				default:'msg'
			},
			isShow:{
				type:Boolean,
				default:true
			},
			oMsg:Object,
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
				this.$emit('load', this.$el);
			})

			setTimeout(() => {this.$emit('remove')}, 6000);
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
		top: 45px;
		right: 10px;
		transition:top 0.6s;
		transform: rotateX(0deg);
		z-index: 99;
		animation: showmsg 0.6s;
		border-radius: 2px;
		word-break: break-all;
	}

	@keyframes showmsg{
		0%{
			transform: rotateX(90deg);
		}
		100%{
			transform: rotateX(0deg);
		}
	}
</style>