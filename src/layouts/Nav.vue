<template>
	<div class="box-left">
		<div class="as">
			<div class="vme">wpbjiuy</div>
			<ul class="nav" @mouseleave="rgNum">
				<v-link class="ali" v-for="(item, $i) of links" :href="item.href" :name="item.name" :index="$i+''" :key="$i+''" :icon="item.icon" :showNextNum="showNextNum" :firstShowNextNum="firstShowNextNum" @setn="setNextNum">

				<transition v-on:enter="show"	v-on:leave="hide"	name="fade">

					<ul v-if="item.next" v-show="showNextNum == $i" >

						<v-link v-for="(item, $j) of item.next" :href="item.href" :name="item.name" :index="$i+'-'+$j" 
						:key="$i+'-'+$j" :showNextNum="showNextAsNum" :firstShowNextNum="firstShowNextAsNum" @setn="setNextAsNum">

							<transition v-on:enter="show"	v-on:leave="hide"	name="fade">

								<ul class="nextas" v-if="item.next" v-show="showNextAsNum == $i+'-'+$j">

									<v-link v-for="item of item.next" :href="item.href" :name="item.name"></v-link>
								</ul>
							</transition>
						</v-link>
					</ul>
				</transition>
				</v-link>
			</ul>
		</div>
	</div>
</template>
<script>
	import VLink from '../components/VLink.vue'

	var links = [
    		{
    			href:'/',
    			icon:'icon-home',
    			name:'home'
    		},
            {   
                href:'/icomoon',
                name:'icon 图标',
                icon:'icon-IcoMoon'
            },
    		{
    			name:'表格',
    			icon:'icon-table2',
    			next:[
    				{
    					href:'/table',
    					name:'table'
    				},
    				{
    					icon:'icon-cool2',
    					name:'Aboutzz',
    					next:[
    						{
		    					href:'/aboutxz',
		    					name:'Aboutxz'
		    				},
		    				{
		    					href:'/testxz',
		    					name:'Testxz'
		    				}
    					]
    				},
    				{
    					href:'/test',
    					name:'Test'
    				}
    			]
    		},
    		{
    			name:'布局',
    			icon:'icon-delicious',
    			next:[
    				{
    					href:'/grid',
    					name:'Grid'
    				},
    				{
    					href:'/test2',
    					name:'Test2'
    				}
    			]
    		},
            {
                name:'消息',
                icon:'icon-bubble',
                href:'/message'
            }
    	]

  export default {
    components: {
      VLink
    },
    data:function(){
    	return {
	    	links:links,
	    	showNextNum:'-1',
	    	showNextAsNum:'-1',
	    	firstShowNextNum:'-1',
	    	firstShowNextAsNum:'-1'
	    }
    },
    created () {
    	var _self = this;
  		for (var i = 0; i < links.length; i++) {
  			var nexts = links[i].next;
  			if(!nexts) continue;
  			computeNum(nexts,i, false)
  		}

  		function computeNum (items, n, asn){
  			for (var i = 0; i < items.length; i++) {
  				if(items[i].next){
  					computeNum(items[i].next,n, i)
  					continue;
  				}
  				if(items[i].href == _self.$root.currentRoute){
  					
  					if(asn !== false) _self.firstShowNextAsNum = n+'-'+asn;

  					_self.firstShowNextNum = n+'';
  					break;
  				}
  			}
  		}
    },
    methods:{
    	setNextNum (n) {
    		this.showNextNum = n == this.showNextNum ? '-1' : n
    	},
    	setNextAsNum (n) {
    		this.showNextAsNum = n == this.showNextAsNum ? '-1' : n
    	},
    	rgNum () {
    		if(!this.$root.isBf) return;
    		// this.showNextAsNum = '-1';
    		this.showNextNum = '-1';
    	},
    	show (el) {
    		el.style.height = '0px';
    		el.style.height = el.scrollHeight+'px';
    		if(el.className.indexOf('nextas') >= 0){
    			var elPs = el.parentNode.parentNode;
    			elPs.style.height = 'auto';
    			if(elPs.setHt) clearTimeout(el.setHt);
    			elPs.setHt = setTimeout(() => {
    				elPs.style.height = elPs.scrollHeight+'px';
    			},450)
    		}
    	},
    	hide (el) {
    		el.style.height = '0px';
    		if(el.className.indexOf('nextas') >= 0){
    			var elPs = el.parentNode.parentNode;
    			elPs.style.height = 'auto';
    			if(elPs.setHt) clearTimeout(el.setHt);
    			elPs.setHt = setTimeout(() => {
    				elPs.style.height = elPs.scrollHeight+'px';
    			},450)
    		}
    	}
    }
  }
</script>

<style scoped>
	.vme{
		height:38px;
		line-height: 38px;
		padding-left: 10px;
    color: #e84c2d;
	}
	.bf .vme{
		display: none;
	}
	.nav{
		width:100%;
		padding-bottom:20px;
	}
	.nav li{
		list-style: none;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.ali{
		border-bottom:1px solid #f3f3f3;
		position: relative;
	}
	.ali:first-child{
		border-top:1px solid #f3f3f3;
	}
	.ali ul {
		background-color:#f8f7f3;
		padding:0;
		height:0;
		/*box-shadow: inset 0 4px 4px -2px rgba(0,0,0,.15), inset 0 -4px 4px -2px rgba(0,0,0,.15);*/
		transition: .4s;
		position: relative;
		z-index: 1;
	}

	.bf .ali > ul {
		position: absolute;
		width:200px;
		left:40px;
		top:0;
		z-index: 1;
	}

	.ali > ul:before{
		content: '';
		display: block;
		width:0px;
		height:100%;
		position: absolute;
		top:0;
		left:17px;
		border-left:1px solid #ddd;
		z-index: 1;
	}

	.fade-enter-active, .fade-leave-active {
	  overflow: hidden;
	}
</style>