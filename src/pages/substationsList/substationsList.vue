<template>
    <view class="w-page">
        <view class="w-list-table">
            <view class="w-list-header">{{ '变电所列表' }}</view>
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
            pageList: [{ label: '1400M中央变电所', value: 1 },
            { label: '1220M中央变电所', value: 2 },
            { label: '1220M一采变电所', value: 3 },
            { label: '1220M二采东翼变电所', value: 4 },
            { label: '1220M三采变电所', value: 5 },
            { label: '干坝塘变电所', value: 6 },
            { label: '1330M二号配电点', value: 7 },
            { label: '1330M一号配电点', value: 8 },
            { label: '1220M轨道暗斜井', value: 9 }]
        }
    }
}
</script>
<style lang="scss" scoped>
.w-page {
    padding: 0;
}
</style>