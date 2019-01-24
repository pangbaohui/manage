<template>
     <div class="side-menu-wrapper">
       <slot></slot>
       <Menu width="aotu" style="background-color: #dbdbdb">
         <template v-for="item in list">
           <re-submenu
             v-if="item.children"
             :key="`menu_${item.name}`"
             :name="item.name"
             :parent="item"
           ></re-submenu>
           <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
             <Icon :type="item.icon" />
             {{item.title}}
           </menu-item>
         </template>
       </Menu>
       <div></div>
     </div>
</template>

<script>
    import MenuItem from "iview/src/components/menu/menu-item";
    import ReSubmenu from "./re-submenu"
    export default {
      components: {
        MenuItem,
        ReSubmenu
      },
      name: 'side-menu',
      props:{
          collapsed: {
            type: Boolean,
            default:false
          },
          list:{
            type:Array,
            default: ()=>[]
          }
      }
    }
</script>

<style lang="stylus" scoped>
.side-menu-wrapper
  width 100%
</style>
