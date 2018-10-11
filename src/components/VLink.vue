<template>
  <li @mouseenter.prevent="hsetn">
    <a
      class="aitem"
      v-if="href"
      :href="href"
      :class="{ active: isActive }"
      @click.prevent="go"
    >
      <i class="icon" :class="icon"></i>
      <span class="name">{{name}}</span>
    </a>
    <p class="aitem tk cup" :class="tkCss" v-else @click.prevent="kseth">
      <i class="icon" :class="icon"></i>
      <span class="name">{{name}}</span>
      <i class="meun icon-chevron-down"></i>
    </p>
    <slot></slot>
  </li>
</template>

<script>
  import routes from '../routes'
  
  export default {
    props: {
      name: {
        type:String,
        required: true 
      },
      href: {
        type:String
      },
      index:{
        type:String
      },
      mexts:{
        type:Array
      },
      showNextNum:{
        type:String
      },
      firstShowNextNum:{
        type:String
      },
      icon:{
        type:String
      }
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      },
      tkCss () {
        var isActive = false;

        if(this.showNextNum != this.index){
          ctActive(this.$children)
        }

        return {
          cdown: this.showNextNum == this.index,
          active: isActive
        }

        function ctActive(childs){
          for (var i = 0; i < childs.length; i++) {
            if(childs[i].$children) ctActive(childs[i].$children);

            if(childs[i].isActive){
              isActive = true;
              break;
            }
          }
        }
      }
    },
    created () {
      if(this.firstShowNextNum == this.index){
        setTimeout(() => {
          this.$emit('setn',this.index)
        }, 400)
      }
    },
    methods: {
      go (event) {
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        )
        this.kseth();
      },
      kseth () {
        if(this.$el.classList.contains('ali') && this.$root.isBf) return;
        this.$emit('setn',this.index);
      },
      hsetn () {
        if(!this.$el.classList.contains('ali') || !this.$root.isBf) return;
        this.$emit('setn',this.index);
      }
    }
  }
</script>

<style scoped>
  .tk {
    cursor: pointer;
  }
  .tk > i.meun{
    float: right;
    line-height: 38px;
    margin-right: 8px;
    transition: .4s;
  }
  .cup > i.meun{
    transform: rotate(-90deg);
  }
  li.ali > .cdown{
    border-top:1px solid #dca;
  }
  .cdown > i.meun{
    transform: rotate(0deg);
  }

  .bf li.ali > .tk > i.meun,
  .bf li.ali > .aitem > .name{
    display: none;
  }

  i.icon{
    margin-right:4px;
    vertical-align: middle;
  }

  .aitem{
    display: block;
    line-height: 38px;
    font-size:14px;
    text-decoration: none;
    padding-left:10px;
    border-left:4px solid transparent;
    margin-left:-3px;
    color:#666;
  }
  .aitem:hover,.bf li.ali:hover > .aitem{
    background-color: #faf9f7;
    border-left-color:#57ea26;
  }
  .active {
    color: cornflowerblue;
    background-color: #f3f3f3;
    border-left-color:#2dc3e8;
  }
  li.ali > ul > li:first-child > .aitem,li.ali > ul > li:first-child > .aitem:hover{
    box-shadow: inset 0 4px 4px -2px rgba(0,0,0,.15);
  }
  li.ali > ul > li:last-child > .aitem,li.ali > ul > li:last-child > .aitem:hover{
    box-shadow: inset 0 -4px 4px -2px rgba(0,0,0,.15);
  }

  li.ali > ul > li > .aitem{
    position: relative;
    padding-left:28px;
    font-size:0.8em;
  }
  li.ali > ul > li > .aitem:before{
    content: '';
    display: block;
    width:3px;
    height:3px;
    position: absolute;
    left:14px;
    top:50%;
    margin-top:-2px;
    border:1px solid #ddd;
    background-color: #fff;
    z-index: 1;
  }
  li.ali > ul > li > .aitem.active:before{
    background-color:#ddd;
  }
  li.ali > ul > li > ul{
    background-color:#f8f7f3;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    box-sizing: content-box;
    position: relative;
    z-index: 1;
  }
  li.ali > ul > li > ul > li{}
  li.ali > ul > li > ul > li .aitem{
    padding-left:40px;
  }
</style>
