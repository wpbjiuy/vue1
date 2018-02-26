<template>
	<main-layout>
		<div class="row">
			<blockquote>
				这是一个第三方vue插件，github: <a href="https://github.com/davidroyer/vue2-editor">https://github.com/davidroyer/vue2-editor</a>
			</blockquote>
			<h3>安装：</h3>
			<p>npm install --save vue2-editor</p>
			<p>Add This Vue.
				<pre>
				import {VueEditor} from 'vue2-editor'
				components: {
					VueEditor
				}
				&lt;vue-editor v-model="htmlEditor"&gt; &lt;/vue-editor&gt; </pre>
			</p>
		</div>
		<div class="row">
			<vue-editor v-model="htmlEditor"></vue-editor>
		</div>
		<div class="row">
			<h3>图片上传到后台</h3>
			<vue-editor v-model="htmlEditor" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
		</div>
	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue'
	import {VueEditor} from 'vue2-editor'
	import axios from 'axios'

	console.log(axios)

	export default {
		components: {
			MainLayout,
			VueEditor
		},
		data(){
			return {
				htmlEditor:''
			}
		},
		methods: {
	      	handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
		        // An example of using FormData
		        // NOTE: Your key could be different such as:
		        // formData.append('file', file)

		        var formData = new FormData();
		        formData.append('image', file)

		        axios({
		          url: '/',
		          method: 'POST',
		          data: formData
		        })
		        .then((result) => {
		          let url = result.data.url // Get url from response
		          Editor.insertEmbed(cursorLocation, 'image', url);
		          resetUploader();
		        })
		        .catch((err) => {
		          console.log(err);
		        })
		    }
		}
	}
</script>

<style scoped>
	.row{
		padding: 20px;
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

	/*reset editor css*/
	.ql-snow .ql-tooltip{
		margin-left:50%;
	}
</style>