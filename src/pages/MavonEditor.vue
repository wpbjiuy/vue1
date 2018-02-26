<template>
	<main-layout>
		<div class="row">
			<blockquote>
				这是一个第三方vue插件，github: <a href="https://github.com/hinesboy/mavonEditor">https://github.com/hinesboy/mavonEditor</a>
			</blockquote>
			<h3>安装：</h3>
			<p>npm install mavon-editor --save</p>
			<p>main.js: 
				<pre>
				import mavonEditor from 'mavon-editor'
				Vue.use(mavonEditor)</pre>
			</p>
			<p>index.html: 
				<pre>
				&lt;link rel="stylesheet" type="text/css" href="/node_modules/mavon-editor/dist/css/index.css"&gt;</pre>
			</p>
		</div>
		<div class="row">
			<mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" :value="value"></mavon-editor>
		</div>
	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue'
	export default {
		components:{
			MainLayout
		},
		methods: {
	        $imgAdd(pos, $file){ 
	           	var formdata = new FormData();
	           	formdata.append('image', $file);
	           	
	           	// $.ajax({
	            //    	url: '/',
	            //    	method: 'post',
	            //    	data: formdata,
	            //    	headers: { 'Content-Type': 'multipart/form-data' },
	           	// }).then((url) => {
	            //    	//$vm.$img2Url(pos, url);
	           	// })
        	},
        	$imgDel(){}
    	},
    	data(){
    		return {
    			value:'我是默认值'
    		}
    	}
	}
</script>

<style scoped>
	.row{
		padding:20px;
	}
	blockquote{
		padding:10px;
		background-color:#eff5f7;
	}

	h3{
		font-size:17px;
		border-bottom:1px solid #ddd;
		padding:5px 0;
	}
	p{
		margin-bottom:10px;
		color:#666;
		font-size:14px;
	}
	p pre{
		background-color:#f5fafb;
		padding: 5px;
	}
</style>