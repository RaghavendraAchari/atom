<template>
	<div class="home">
		<div class="title">Home :</div>
		<LoaderImage v-if="!feedDetails.length" />
		<QuoteBanner v-if="feedDetails.length" />
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
import QuoteBanner from "@/components/QuoteBanner.vue";
import LoaderImage from "@/components/common/Loader.vue";

import FeedData from "@/Models/FeedData";
import FeedType from "@/Models/FeedType";

export default defineComponent({
	name: "HomeView",
	components: {
		FeedCard,
		LoaderImage,
		QuoteBanner,
	},
	data() {
		return {
			feedDetails: Array<FeedData>(),
			feedType: "photo" as FeedType,
			interests: [],
		};
	},
	methods: {},
	mounted() {
		fetch("http://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((res) => {
				this.feedDetails = res;
				// console.log(this.feedDetails);
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

/* width */
::-webkit-scrollbar {
	width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #555;
}
</style>
