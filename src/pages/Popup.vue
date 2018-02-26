<template>
	<main-layout>
		<div class="row">
			<span class="btn-default" @click="addmsg">Message</span>
			<span class="btn-default" @click="alert">Alert</span>
			<span class="btn-default" @click="confirm">Confirm</span>
		</div>
		<v-popup v-if="isShow" @hide="hide" :title="title" :txt="txt" :width="pWidth" :type="pType"></v-popup>
		<v-message v-for="(msg, $i) in msgs" v-if="msg.isShow" @remove="remove(msg, $i)" :oMsg="msg" @load="setMsgTop" :style="{top:msg.top+'px'}"><p>{{msg.txt}}</p></v-message>
	</main-layout>
	
</template>

<script>
	import MainLayout from '../layouts/Main.vue'
	import VPopup from '../components/VPopup.vue'
	import VMessage from '../components/VMessage.vue'

	export default {
		components: {
			MainLayout,
			VPopup,
			VMessage
		},
		methods: {
			alert(){
				this.isShow = true
				this.pType = 'alert'
				this.title = 'alert'
				this.txt = '<p>alert content</p>'
			},
			confirm(){
				this.isShow = true
				this.pType = 'confirm'
				this.title = 'confirm'
				this.txt = 'confirm content'
			},
			hide(type){ console.log(type)
				this.isShow = false;
			},
			remove(msg, i){ 
				msg.ele.remove();
				msg.isShow = false;
				this.setMsgTop(null, i);

			},
			addmsg(){
				this.msgs.push({
					type:'msg',
					txt:'add msg fdsafdsafds'+this.mn++,
					top:45,
					isShow:true
				});
			},
			setMsgTop(ele, idx){ 
				var ah = ele ? ele.clientHeight : this.msgs[idx].height;
				
				idx = idx === undefined ? this.msgs.length-2 : idx - 1

				for (var i = idx; i >= 0 ; i--) { 
					if(ele)
						this.msgs[i].top += ah+10
					else
						this.msgs[i].top -= ah+10
				}
				if(ele){
					this.msgs[this.msgs.length-1].ele = ele;
					this.msgs[this.msgs.length-1].height = ele.clientHeight;
				}
			}
		},
		data(){
			return {
				isShow:false,
				pType:'alert',
				title:'alert',
				txt:'',
				pWidth:'400px',
				msgs:[],
				mn:1
			}
		}
	}
</script>

<style scoped>
	.row{
		padding:20px;
	}
</style>