<template>
    <div class="home-container">
        <zzy-panel />
        <router-view></router-view>
    </div>
</template>
<script>
import Panel from '@/components/Panel.vue'

export default {
    name: 'home',
    data() {
        return {}
    },
    components: {
        'zzy-panel': Panel
    },
    methods: {

    },
    created() {}
}
</script>
<style lang="scss" scoped>
</style>
