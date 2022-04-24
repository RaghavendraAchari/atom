<template>
	<div class="subject" v-if="type == 'article'">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="iconify iconify--mdi symbol"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="m15.54 3.5l4.96 4.97l-1.43 1.41l-4.95-4.95l1.42-1.43M3.5 19.78l6.5-6.47c-.1-.31-.03-.7.23-.96c.39-.39 1.03-.39 1.42 0c.39.4.39 1.03 0 1.42c-.26.26-.65.33-.96.23l-6.47 6.5l10.61-3.55l3.53-6.36l-4.94-4.95l-6.37 3.53L3.5 19.78Z"
			></path>
		</svg>
		Article
	</div>
	<div class="subject" v-else-if="type == 'photo'">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="iconify iconify--simple-icons symbol"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M17.924 11.451c.059.629.023.85-.168 1.042c-.288.288-.656.312-.969.064c-.127-.1-.269-.52-.322-.951a4.842 4.842 0 0 0-1.09-2.492c-.57-.692-2.005-1.407-2.822-1.407c-.652 0-1.199-.361-1.199-.791c0-.266.507-.79.764-.79c.104 0 .57.071 1.035.156c2.543.47 4.532 2.625 4.771 5.169zM24 12.05c0 6.531-.008 6.731-.288 7.01c-.27.27-.479.287-3.453.287h-3.165l-1.002.504c-.551.277-1.406.6-1.901.716c-1.123.265-3.071.257-4.204-.016c-.474-.115-1.304-.433-1.844-.707l-.981-.498H3.82c-3.057 0-3.364-.023-3.581-.263c-.215-.236-.239-.938-.239-7.09c0-7.624-.054-7.23 1.006-7.329c.411-.039.512-.112.553-.406c.086-.625.274-.719 1.448-.719c1.213 0 1.448.121 1.448.747v.402h1.302c1.215 0 1.381-.037 2.479-.558c1.515-.718 2.274-.892 3.908-.892c1.644 0 2.409.175 3.885.891l1.155.56h3.184c3.127 0 3.188.006 3.408.319c.195.278.224 1.19.224 7.042zM2.587 4.545c0 .079.194.144.431.144s.431-.065.431-.144c0-.079-.194-.144-.431-.144s-.431.065-.431.144zm2.874 13.294c0-.039-.21-.346-.467-.683c-2.108-2.761-2.184-7.023-.18-10.022l.626-.936l-1.802-.04c-1.204-.028-1.867.014-2.001.125c-.164.136-.2 1.14-.2 5.618c0 3.484.054 5.553.149 5.731c.135.253.317.278 2.012.278c1.025 0 1.863-.032 1.863-.071zm13.183-9.197c-.517-1.033-2.026-2.573-3.061-3.125c-2.068-1.102-4.809-1.102-6.877 0c-1.166.622-2.586 2.127-3.17 3.36a7.258 7.258 0 0 0 3.454 9.704c1.532.731 2.931.922 4.535.62c1.072-.202 2.65-.986 3.494-1.737c2.453-2.18 3.124-5.825 1.625-8.822zm3.741 3.294l-.038-5.739l-1.781-.041l-1.781-.04l.237.328c2.419 3.354 2.581 7.219.437 10.416c-.348.519-.633.967-.633.996c0 .108 3.24.044 3.415-.067c.142-.089.173-1.357.144-5.853z"
			></path>
		</svg>
		Photography
	</div>
	<div class="subject" v-else-if="type == 'art'">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="iconify iconify--fluent symbol"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v12.283c0 1.303 1.57 1.962 2.5 1.048l4.03-3.96a.634.634 0 0 0 .02-.021l1.925-1.885l.083-.071a.75.75 0 0 1 .966.07l2.08 2.037l1.06-1.06l-2.09-2.048l-.129-.116a2.25 2.25 0 0 0-3.02.116l-4.452 4.36h.01L4.5 18.46V6.25c0-.966.784-1.75 1.75-1.75h11.5c.967 0 1.75.784 1.75 1.75v4.982c.48-.19.994-.263 1.5-.22V6.25Zm-3.496 2.502a2.252 2.252 0 1 0-4.505 0a2.252 2.252 0 0 0 4.505 0Zm-3.005 0a.752.752 0 1 1 1.505 0a.752.752 0 0 1-1.505 0Zm-1.302 9.82l5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.684 2.684 0 0 1-1.247.707l-1.83.457a.985.985 0 0 1-.15.027c-.59.204-2.979.574-3.827-.088c-.574-.448-.46-1.334-.218-1.818c.04-.078-.02-.18-.105-.166c-.66.103-1.243.45-1.827.799c-.783.468-1.57.936-2.549.815c-.979-.122-1.468-.726-1.71-1.255c-.099-.216.18-.401.388-.287c.469.255 1.106.496 1.631.38c.375-.084.904-.458 1.496-.877c1.066-.753 2.337-1.653 3.292-1.268c.84.337 1.46 1.15 1.03 2.113c-.052.118 0 .264.127.293c.423.097.778.066 1.133-.105l.428-1.712c.118-.472.362-.903.706-1.247Z"
			></path>
		</svg>
		Art
	</div>
	<!-- Card -->
	<div class="card" v-if="type == 'article'">
		<h3 class="title text-left">{{ title }}</h3>
		<p class="desc text-left">{{ desc }}</p>
		<div class="button-wrapper">
			<button>
				Take me here
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--mdi symbol"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="m15.54 3.5l4.96 4.97l-1.43 1.41l-4.95-4.95l1.42-1.43M3.5 19.78l6.5-6.47c-.1-.31-.03-.7.23-.96c.39-.39 1.03-.39 1.42 0c.39.4.39 1.03 0 1.42c-.26.26-.65.33-.96.23l-6.47 6.5l10.61-3.55l3.53-6.36l-4.94-4.95l-6.37 3.53L3.5 19.78Z"
					></path>
				</svg>
			</button>
		</div>
	</div>
	<div class="card photo" v-if="type == 'photo'">
		<div class="wrapper">
			<div class="left">
				<h3 class="title text-left">{{ title }}</h3>
				<p class="desc text-left">{{ desc }}</p>
			</div>
			<div class="right"><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /></div>
		</div>
		<div class="button-wrapper">
			<button>
				Take me here
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--simple-icons symbol"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M17.924 11.451c.059.629.023.85-.168 1.042c-.288.288-.656.312-.969.064c-.127-.1-.269-.52-.322-.951a4.842 4.842 0 0 0-1.09-2.492c-.57-.692-2.005-1.407-2.822-1.407c-.652 0-1.199-.361-1.199-.791c0-.266.507-.79.764-.79c.104 0 .57.071 1.035.156c2.543.47 4.532 2.625 4.771 5.169zM24 12.05c0 6.531-.008 6.731-.288 7.01c-.27.27-.479.287-3.453.287h-3.165l-1.002.504c-.551.277-1.406.6-1.901.716c-1.123.265-3.071.257-4.204-.016c-.474-.115-1.304-.433-1.844-.707l-.981-.498H3.82c-3.057 0-3.364-.023-3.581-.263c-.215-.236-.239-.938-.239-7.09c0-7.624-.054-7.23 1.006-7.329c.411-.039.512-.112.553-.406c.086-.625.274-.719 1.448-.719c1.213 0 1.448.121 1.448.747v.402h1.302c1.215 0 1.381-.037 2.479-.558c1.515-.718 2.274-.892 3.908-.892c1.644 0 2.409.175 3.885.891l1.155.56h3.184c3.127 0 3.188.006 3.408.319c.195.278.224 1.19.224 7.042zM2.587 4.545c0 .079.194.144.431.144s.431-.065.431-.144c0-.079-.194-.144-.431-.144s-.431.065-.431.144zm2.874 13.294c0-.039-.21-.346-.467-.683c-2.108-2.761-2.184-7.023-.18-10.022l.626-.936l-1.802-.04c-1.204-.028-1.867.014-2.001.125c-.164.136-.2 1.14-.2 5.618c0 3.484.054 5.553.149 5.731c.135.253.317.278 2.012.278c1.025 0 1.863-.032 1.863-.071zm13.183-9.197c-.517-1.033-2.026-2.573-3.061-3.125c-2.068-1.102-4.809-1.102-6.877 0c-1.166.622-2.586 2.127-3.17 3.36a7.258 7.258 0 0 0 3.454 9.704c1.532.731 2.931.922 4.535.62c1.072-.202 2.65-.986 3.494-1.737c2.453-2.18 3.124-5.825 1.625-8.822zm3.741 3.294l-.038-5.739l-1.781-.041l-1.781-.04l.237.328c2.419 3.354 2.581 7.219.437 10.416c-.348.519-.633.967-.633.996c0 .108 3.24.044 3.415-.067c.142-.089.173-1.357.144-5.853z"
					></path>
				</svg>
			</button>
		</div>
	</div>
	<div class="card" v-if="type == 'art'">
		<h3 class="title text-left">{{ title }}</h3>
		<p class="desc text-left">{{ desc }}</p>
		<div class="button-wrapper">
			<button>
				Take me here
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--fluent symbol"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v12.283c0 1.303 1.57 1.962 2.5 1.048l4.03-3.96a.634.634 0 0 0 .02-.021l1.925-1.885l.083-.071a.75.75 0 0 1 .966.07l2.08 2.037l1.06-1.06l-2.09-2.048l-.129-.116a2.25 2.25 0 0 0-3.02.116l-4.452 4.36h.01L4.5 18.46V6.25c0-.966.784-1.75 1.75-1.75h11.5c.967 0 1.75.784 1.75 1.75v4.982c.48-.19.994-.263 1.5-.22V6.25Zm-3.496 2.502a2.252 2.252 0 1 0-4.505 0a2.252 2.252 0 0 0 4.505 0Zm-3.005 0a.752.752 0 1 1 1.505 0a.752.752 0 0 1-1.505 0Zm-1.302 9.82l5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.684 2.684 0 0 1-1.247.707l-1.83.457a.985.985 0 0 1-.15.027c-.59.204-2.979.574-3.827-.088c-.574-.448-.46-1.334-.218-1.818c.04-.078-.02-.18-.105-.166c-.66.103-1.243.45-1.827.799c-.783.468-1.57.936-2.549.815c-.979-.122-1.468-.726-1.71-1.255c-.099-.216.18-.401.388-.287c.469.255 1.106.496 1.631.38c.375-.084.904-.458 1.496-.877c1.066-.753 2.337-1.653 3.292-1.268c.84.337 1.46 1.15 1.03 2.113c-.052.118 0 .264.127.293c.423.097.778.066 1.133-.105l.428-1.712c.118-.472.362-.903.706-1.247Z"
					></path>
				</svg>
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import FeedType from "@/Models/FeedType";

