<!-- 事件记录 -->
<template>
    <view class="w-page">

        <view class="w-query-header">

            <view class="w-time-select">
                <uni-datetime-picker v-model="datetimerange" :clear-icon="false" hide-second type="datetimerange"
                    rangeSeparator="至">
                    <view class="time-show">
                        从:<view class="query-time">{{ queryTimes[0] }}</view>
                        到:<view class="query-time">{{ queryTimes[1] }}</view>
                    </view>
                </uni-datetime-picker>
            </view>
            <view class="w-screen-btn">
                <button type="primary" size="mini" :class="`w-sb-btn ${selectBtn == 'high' ? 'is-active' : ''}`"
                    @tap="handleClickBtn('high')">{{ '筛选' }}</button>

                <uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event, 'showRight')">
                    <view class="scroll-view">
                        <scroll-view class="scroll-view-box" scroll-y="true">
                            <view class="info">
                                <text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
                            </view>
                            <view class="close">
                                <button @click="closeDrawer('showRight')"><text
                                        class="word-btn-white">关闭Drawer</text></button>
                            </view>
                            <view class="info-content" v-for="item in 100" :key="item">
                                <text>可滚动内容 {{ item }}</text>
                            </view>
                            <view class="close">
                                <button @click="closeDrawer('showRight')"><text
                                        class="word-btn-white">关闭Drawer</text></button>
                            </view>
                        </scroll-view>
                    </view>
                </uni-drawer>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            datetimerange: [],
            tableData: [
                { code: 'G061', name: '电闸61', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G071', name: '电闸71', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G081', name: '电闸81', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G091', name: '电闸91', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G101', name: '电闸101', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G111', name: '电闸111', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G121', name: '电闸121', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G131', name: '电闸131', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G141', name: '电闸141', voltage: '110V', current: '20A', stateName: '合闸' },
                { code: 'G151', name: '电闸151', voltage: '110V', current: '20A', stateName: '合闸' },
            ]
        }
    },
    onLoad(options) {
        console.log(options, 'id')
    },
    computed: {
        queryTimes() {
            if (!this.datetimerange || !this.datetimerange.length) {
                let { yetFullYear, yetMonth, yetDay } = this.getFormatDate();
                return [yetFullYear + '-' + (yetMonth < 10 ? '0' + yetMonth : yetMonth) + '-' + yetDay + ' 00:00', yetFullYear + '-' + (yetMonth < 10 ? '0' + yetMonth : yetMonth) + '-' + yetDay + ' 23:59']

            } else {
                return [this.datetimerange[0].substr(2), this.datetimerange[1].substr(2)];
            }
        }
    },
    methods: {

        // 打开窗口
        showDrawer(e) {
            this.$refs[e].open()
        },
        getFormatDate(datetime) {
            let date = datetime ? new Date(datetime) : new Date();
            let yetFullYear = date.getFullYear().toString().substr(2, 4);
            let yetMonth = date.getMonth() + 1;
            let yetDay = date.getDate();
            return {
                yetFullYear,
                yetMonth,
                yetDay
            }
        },
        handleClickBtn() {

        }
    }
}
</script>
<style lang="scss" scoped>
.w-page {
    padding: 0;

    .w-query-header {
        width: 100%;
        display: flex;
        padding: 16rpx 20rpx;
        align-items: center;

        color: $w-white-font;
        font-size: 12px;

        .w-time-select {
            flex: 1;
            display: flex;
            align-items: center;

            .time-show {
                display: flex;

                align-items: center;

                .query-time {
                    border: 2rpx solid $w-select-color;
                    text-align: center;
                    width: 190rpx;
                    height: 50rpx;
                    padding: 8rpx 0;
                    margin: 0 8rpx;
                }
            }
        }

        .w-screen-btn {
            width: 110rpx;
            margin-left: 20rpx;
            font-size: 14px;
            height: 60rpx;

            .w-sb-btn {
                line-height: 60rpx;
                width: 100%;
                padding-left: 0;
                padding-right: 0;
                color: $w-white-font;
                font-size: 14px;
                background-color: $w-select-color;
            }
        }
    }
}
</style>