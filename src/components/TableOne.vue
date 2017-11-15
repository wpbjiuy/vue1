<template>
	<table>
		<thead>
			<tr>
				<th v-for="h in cThs">{{h.name}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="data in datas">
				<td v-for="h in cThs">{{data[h.key]}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>

	export default {
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
				console.log(data)
			},
			delete(data){
				console.log(data)
			}
		},
		computed:{
			cThs(){ console.log(this.ths)
				return this.controlers ? this.ths.push({name:'操作'}) : this.ths;
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