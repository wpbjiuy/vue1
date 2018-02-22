<template>
	<main-layout style="padding:20px">
		<div class="row" v-for="i in [1, 2, 3, 4, 6]">
			<span :class="'bd col-'+i" v-for="n in 12/i">col-{{i}}</span>
		</div>
		<div class="row">
			<span class="bd col-5">col-5</span>
			<span class="bd col-5">col-5</span>
			<span class="bd col-2">col-2</span>
		</div>
		<div class="row">
			<span class="bd col-7">col-7</span>
			<span class="bd col-5">col-5</span>
		</div>
		<div class="row">
			<span class="bd col-8">col-8</span>
			<span class="bd col-4">col-4</span>
		</div>
		<div class="row">
			<span class="bd col-9">col-9</span>
			<span class="bd col-3">col-3</span>
		</div>
		<div class="row">
			<span class="bd col-10">col-10</span>
			<span class="bd col-2">col-2</span>
		</div>
		<div class="row">
			<span class="bd col-11">col-11</span>
			<span class="bd col-1">col-1</span>
		</div>
	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue'

	export default{
		components:{
			MainLayout
		},
		methods:{}
	}
</script>

<style lang="scss" scoped>
	.row{
		margin-bottom:15px;

		&:last-child{
			margin-bottom:0;
		};
	}
	[class*="col-"]{
		padding:5px;
	}

	.bd{
		border:1px solid #ddd;
		text-align:center;
		+ .bd{
			border-left:none;
		}
	}
</style>