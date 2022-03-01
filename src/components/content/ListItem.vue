<template>
    <div class="list-item-component">
        <ul class="list-content">
            <li class="list-item flex a-items-center" v-for="(item, index) in items" :key="index">
                <router-link class="user-avatar" :to="{name: 'user-home', params: {uid: item.uid._id}}">
                    <img :src="item.uid.pic" alt="">
                </router-link>
                <div class="item-info">
                    <div class="info-top">
                        <span class="badge">{{ item.catalog }}</span>
                        <router-link class="title" :to="{ name: 'detail', params: { tid: item._id } }">{{ item.title }}</router-link>
                    </div>
                    <div class="info-bottom flex">
                        <router-link :to="{name: 'user-home', params: {uid: item.uid._id}}"><span>{{ item.uid.name }}</span></router-link>
                        <span class="">{{ item.created }}</span>
                        <span v-if="item.fav">粉丝：{{ item.fav }}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="t-center more-content" v-if="isShow">
            <span v-if="!isEnd" class="inline-block" @click="more">更多数据</span>
            <p v-else class="no-result">没有更多了</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        lists: {
            type: Array,
            default: () => []
        },
        isEnd: {
            type: Boolean,
            default: false
        },
        isShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {

        }
    },
    computed: {
        items() {
            this.lists.map((item) => {
                switch (item.catalog) {
                case 'ask':
                    item.catalog = '提问'
                    break
                case 'share':
                    item.catalog = '分享'
                    break
                case 'logs':
                    item.catalog = '动态'
                    break
                case 'notice':
                    item.catalog = '公告'
                    break
                case 'advise':
                    item.catalog = '建议'
                    break
                case 'discuss':
                    item.catalog = '交流'
                    break
                }
            })
            return this.lists
        }
    },
    methods: {
        // 更多数据
        more() {
            this.$emit('nextPage')
        }
    }
}
</script>
<style lang="scss" scoped>
.list-item-component {
    overflow: hidden;
    .list-item {
        position: relative;
        height: 45px;
        line-height: 22px;
        padding: 15px 15px 15px 16px;
        border-bottom: 1px dotted #e2e2e2;
        .user-avatar {
            margin-right: 16px;
            img {
                width: 45px;
                height: 45px;
                border-radius: 2px;
            }
        }
        .item-info {
            .info-top {
                line-height: 36px;
                .badge {
                    height: 16px;
                    line-height: 16px;
                    padding: 0 5px;
                    margin-right: 10px;
                    font-size: 12px;
                    border: 1px solid #5fb878;
                    background: none;
                    color: #5fb878;
                }
                .title {
                    color: #333;
                    font-size: 14px;
                    &:hover {
                        color: #009688;
                    }
                }
            }
            .info-bottom {
                color: #999;
                font-size: 13px;
                a {
                    color: #999;
                    &:hover {
                        color: #5fb878;
                    }
                }
                span {
                    margin-right: 20px;
                }
            }
        }
    }
    .more-content {
        margin: 20px 0;
        span {
            color: #333;
            padding: 0 20px;
            line-height: 36px;
            border: 1px solid #009e94;
            font-size: 14px;
            cursor: pointer;
            &:hover {
                color: #009e94;
            }
        }
        .no-result {
            color: #999;
            font-size: 16px;
        }
    }
}
</style>
