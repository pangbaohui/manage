<template>
    <!--<div class="layout-wrapper">-->
      <!--<Layout class="layout-outer">-->
        <!--<Header :style="{width: '100%'}">-->
          <!--<Menu mode="horizontal" theme="dark" active-name="1">-->
            <!--<div class="layout-logo"></div>-->
          <!--</Menu>-->
        <!--</Header>-->
        <!--<Layout class="layout-content" :style="{padding: '10px 10vw'}">-->
          <!--<Sider width="240"  class="side" collapsible hide-trigger reverse-arrow v-model="collapsed">-->
            <!--<side-menu :collapsed="collapsed" :list = "menuList" >-->

            <!--</side-menu>-->
          <!--</Sider>-->
          <!--<Content class="content">Content</Content>-->
        <!--</Layout>-->
      <!--</Layout>-->
    <!--</div>-->

  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Header>
        <Menu  :style="{width:'80vw',margin:'0 auto'}" mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <div style="margin:0 auto">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </MenuItem>
              <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                Item 4
              </MenuItem>
            </div>
          </div>
          <div class="layout-login">
            <Dropdown>
              <a href="javascript:void(0)">
                pbh
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>个人设置</DropdownItem>
                <DropdownItem divided>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '2vh 10vw 0 10vw'}">
        <Content :style="{ minHeight: '85vh'}">
          <Layout>
            <Sider  :style="{background: '#fff'}">
              <Menu theme="light" width="auto" :open-names="['1','2']">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                     管理人员
                  </template>
                  <MenuItem name="peopleManagePage" :to="{ name: 'peopleManagePage'}">人员管理</MenuItem>
                  <MenuItem name="customerServicePage" :to = "{name : 'customerServicePage'}">客服管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    商品管理
                  </template>
                  <MenuItem active-name name="addGoodsPage" :to="{name: 'addGoodsPage'}">商品列表</MenuItem>
                  <MenuItem name="login" :to="{name: 'login'}">登陆</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content class="content">
              <router-view/>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Layout from "iview/src/components/layout/layout";
import Sider from "iview/src/components/layout/sider";
import Content from "iview/src/components/layout/content";
import SideMenu from '../../../components/side-menu/side-menu'
export default {
  components: {
    Content,
    Sider,
    Layout,
    SideMenu
  },
  name: 'index',
  data(){
    return{
      collapsed:false,
      menuList:[
        {
          title:'第一个',
          name:'menu1',
          icon:'ios-pricetags-outline'
        },   {
          title:'第2个',
          name:'menu2',
          icon:'ios-pricetags-outline'
        },   {
          title:'第3个',
          name:'menu3',
          icon:'ios-pricetags-outline',
          children:[
            {
              title:'第3-1个',
              name:'menu3-1',
              icon:'ios-pricetags-outline'
            },  {
              title:'第3-2个',
              name:'menu3-2',
              icon:'ios-pricetags-outline'
            },  {
              title:'第3-3个',
              name:'menu3-3',
              icon:'ios-pricetags-outline'
            },
          ]
        },
      ]
    }
  }

}
</script>

<style lang="stylus" scoped>
  .layout-wrapper .layout-outer
    min-height 100vh
  .side
    background-color #fff

  .content
    background-color #fff

  .layout-logo
    width 100px
    height 30px
    background #5b6270
    border-radius 3px
    float left
    position relative
    top 15px

  .layout-nav
    width 420px
    margin 0 auto
    margin-left  30%
    height 64px

  .ivu-layout-sider
    height 88vh

  .layout-login
    width 100px
    height 60px
    border-radius 3px
    float right
    margin-top -65px

  .ivu-dropdown-rel a
    color white
</style>
