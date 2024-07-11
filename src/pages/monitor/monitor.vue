<template>
    <view class="w-page">
        <view class="w-people-info">
            <view class="w-people-logo">
                <img src="../../static/img/monitor/people-default.jpg" alt="" class="w-people-img">
            </view>
            <view class="w-people-detail">
                <view class="w-people-name w-m-b-16">{{ '汪倾林' }}</view>
                <view class="w-people-tel w-m-b-16">{{ 'tel: ' + '15182728693' }}</view>
                <view class="w-people-dep">{{ '大宝鼎煤矿' }}</view>
            </view>
        </view>
        <view class="w-title-32 w-m-b-28">{{ '组织机构列表' }}</view>
        <view class="w-dep-content w-m-b-32">
            <view class="w-dep-name w-m-b-16">{{ '大宝鼎煤矿' }}</view>
            <view class="w-dep-detail">{{ '总览' }}</view>
        </view>
        <view class="w-line w-m-b-32"></view>
        <view class="w-power-content w-m-b-10">
            <view class="w-power-meritorious w-power-detail">
                <view class="w-power-label  w-m-b-16">{{ '有功功率：' }}</view>
                <view class="w-power-value">{{ '1.11 MW' }}</view>
            </view>
            <view class="w-power-reactive  w-power-detail">
                <view class="w-power-label w-m-b-16">{{ '无功功率：' }}</view>
                <view class="w-power-value">{{ '-0.05 MW' }}</view>
            </view>
            <view class="w-power-factor  w-power-detail">
                <view class="w-power-label w-m-b-16">{{ '功率因子：' }}</view>
                <view class="w-power-value">{{ '0.99' }}</view>
            </view>
        </view>
        <view class="w-power-consumption">

            <view class="w-power-consumption-day  w-power-detail">
                <view class="w-power-label w-m-b-16">{{ '日用电量：' }}</view>
                <view class="w-power-value">{{ '13146.03 kwh' }}</view>
            </view>
            <view class="w-power-consumption-month w-power-detail">
                <view class="w-power-label w-m-b-16">{{ '月用电量:' }}</view>
                <view class="w-power-value">{{ '4203878 kwh' }}</view>
            </view>
        </view>

    </view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello',
        }
    },
    onLoad() { },
    methods: {},
}
</script>

<style lang="scss">
.w-page {
    .w-people-info {
        background-color: $w-pp-color;
        //    background-color: $uni-color-title; 
        border-radius: 8rpx;
        width: 100%;
        height: 240rpx;
        display: flex;
        align-items: center;
        margin-bottom: 60rpx;

        .w-people-logo {
            margin: 36rpx;
            border: 8rpx solid $w-white-font;
            width: 168rpx;
            height: 168rpx;
            border-radius: 168rpx;
            overflow: hidden;

            .w-people-img {

                width: 152rpx;
                height: 152rpx;
            }
        }
    }

    .w-people-detail {
        color: $w-white-font;
        line-height: 32rpx;
    }

    .w-dep-content {
        background-color: $w-gray-color;
        padding: 28rpx 20rpx 32rpx 20rpx;
        color: $w-white-font;
        width: 100%;
        border-radius: 16rpx 0 16rpx 0;

        .w-dep-name,
        .w-dep-detail {
            font-size: 28rpx;
            line-height: 32rpx;
        }

        .w-dep-detail {
            max-height: 96rpx;
            font-size: 26rpx;
            overflow-y: auto;
        }
    }

    .w-power-content,
    .w-power-consumption {
        height: 160rpx;
        width: 100%;
        background-color: $w-gray-color;
        border-radius: 16rpx;
        display: flex;
        justify-content: space-around;
        gap: 20rpx;
        padding: 20rpx;
    }

    .w-power-detail {
        padding: 16rpx 20rpx;
        flex: 1;
        border-radius: 16rpx;
        color: $w-white-font;
        font-size: 28rpx;
        line-height: 32rpx;

        .w-power-label {
            text-align: left;
        }

        .w-power-value {
            text-align: center;
        }
    }

    .w-power-meritorious {
        border: 4rpx solid $w-green-color;
    }

    .w-power-reactive {
        border: 4rpx solid $w-green-color;
    }

    .w-power-factor {
        border: 4rpx solid $w-white-font;
    }

    .w-power-consumption-day {
        text-align: center;
        border: 4rpx solid $w-blue-color;

        .w-power-label {
            text-align: center;
        }

        .w-power-value {
            text-align: center;
        }
    }

    .w-power-consumption-month {
        text-align: center;
        border: 4rpx solid $w-blue-color;

        .w-power-label {
            text-align: center;
        }

        .w-power-value {
            text-align: center;
        }

    }
}</style>
