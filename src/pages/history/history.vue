<template>
    <view class="w-page">
        <view class="w-list-table">
            <view class="w-list-header">{{ '历史数据' }}</view>
            <view class="w-list-content">
                <view class="w-list-item" v-for="(item, i ) in pageList" :key="item.value">{{ item.label }}</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            pageList: [{ label: '历史曲线', value: 1 }, { label: '事件记录', value: 2 }]
        }
    }
}
</script>
<style lang="scss" scoped>
.w-page{
    padding: 0;
}</style>