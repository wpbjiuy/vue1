<template>
	<main-layout class="wm">
		<v-button class="btn-default" @cClick="addmsg">Add msg</v-button>
		<v-message v-for="(msg, $i) in msgs" v-if="msg.isShow" @remove="remove($el, msg, $i)" @load="setMsgTop" :style="{bottom:msg.bottom+'px'}"><p>{{msg.txt}}</p></v-message>
	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue'
	import VMessage from '../components/VMessage.vue'
	import VButton from '../components/VButton.vue'

	export default {
		components:{
			MainLayout,
			VMessage,
			VButton
		},
		data(){
			return {
				msgs:[],
				mn:1
			}
		},
		methods:{
			remove(e, msg, i){
				msg.isShow = false;
				this.setMsgTop(null, i);
				this.msgs.splice(i,1);
			},
			addmsg(){
				this.msgs.push({
					type:'msg',
					txt:'add msg fdsafdsafds'+this.mn++,
					bottom:10,
					isShow:true
				});
			},
			setMsgTop(ele, idx){ console.log({0:ele})
				var ah = ele ? ele.clientHeight : this.msgs[idx].height;
				console.log(ah)
				idx = idx === undefined ? this.msgs.length-2 : idx

				for (var i = idx; i >= 0 ; i--) { 
					if(ele)
						this.msgs[i].bottom += ah+10
					else
						this.msgs[i].bottom -= ah+10
				}
				if(ele){
					this.msgs[this.msgs.length-1].ele = ele;
					this.msgs[this.msgs.length-1].height = ele.clientHeight;
				}
			}
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	.wm{
		padding:20px;
	}
</style>