export default defineComponent({
	name: "FeedCard",
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
	// ["title", "desc","type"]
});
</script>

<style lang="scss">
@import "../assets/global.scss";
.subject {
	text-align: end;
	width: fit-content;
	margin: 0 11% 0 auto;
	font-weight: 600;
	font-size: 14px;
	display: flex;
	align-items: center;
	color: rgba(0, 0, 0, 0.6);
	.symbol {
		height: 15px;
		width: 15px;
		margin: 1px;
		color: rgba(0, 0, 0, 0.6);
	}
}
.card {
	border: $border-size solid $border-color;
	width: 80%;
	border-radius: 10px;
	margin: 0 auto 10px auto;
	padding: $padding;
	.title {
		width: 50%;
		font-weight: 600;
		text-align: justify;
	}
	p {
		margin-top: 15px;
		width: 50%;
		font-weight: 400;
		text-align: justify;
	}
	.button-wrapper {
		display: flex;
		justify-content: left;
		margin-top: 15px;

		button {
			font-family: inherit;
			padding: var(--button-padding);
			background: none;
			border: 0.5px solid $button-color;
			border-radius: 7px 0 0 7px;
			cursor: pointer;
			color: $button-color;
			font-weight: 500;
			font-size: 14px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&:hover {
				transition: all 0.1s ease-in;
				color: white;
				background-color: $button-color;
				box-shadow: $button-shadow;
			}
			.symbol {
				height: 24px;
				width: 24px;
				margin: auto 4px;
			}
		}
	}
}
.card.photo {
	.wrapper {
		display: flex;
		flex-direction: row;
		.left {
			margin-right: 10px;
			flex: 1;
			.title {
				width: 100%;
			}
			p {
				width: 100%;
			}
		}
		.right {
			margin: 0 10px;
			padding: 20px;
			flex: 1;
			display: flex;
			justify-content: space-between;
			border: 0.5px solid rgba(26, 26, 26, 0.208);
			border-radius: 10px;
			img {
				width: 100%;
				height: 100px;
			}
		}
	}
}

.card:hover {
	box-shadow: $card-shadow;
}
</style>
