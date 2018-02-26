<template>
	<div class="popup">
		<div class="body" :style="'width:'+width">
			<div class="header">{{title}}</div>
			<div class="main" v-html="txt"></div>
			<div class="footer">
				<span class="btn-default" @click="hide('cancel')" v-if="type == 'confirm'">取消</span>
				<span class="btn-ok" @click="hide('ok')">确认</span>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		props:{
			type:{
				type:String,
				default:'alert'
			},
			title:{
				type:String,
				default:'请确认'
			},
			txt:{
				type:String,
				default:''
			},
			width:{
				type:String,
				default:'280px'
			}
		},
		methods:{
			hide(type){
				this.$emit('hide', type);
			}
		},
		mounted:function(e){}
	}
</script>

<style lang="scss" scoped="">
	.popup{
		position: fixed;
		width:100%;
		height:100%;
		top:0;
		left:0;
		z-index: 99;
		background-color: rgba(0, 0, 0, 0.35);

		.body{
			text-align: left;
			width: 280px;
			max-height: 80%;
			margin: 10% auto;
			border-radius: 5px;
			overflow:hidden;

			.header{
				padding:5px 15px;
				height:auto;
				line-height:32px;
				color:#fff;
			}

			.main, .footer{
				border-left: 1px solid #ddd;
				border-right: 1px solid #ddd;
				background-color: #fff;
			}

			.main{
				padding:10px 15px;
			}

			.footer{
				text-align: center;
				padding: 10px 0;
				border-radius: 0 0 5px 5px;

				[class*="btn-"]{
					margin:0 10px;
					padding:5px 20px;
					font-size:15px;
				}
			}
		}
	}
</style>