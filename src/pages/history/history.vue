<template>
    <view class="w-page">
        <view class="w-list-table">
            <view class="w-list-header">{{ '历史数据' }}</view>
            <view class="w-list-content">
                <view class="w-list-item" v-for="(item, i ) in pageList" @tap="handleTap(item.value)" :key="item.value">{{
                    item.label }}</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            pageList: [{ label: '历史曲线', value: '' }, { label: '事件记录', value: '/pages/eventRecord/eventRecord', }]
        }
    },
    methods: {
        handleTap(url) {

            uni.navigateTo({
                url: url
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.w-page {
    padding: 0;
}
</style>