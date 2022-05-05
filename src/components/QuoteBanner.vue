<template>
	<div class="quotes">
		<div class="wrapper" v-if="quoteOpen">
			<div class="window">
				<p class="quote">{{ quotes[index].quote }}</p>
				<p class="author">- {{ quotes[index].author }}</p>
			</div>
		</div>
		<div class="close-button">
			<button @click="closeQuoteWindow">
				<span v-if="quoteOpen">Close</span>
				<span v-else>Open</span>
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "QuoteBanner",
	props: [],

	data() {
		return {
			index: 0,
			quotes: [
				{
					quote: "You can't be rich if you rent your time for someone else",
					author: "Naval Ravikant",
				},
				{
					quote: `The answer to the meaning of life is “because.” You get to make up the answer and create your own meaning`,
					author: "Naval Ravikant",
				},
				{
					quote: `Pick one desire, and one desire only. The universe will help you get it. Let go of everything else`,
					author: "Naval Ravikant",
				},
			],
			quoteOpen: true,
		};
	},
	mounted() {
		setInterval(() => {
			if (this.index > -1 && this.index < this.quotes.length - 1) this.index++;
			else this.index = 0;
		}, 10000);
	},
	methods: {
		closeQuoteWindow() {
			this.quoteOpen = !this.quoteOpen;
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.quotes {
	width: var(--content-width);
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: $Teal-and-Gray-2-hex;
	border-radius: 7px;
	box-shadow: var(--quote-card-shadow);
	.wrapper {
		padding: 5px 0px;
	}
	.window {
		width: 60%;
		margin: auto;
		margin-top: 8px;
		color: white;
		border-left: 4px solid white;
		font-style: italic;

		@keyframes enter {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		animation: enter 0.3s ease-in-out;
		p {
			text-align: start;
			padding: var(--main-padding);
			&.author {
				text-align: right;
			}
		}
	}
	.close-button {
		width: var(--content-width);
		margin: auto;
		margin-right: 0;
		color: white;
		border-left: none;
		display: flex;
		justify-content: flex-end;
		button {
			border: none;
			background-color: transparent;
			padding: 5px 10px;
			border-radius: 10px;
			margin: 5px;
			color: white;
			font-weight: 500;
			letter-spacing: 0.5px;
			cursor: pointer;
		}
	}
}
</style>
