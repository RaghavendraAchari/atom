<template>
	<div class="image-block"><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ImageBlock",
});
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
.image-block {
	grid-area: photo;
	padding: 10px;
	max-width: 450px;
	display: flex;
	justify-content: space-between;
	border: 0.5px solid rgba(26, 26, 26, 0.208);
	border-radius: 10px;
	img {
		height: 150px;
		width: 130px;
		padding: 5px;
	}
}

//media queries
@media only screen and (min-width: 320px) {
	.image-block {
		margin-right: auto;
		margin-left: auto;
		img {
			height: 100px;
			width: 100px;
			padding: 5px;
		}
	}
}
/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
	.image-block {
		margin-right: auto;
		margin-left: auto;
		img {
			height: 100px;
			width: 100px;
			padding: 5px;
		}
	}
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
	.image-block {
		margin-right: 0;
		margin-left: auto;
		img {
			height: 100px;
			width: 100px;
			padding: 5px;
		}
	}
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
	.image-block {
		margin-right: 0;
		margin-left: auto;
		img {
			height: 100px;
			width: 100px;
			padding: 5px;
		}
	}
}

/* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
	.image-block {
		margin-right: 0;
		margin-left: auto;
		img {
			height: 150px;
			width: 130px;
			padding: 5px;
		}
	}
}
</style>
