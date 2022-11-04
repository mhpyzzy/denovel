<template>
	<div class="collecting">
		<div class="type">图片、视频、音频、3D模型</div>
		<div class="format">支持的文件格式有：JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, FLTF. 最大100MB.</div>
		<van-uploader :after-read="afterRead">
			<div class="upload_btn"><van-icon name="photo-o" size="100" />点击上传</div>
		</van-uploader>

		<div class="title">藏品名称</div>
		<van-field v-model="chapter" placeholder="输入藏品名称" />

		<div class="title">藏品描述</div>
		<van-field v-model="chapter" autosize type="textarea" placeholder="输入藏品描述" />

		<div class="title">藏品系列</div>
		<div class="select" @click="showPopup"><span>选择或新建所属藏品系列</span><van-icon name="arrow-down" /></div>

		<van-popup v-model:show="isShow" position="bottom">
			<van-picker title="标题" :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
		</van-popup>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const price = ref({ name: '价格' });
const isShow = ref(false);
const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华'];

const onConfirm = (value, index) => {};
const onChange = (value, index) => {};
const onCancel = () => (isShow.value = false);

const afterRead = (file) => {
	// 此时可以自行将文件上传至服务器
	console.log(file);
};
const showPopup = () => {
	isShow.value = true;
};
</script>

<style lang="less" scoped>
.collecting {
	padding: 20px;
	min-height: 100vh;
	background: #f0f0f0;
	.type {
		color: @--color-2;
	}
	.format {
		color: @--color-4;
		font-size: 12px;
	}

	.van-uploader {
		border: 1px dashed @--color-4;
		width: 100%;
		margin-top: 10px;
	}
	.upload_btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 190px;
		width: calc(100vw - 44px);
		font-size: 16px;
		color: @--color-4;
	}
	.title {
		margin-top: 20px;
		font-size: 12px;
		color: @--color-4;
		margin-bottom: 4px;
	}
	.van-field {
		border-radius: 8px;
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
	}
}
</style>
