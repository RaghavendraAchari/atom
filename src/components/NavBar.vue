<template>
	<header>
		<nav>
			<div class="brandname">Atom | By <strong class="name">Raghav Achari</strong></div>
			<ul class="nav-items">
				<div>
					<router-link class="nav-item" to="/">Home Feed</router-link>
				</div>
				<div>
					<a class="nav-item" @click.prevent="openInterests"
						><span>Interests</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="iconify iconify--mdi"
							:class="{
								'interest-open': openInterestsDrawer,
								'interest-close': !openInterestsDrawer,
							}"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 24 24"
							id="interests-arrow-img"
						>
							<path
								width="100%"
								height="100%"
								fill="currentColor"
								d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
							></path>
						</svg>
					</a>
				</div>
				<div>
					<router-link class="nav-item" to="/about">About Me</router-link>
				</div>
			</ul>
		</nav>
	</header>
	<div v-show="openInterestsDrawer" id="interests-drawer">
		<div class="interest" v-for="interest in interests" :key="interest">
			{{ interest }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "NavBar",
	data() {
		return {
			interests: ["Photography", "Art", "Design", "Books"],
			openInterestsDrawer: false,
		};
	},
	methods: {
		openInterests() {
			this.openInterestsDrawer = !this.openInterestsDrawer;
			this.$emit("openInterestsDrawer");
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

header {
	grid-area: nav;
	width: 100%;
	height: var(--navbar-height);
	background-color: white;
	border: 0.5px solid rgba(128, 128, 128, 0.421);
	z-index: 10;

	nav {
		width: var(--content-width);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;

		.brandname {
			font-size: var(--brand-name-font-size);
			letter-spacing: 1px;
			cursor: default;
			width: 40%;
		}

		.nav-items {
			font-weight: 400;
			display: flex;
			width: 60%;
			justify-content: flex-end;
			div {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.nav-item {
				padding: var(--navs-padding);
				margin: var(--navs-margin);
				text-decoration: none;
				color: black;
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: var(--nav-text-font-size);
				&:hover {
					box-shadow: 0px -2px inset black;
					transition: all 0.3s;
				}
				.interest-open {
					transform: rotate(180deg);
				}
				.interest-close {
					transform: rotate(0deg);
				}
			}

			& .router-link-active {
				font-weight: 600;
			}
		}
		#interests-arrow-img {
			width: var(--arrow-img-size);
			transition: all 0.3s;
		}
	}
}
#interests-drawer {
	background-color: white;
	padding: 2vh 2vw;
	border-bottom: var(--border);
	position: absolute;
	top: var(--navbar-height);
	width: 100%;
	@keyframes enter {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	animation: enter 0.2s ease-in-out;
}

.interest {
	display: inline-block;
	min-width: 200px;
	padding: var(--button-padding);
	margin: var(--button-margin);
	color: black;
	font-size: var(--title-font-size);
	border: 0.5px solid $button-color;
	border-radius: 5px;
	&:hover {
		background-color: $button-color;
		cursor: pointer;
		color: white;
		box-shadow: var(--button-shadow);
		transition: all 0.3s;
	}
}
//media queries
@media only screen and (min-width: 320px) {
	.name {
		display: block;
	}
}
/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
	.brandname {
		text-align: left;
	}
	.name {
		display: block;
	}
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
	.brandname {
		text-align: left;
		.name {
			display: inline;
		}
	}
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
	.brandname {
		text-align: left;
		.name {
			display: inline;
		}
	}
}

// /* Large Devices, Wide Screens */
// @media only screen and (min-width: 1200px) {

// }
</style>
