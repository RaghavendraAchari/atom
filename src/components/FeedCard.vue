<template>
	<TypeLabel :type="type" />
	<!-- Card -->
	<div class="card">
		<h3 class="title text-left">{{ title }}</h3>
		<p class="desc text-left">{{ desc }}</p>
		<ImageBlock v-if="type == 'photo'" />
		<LinkButton class="link-button" :type="type" />
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import LinkButton from "@/components/common/LinkButton.vue";
import TypeLabel from "@/components/common/TypeLabel.vue";
import ImageBlock from "@/components/ImageBlock.vue";

import FeedType from "@/Models/FeedType";

export default defineComponent({
	name: "FeedCard",
	components: {
		LinkButton,
		TypeLabel,
		ImageBlock,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		type: {
			type: String as PropType<FeedType>,
			required: true,
		},
	},
});
</script>

<style lang="scss">
@import "../assets/global.scss";

.card {
	border: $border-size solid $border-color;
	width: var(--content-width);
	border-radius: 10px;
	margin: 0 auto 10px auto;
	padding: $padding;
	.title {
		grid-area: title;
		width: 100%;
		font-weight: 600;
		text-align: justify;
		font-size: var(--title-font-size);
	}
	p {
		grid-area: text;
		margin-top: 15px;
		width: 100%;
		font-weight: 400;
		text-align: justify;
		font-size: var(--text-font-size);
	}
}

.card:hover {
	box-shadow: $card-shadow;
}

//media queries
@media only screen and (min-width: 320px) {
	.card {
		display: grid;
		grid-template-areas:
			"title"
			"text"
			"photo"
			"button";
		.image-block {
			margin: 10px 10px;
		}
	}
}
/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
	.card {
		display: grid;
		grid-template-areas:
			"title"
			"text"
			"photo"
			"button";
		.image-block {
			margin: 10px 10px;
		}
	}
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
	.card {
		display: grid;
		grid-template-areas:
			"title title photo photo"
			"text text photo photo"
			"button button button button";
		grid-template-columns: repeat(4, minmax(0, 1fr));
		.image-block {
			margin: 0 0 0 20px;
		}
	}
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
	.card {
		display: grid;
		grid-template-areas:
			"title title photo photo"
			"text text photo photo"
			"button button button button";
		grid-template-columns: repeat(4, minmax(0, 1fr));
		.image-block {
			margin: 0 0 0 30px;
		}
	}
}

// /* Large Devices, Wide Screens */
// @media only screen and (min-width: 1200px) {

// }
</style>
