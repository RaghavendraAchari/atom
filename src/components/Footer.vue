<template>
	<footer>
		<div class="footer-content">
			<p>Copyright @ 2022 | Raghav Achari</p>
		</div>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "FooterBar",
});
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

footer {
	grid-area: footer;
	$footer-color: #878787;
	background-color: $footer-color;
	height: var(--footer-height);
	position: absolute;
	bottom: 0;
	top: auto;
	left: 0;
	right: 0;
	.footer-content {
		color: white;
		margin: auto;
		height: 100%;
		width: var(--content-width);
		display: flex;
		justify-content: center;
		align-items: center;
		p {
			font-size: 12px;
		}
	}
}
</style>
