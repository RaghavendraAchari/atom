<template>
	<div class="home">
		<div class="title">Home :</div>
		<LoaderImage v-if="!feedDetails.length" />
		<div class="quotes" v-if="feedDetails.length">
			<div class="window" v-if="quoteOpen">
				<p class="quote">{{ quotes[0].quote }}</p>
				<p class="author">- {{ quotes[0].author }}</p>
			</div>
			<div class="close-button">
				<button @click="closeQuoteWindow">
					<span v-if="quoteOpen">Close</span>
					<span v-else>Open</span>
				</button>
			</div>
		</div>
		<FeedCard
			v-for="feedDetail in feedDetails"
			:key="feedDetail.id"
			:title="feedDetail.title"
			:desc="feedDetail.body"
			:type="feedType"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeedCard from "@/components/FeedCard.vue";
import LoaderImage from "@/components/common/Loader.vue";

import FeedData from "@/Models/FeedData";
import FeedType from "@/Models/FeedType";

export default defineComponent({
	name: "HomeView",
	components: {
		FeedCard,
		LoaderImage,
	},
	data() {
		return {
			feedDetails: Array<FeedData>(),
			feedType: "photo" as FeedType,
			interests: [],
			quotes: [
				{
					quote: "You can't be rich if you rent your time for someone else",
					author: "Naval Ravikant",
				},
			],
			quoteOpen: true,
		};
	},
	methods: {
		closeQuoteWindow() {
			this.quoteOpen = !this.quoteOpen;
		},
	},
	mounted() {
		fetch("http://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((res) => {
				setTimeout(() => {
					this.feedDetails = res;
					console.log(this.feedDetails);
				}, 2000);
			});
	},
});
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.title {
	width: 80%;
	margin: 10px auto;
	padding: 5px;
	text-align: start;
	font-weight: 500;
	font-size: var(--title-font-size);
}
.home {
	overflow-y: scroll;
}
.quotes {
	width: 100%;
	margin-bottom: 10px;
	background-color: $Teal-and-Gray-2-hex;

	.window {
		width: 60%;
		margin: auto;
		color: white;
		border-left: 4px solid white;
		font-style: italic;
		position: relative;
		top: 5px;
		padding-top: 5px;
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
			&.quote {
			}
			&.author {
				text-align: right;
			}
		}
	}
	.close-button {
		width: 60%;
		margin: auto;
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
		}
	}
}
</style>
