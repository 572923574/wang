<template>
    <view class="w-page">
        <view class="w-list-table">
            <view class="w-list-header">{{ '实时监测' }}</view>
            <view class="w-list-content">
                <view class="w-list-item" @tap="handleTap(item.value)" v-for="(item, i ) in pageList" :key="item.value">{{ item.label
                }}</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            pageList: [{ label: '系统图形', value: '/pages/substationsList/substationsList' }, { label: '实时数据', value: 2 }]
        }
    }, methods: {
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