<template>
	<NavBar />
	<router-view class="content" />
	<Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
	name: "app",
	components: {
		NavBar,
		Footer,
	},
});
</script>

<style lang="scss">
@import "./assets/global.scss";

#app {
	font-family: "poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: grid;
	grid-template-areas: "nav" "content" "footer";
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.content {
	height: var(--main-window-height);
	grid-area: content;
}
</style>
