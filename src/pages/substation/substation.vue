<template>
    <view class="w-page">
        <view class="w-img-page" v-if="showPage == 'img'">
            <view class="w-img-div">
                <image class="w-img" src="@/static/img/monitor/1721220594916.jpg"></image>
            </view>
            <view class="w-change-div" @tap="handleTap('data')">
                <uni-icons type="up" :color="'#fefefb'" size="30"></uni-icons>
                <view class="w-change-text">{{ '数据' }}</view>
            </view>
        </view>
        <view class="w-data-page" v-if="showPage == 'data'">
            <view class="w-change-div" @tap="handleTap('img')">
                <uni-icons type="down" :color="'#fefefb'" size="30"></uni-icons>
                <view class="w-change-text">{{ '隐藏' }}</view>
            </view>
            <view class="w-btns-div">
                <button size="default" type="default" :class="`w-sb-btn ${selectBtn == 'high' ? 'is-active' : ''}`"
                    @tap="handleClickBtn('high')">{{ '高压' }}</button>
                <button size="default" type="default" :class="`w-sb-btn ${selectBtn == 'low' ? 'is-active' : ''}`"
                    @tap="handleClickBtn('low')">{{ '低压' }}</button>
            </view>
            <uni-table ref="table" :loading="false" stripe emptyText="暂无更多数据" class="w-uni-table">
                <uni-tr>
                    <uni-th width="80rpx" class="w-uni-th w-gold-font">编号</uni-th>
                    <uni-th width="200rpx" class="w-uni-th w-gold-font">名称</uni-th>
                    <uni-th width="150rpx" class="w-uni-th w-gold-font">电压</uni-th>
                    <uni-th width="150rpx" class="w-uni-th w-gold-font">电流</uni-th>
                    <uni-th width="170rpx" class="w-uni-th w-gold-font">状态</uni-th>
                </uni-tr>
                <uni-tr v-for="(item, index) in pageList" :key="index">
                    <uni-td class="w-uni-td w-gold-font">{{ item.code }}</uni-td>
                    <uni-td class="w-uni-td w-green-font">{{ item.name }}</uni-td>
                    <uni-td class="w-uni-td w-green-font">{{ item.voltage }}</uni-td>
                    <uni-td class="w-uni-td w-green-font">{{ item.current }}</uni-td>
                    <uni-td class="w-uni-td">{{ item.stateName }}</uni-td>

                </uni-tr>
            </uni-table>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            showPage: 'data',
            selectBtn: 'high',
            pageList: [{ code: 'G011', name: '电闸1', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G02', name: '电闸21', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G03', name: '电闸31', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G04', name: '电闸41', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G05', name: '电闸51', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G06', name: '电闸61', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G07', name: '电闸71', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G08', name: '电闸81', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G09', name: '电闸91', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G10', name: '电闸101', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G11', name: '电闸111', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G12', name: '电闸121', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G13', name: '电闸131', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G14', name: '电闸141', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G15', name: '电闸151', voltage: '220V', current: '20A', stateName: '合闸' }, { code: 'G021', name: '电闸2', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G031', name: '电闸31', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G041', name: '电闸41', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G051', name: '电闸51', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G061', name: '电闸61', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G071', name: '电闸71', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G081', name: '电闸81', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G091', name: '电闸91', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G101', name: '电闸101', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G111', name: '电闸111', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G121', name: '电闸121', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G131', name: '电闸131', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G141', name: '电闸141', voltage: '220V', current: '20A', stateName: '合闸' },
            { code: 'G151', name: '电闸151', voltage: '220V', current: '20A', stateName: '合闸' },]
        }
    },
    onLoad(options) {
        console.log(options, 'id')
    },
    methods: {
        handleTap(name) {
            if (this.showPage == name) return
            this.showPage = name
        },
        handleClickBtn(name) {
            console.log(name, '这是什么情况')
            if (this.selectBtn == name) return
            this.selectBtn = name
        },
    }
}
</script>
<style lang="scss" scoped>
.w-page {
    padding: 0;

    .w-img-page {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        .w-img-div {
            flex: 1;
        }

    }

    .w-data-page {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        .w-btns-div {
            display: flex;
            height: 64rpx;
            line-height: 64rpx;

            .w-sb-btn {
                height: 64rpx;
                line-height: 64rpx;
                min-width: 118rpx;
                border: 2rpx solid $w-default-border-color;
                margin-left: 0;
                margin-right: 12rpx;
            }

            .w-sb-btn.is-active {
                color: $w-select-color;
                border-color: $w-select-color;
            }
        }
    }

    .w-change-div {
        width: 100%;
        height: 72rpx;
        line-height: 72rpx;
        background-color: $w-list-header-color;
        text-align: center;
        display: flex;
        justify-content: center;

        .w-change-text {
            color: $w-white-font;
        }
    }

    .w-gold-font {
        color: $w-gold-font;
    }

    .w-green-font {
        color: $w-green-color;
    }
}
</style>