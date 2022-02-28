<template>
    <div class="center-container">
        <div class="title">Hi, Admin，你已经是我们的正式会员！</div>
        <el-row :gutter="15" type="flex" class="user-info">
            <el-col :span="12" class="user-info-left">
                <p class="user-info-label">我的会员信息</p>
                <div class="benefit">
                    <p>积分经验值：<span>600</span></p>
                    <p>您当前为：<span>非VIP</span> </p>
                </div>
            </el-col>
            <el-col :span="12" class="user-info-right">
                <div class="flex j-content-between count-panel-content">
                    <p class="count-panel">
                        <span>签到</span><i class="gap"></i>
                        <span class="acitve">说明</span><i class="gap"></i>
                        <span class="acitve">活跃榜</span>
                    </p>
                    <p class="count-num">已经连续签到<span class="red">1</span>天</p>
                </div>
                <div class="count-action flex a-items-center j-content-center">
                    <div class="btn">今日签到</div>
                    <p class="count-text">可获得<span class="red">5</span>积分</p>
                </div>
            </el-col>
        </el-row>
        <div class="profile-container">
            <p class="profile-label">快捷方式</p>
            <ul class="flex flex-wrap profile-content">
                <li v-for="(item, index) in profiles" :key="'profile' + index" class="profile-item flex-none t-center">
                    <router-link :to="item.link">
                        <div></div>
                        <span>{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'user-center',
    data() {
        return {
            profiles: [
                { name: '修改信息', link: '' },
                { name: '修改头像', link: '' },
                { name: '修改密码', link: '' },
                { name: '账号绑定', link: '' },
                { name: '发表新帖', link: '' },
                { name: '查看分享', link: '' },
                { name: '我的帖子', link: '' },
                { name: '我的收藏', link: '' },
                { name: '其他资料', link: '' },
                { name: '关注公众号', link: '' },
                { name: '文档', link: '' },
                { name: '后台管理', link: '' }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .title {
        background-color: #f8f8f8;
        color: #666;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .user-info {
        .user-info-left, .user-info-right {
            color: #333;
            border-radius: 2px;
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
            transition: all .2s;
            border: 1px solid #e6e6e6;
            margin: 0 10px;
        }
        .user-info-label {
            height: 50px;
            line-height: 50px;
            padding: 0 15px;
            color: #333;
            border-bottom: 1px dotted #e9e9e9;
            font-size: 14px;
        }
        .benefit {
            padding: 18px 15px;
            height: 50px;
            line-height: 26px;
            font-size: 14px;
            color: #666;
            span {
                padding: 0 5px;
                color: #ff5722;
                font-style: normal;
            }
        }
        .count-panel-content {
            position: relative;
            height: 50px;
            line-height: 50px;
            padding: 0 15px;
            border-bottom: 1px dotted #e9e9e9;
            color: #333;
            border-radius: 2px 2px 0 0;
            font-size: 14px;
        }
        .count-panel {
            span {
                cursor: pointer;
            }
            .acitve {
                color: #01aaed;
            }
            .gap {
                display: inline-block;
                height: 10px;
                width: 1px;
                margin: 0 10px;
                vertical-align: middle;
                background-color: #e2e2e2;
            }
        }
        .count-num {
            padding-left: 10px;
            color: #999;
        }

        .count-action {
            margin-top: 24px;
            .btn {
                display: inline-block;
                height: 38px;
                line-height: 38px;
                padding: 0 18px;
                background-color: #009688;
                color: #fff;
                white-space: nowrap;
                text-align: center;
                font-size: 14px;
                border: none;
                border-radius: 2px;
                cursor: pointer;
                margin-right: 16px;
            }
        }
        .red {
            color: #ff5722;
            padding: 0 5px;
        }

    }
    .profile-container {
        border: 1px solid #e6e6e6;
        margin-top: 15px;
        .profile-label {
            height: 50px;
            line-height: 50px;
            padding: 0 15px;
            color: #333;
            border-bottom: 1px dotted #e9e9e9;
            font-size: 14px;
        }
        .profile-content {
            padding-left: 10px;
        }
        .profile-item {
            width: 25%;
            padding: 5px;
            margin-bottom: 10px;
            box-sizing: border-box;
            div {
                background-color: #2f9688;
                width: 100%;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #fff;
                border-radius: 2px;
                font-size: 30px;
                margin-bottom: 6px;
            }
            span {
                color: #333;
            }
        }
    }
</style>
