<template>
	<div class="header">
		<a href="/" class="logo"><img src="/img/logo.png"></a>
		<a href="javascript:void(0);" class="nvamenu" @click="switchoverStyle"><i class="icon-menu"></i></a>
		<div class="right">
			<a href="javascript:void(0);" class="clo"><i class="icon-gear"></i></a>
			<a href="javascript:void(0);" class="clo"><i class="icon-log-out"></i></a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				txt:'123'
			}
		},
		methods:{
			switchoverStyle () {
				this.$el.nextSibling.classList.toggle('bf')
				this.$root.isBf = this.$el.nextSibling.classList.contains('bf')
			}
		}
	}
</script>

<style scoped>
	.logo{
		display: inline-block;
		height:100%;
		margin-left:5px;
	}
	.logo img{
		display: block;
		height:32px;
		margin-top:6.5px;
	}

	.header .nvamenu{
		display: inline-block;
		height:100%;
		width:40px;
		text-align: center;
		font-size:20px;
		color:#fff;
		vertical-align: top;
		text-decoration: none;
		margin-left: 18px;
	}
	.header .nvamenu:hover{
		box-shadow: 0 0 20px rgba(0,0,0,.2);
	}
	.header .right{
		height:100%;
		float:right;
		text-align: right;
		margin-right: 10px;
	}
	.header .right .clo{
		display: inline-block;
		margin-left:15px;
		height:100%;
		line-height: 45px;
		font-size:20px;
		color:#fff;
		text-decoration: none;
	}
</style>