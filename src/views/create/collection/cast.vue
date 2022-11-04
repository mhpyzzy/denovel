<!-- 藏品列表页面 -->
<template>
	<div class="cast">
		<van-image fit="cover" src="https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg" />
		<div class="author">
			<div class="left">
				<van-image class="avatar" round src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
				<div class="other">
					<div>天阿降临</div>
					<div>江南烟雨</div>
				</div>
			</div>
			<div class="right">楚君归</div>
		</div>

		<div class="intro">楚君归，本是盛唐王朝以禁法培育的绝秘实验体，试图创造出能够征战星海任何角落...</div>

		<van-tabs v-model:active="active">
			<van-tab>
				<template #title>
					<div class="tab_title">价格</div>
				</template>
				内容
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">属性</div>
				</template>
				内容
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">历史</div>
				</template>
				内容
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">区块链</div>
				</template>
				内容
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">费率</div>
				</template>
				内容
			</van-tab>
		</van-tabs>

		<van-button class="float_btn" round type="primary" @click="$router.push('/collecting')">等待铸造</van-button>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const price = ref({ name: '价格' });
const sku = ref({ name: '属性' });
const history = ref({ name: '历史' });
const chian = ref({ name: '区块链' });
const rate = ref({ name: '费率' });
</script>

<style lang="less" scoped>
.cast {
	min-height: 100vh;
	padding: 20px 14px 0;
	background: #f0f0f0;
	.van-image {
		width: 100%;
		height: 240px;
		border-radius: 10px;
		overflow: hidden;
	}

	.author {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left {
			display: flex;
			align-items: center;

			.avatar {
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}

			.other {
				margin-left: 10px;
				& div:first-child {
					font-size: 15px;
				}
				& div:last-child {
					font-size: 12px;
					color: @--color-4;
				}
			}
		}
	}

	.intro {
		font-size: 15px;
		color: @--color-3;
		margin-top: 10px;
		padding-bottom: 10px;
	}

	.van-tabs--line {
		margin: 0 -14px !important;
		/deep/.van-tabs__nav--line {
			background: transparent;
		}
		/deep/.van-tabs__line {
			display: none;
		}
		/deep/.van-tabs__content {
			background: #fff;
			min-height: 300px;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			padding: 10px;
		}
	}

	.tab_title {
		padding: 4px 10px;
		background: transparent;
		border-radius: 40px;
		color: @--color-2;
		font-size: 14px;
	}
	.van-tab--active {
		.tab_title {
			background: @--color-2;
			color: #fff;
		}
	}
	.float_btn {
		position: fixed;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
