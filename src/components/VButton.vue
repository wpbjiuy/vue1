<template>
	<span @click="pClick"><slot></slot></span>
</template>

<script>
	export default {
		props:{
			txt:String
		},
		methods:{
			pClick(){
				this.$emit('cClick')
			}
		}
	}
</script>

<style scoped>
	[class^="btn-"],[class*=" btn-"]{
		padding:5px 10px;
		font-size:12px;
		color:#fff;
		cursor: pointer;
		border:1px solid #ddd;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
		
		text-shadow: 1px 1px 1px #fff;
		-webkit-text-shadow: 1px 1px 1px #fff;
		-moz-text-shadow: 1px 1px 1px #fff;
		-ms-text-shadow: 1px 1px 1px #fff;
		-o-text-shadow: 1px 1px 1px #fff;
	}
	[class^="btn-"]:hover,[class*=" btn-"]:hover{
		box-shadow: 0 0 10px #fff inset;
	}
	[class^="btn-"]:active,[class*=" btn-"]:active{
		box-shadow: 1px 1px 4px #999 inset;
	}
	.btn-default{
		background-color:#eee;
		color:#444;
	}

	.btn-default:hover{}
	.btn-default:active{}

	.btn-ok{
		background-color:#ead;
	}

	.btn-delete{
		background-color:#faa;
	}
</style>