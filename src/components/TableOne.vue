<template>
	<table>
		<thead>
			<tr>
				<th v-for="h in cThs">{{h.name}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="data in datas">
				<td v-for="(h, $i) in cThs" v-if="$i != cThs.length-1">{{data[h.key]}}</td>
				<td v-if="controlers && controlers.length">
					<v-button class="btn-default" v-for="c in controlers" v-on:cClick="_self[c.methodName]?_self[c.methodName](data):hit(c.methodName)">{{c.name}}</v-button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import VButton from './VButton.vue'

	export default {
		components:{
			VButton
		},
		props: {
			ths: {
				type:Array,
				default:[
					{name:'Name', key:'name'},
					{name:"Discription", key:'dis'}
				]
			},
			datas: {
				type:Array,
				default:[
					{name:'name1',dis:'discription1...'},
					{name:'name2',dis:'discription2...'}
				]
			},
			controlers: Array
		},
		methods:{
			update(data){
				console.log('update',data)
			},
			delete(data){
				console.log('delete',data)
			},
			hit(name){
				console.log(name+' is not method.');
			}
		},
		computed:{
			cThs(){
				this.controlers ? this.ths.push({name:'操作',key:'f'}) : '';
				return this.ths;
			}
		}
	}
</script>

<style scoped>
	table{
		border:none;
		border-collapse: collapse;
		border-spacing: 0;
		width:98%;
		margin:0 auto;
		color:#666;
		text-align: left;
		line-height: 32px;
		font-size:14px;
	}
	thead{
		border-bottom:1px solid #555;
	}
	tbody{}
	tr{
		border-bottom:1px solid #ddd;
	}
	tbody tr:nth-child(2n+1){
		background-color:#eee;
	}
	th{
		color: #e8722d;
	}
	td{}
</style>