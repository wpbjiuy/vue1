<template>
	<main-layout>
		<h1>Table One</h1>
		<table-one :ths="ths" :datas="tData" :controlers="controlers"></table-one>
	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue';
	import TableOne from '../components/TableOne.vue';

	export default {
		components: {
			MainLayout,
			TableOne
		},
		data:function(){
			return {
				ths:[
					{name:'Name', key:'name'},
					{name:"Discription", key:'dis'}
				],
				tData:[
					{name:'name1',dis:'discription1...'},
					{name:'name2',dis:'discription2...'}
				],
				controlers:[
					{name:'更新',methodName:'update'},
					{name:'删除',methodName:'delete'}
				]
			}
		}
	}
</script>