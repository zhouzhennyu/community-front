<template>
    <div id="app">
        <imooc-header></imooc-header>
        <div class="container">
            <router-view></router-view>
        </div>
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
@import 'assets/css/global.css';
.container {
    width: 1200px;
    margin: 0 auto;
}
</style>
