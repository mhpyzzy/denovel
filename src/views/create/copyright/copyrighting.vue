<template>
	<div class="m1">
		<van-image fit="fill" src="https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg" />
		<div class="detail">
			<div class="rate">
				<div class="title">募集占比</div>
				<div>40% - 公众募资</div>
				<div>40% - 作者冻结</div>
				<div>20% - 平台冻结</div>
			</div>
			<div class="detail-item">
				<div class="title">小说名称</div>
				<div class="f1">夜的命名术</div>
			</div>
			<div class="detail-item">
				<div class="title">代币名称</div>
				<van-field class="short" v-model="chapter" placeholder="代币名称" />
			</div>
			<div class="detail-item">
				<div class="title">代币类型</div>
				<div class="f1">ERC-20</div>
			</div>
			<div class="detail-item">
				<div class="title">代币总量</div>
				<van-field v-model="chapter" placeholder="代币总量" />
			</div>
			<div class="detail-item">
				<div class="title">接受代币</div>
				<div class="select" @click="showPopup"><span>选择或新建所属藏品系列</span><van-icon name="arrow-down" /></div>
				<van-popup v-model:show="isShow" position="bottom">
					<van-picker title="标题" :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
				</van-popup>
			</div>
			<div class="detail-item">
				<div class="title">募集价格</div>
				<van-field v-model="chapter" placeholder="募集价格">
					<template #button>
						<span class="f2">USDT / ZRC</span>
					</template>
				</van-field>
			</div>
		</div>

		<div class="footer">
			<van-button round type="primary">创建版权包</van-button>
		</div>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const isShow = ref(false);
const columns = ['USDT', 'ETH', 'BTC', 'BCH', 'XRP'];
const showPopup = () => {
	isShow.value = true;
};
const onConfirm = (value, index) => {};
const onChange = (value, index) => {};
const onCancel = () => (isShow.value = false);
</script>

<style lang="less" scoped>
.m1 {
	padding: 20px;
	& .van-image {
		width: 100%;
		height: 190px;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(#111d30, 10%);
		overflow: hidden;
	}

	.detail {
		margin-top: 24px;
		position: relative;
		.rate {
			position: absolute;
			right: 0;
			top: 0;
			font-size: 14px;
		}
		.title {
			font-size: 12px;
			color: @--color-3;
			margin-bottom: 4px;
		}
		&-item {
			margin-bottom: 14px;

			.van-field {
				border: 1px solid @--color-4;
				border-radius: 8px;

				&.short {
					width: 40%;
				}
			}
			.f1 {
				font-size: 18px;
				color: @--color-1;
			}
			.f2 {
				font-size: 14px;
				color: @--color-2;
			}

			.select {
				background: #fff;
				height: 44px;
				border-radius: 8px;
				padding: 0 10px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 14px;
				color: #c8c9cc;
				border: 1px solid @--color-4;
			}
		}
	}

	.footer {
		margin-top: 30px;
		text-align: center;
	}
	/deep/.van-button__text {
		font-size: 18px;
	}
}
</style>
