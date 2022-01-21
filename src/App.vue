<template>
    <div id="app">
        <imooc-header></imooc-header>
        <router-view></router-view>
        <imooc-footer></imooc-footer>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'app',
    components: {
        'imooc-header': Header,
        'imooc-footer': Footer
    }
}
</script>
<style lang="scss">
* {
    padding: 0;
    margin: 0;
}
li {
    list-style: none;
}
img {
    vertical-align: top;
}
.clearfix:after {
    display: block;
    content: "";
    clear: both;
}
</style>
