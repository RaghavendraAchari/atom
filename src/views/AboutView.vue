<template>
	<div class="wrapper">
		<div class="about">
			<div class="profile-photo">
				<lord-icon
					src="https://cdn.lordicon.com/elkhjhci.json"
					trigger="hover"
					colors="primary:#121331"
					state="hover"
					class="icon"
				>
				</lord-icon>
			</div>
			<div class="details">
				<div class="personal">
					<h3>{{ name }}</h3>

					<p>{{ desc }}</p>
				</div>
				<div class="skills">
					<div class="skill" v-for="skill in skills" :key="skill">
						{{ skill }}
					</div>
				</div>
				<div class="sites">
					<div class="site">
						<a href="#"><img src="../assets/Linkedin.svg" alt="LinkedIn" /></a>
					</div>
					<div class="site">
						<a href="#"><img src="../assets/Facebook.svg" alt="Facebook" /></a>
					</div>
					<div class="site">
						<a href="#"><img src="../assets/Instagram.svg" alt="Instagram" /></a>
					</div>
					<div class="site">
						<a href="#"><img src="../assets/Twitter.svg" alt="Twitter" /></a>
					</div>
				</div>
				<div class="contacts">
					<div class="contact">
						<a :href="'mailto:' + contact.email">Email : {{ contact.email }}</a>
					</div>
					<div class="contact">
						<a :href="'tel:' + contact.phone">Phone : {{ contact.phone }}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "AboutView",
	data() {
		return {
			name: "Raghavendra Achari",
			desc: "Studied computers in college but by passion i'm into different things. I'm a proffesional software developer by core but also a photographer and a musician",
			skills: ["Software development", "Web development", "Photography", "Art", "Designing"],
			contact: {
				phone: "+919731453933",
				email: "raghav.achari.l@gmail.com",
			},
		};
	},
});
</script>

<style lang="scss" scoped>
.wrapper {
	width: 100%;
	height: var(--main-window-height);
	overflow-y: auto;
}
.about {
	display: grid;
	grid-template-areas: var(--aboutview-grid);
	margin: 0 auto;
	align-content: center;
	width: var(--content-width);
	height: 100%;
	overflow-y: auto;

	.profile-photo {
		grid-area: profilephoto;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		width: 100%;
		.icon {
			width: var(--profilephoto-width);
			height: var(--profilephoto-width);
		}
	}
	.details {
		grid-area: details;
		max-width: 100%;
		margin: auto;
		padding: var(--main-padding);
		.personal {
			h3 {
				font-size: 2.5em;
				margin: 10px;
			}
			p {
				text-align: justify;
				font-size: var(--text-font-size);
			}
		}
		.skills {
			max-width: 100%;
			.skill {
				display: inline-block;
				margin: var(--pills-margin);
				background-color: rgba(83, 83, 83, 0.45);
				padding: var(--pills-padding);
				border-radius: 30px;
				color: rgb(255, 255, 255);
				font-size: var(--text-font-size);
			}
		}
		.sites {
			.site {
				display: inline-block;
				margin: 10px;
				opacity: 1;
				font-size: var(--text-font-size);
				&:hover {
					opacity: 0.7;
				}
			}
		}
		.contacts {
			.contact {
				display: block;
				margin: 10px;
				opacity: 1;
				font-size: var(--text-font-size);

				a {
					text-decoration: none;
					color: black;
					font-weight: 500;
				}
				&:hover {
					opacity: 0.7;
				}
			}
		}
	}
}

//media queries
@media only screen and (min-width: 320px) {
	.about {
		grid-template-areas: "profilephoto" "details";
		.profile-photo {
			.icon {
				max-width: 110px;
				max-height: 110px;
			}
		}
	}
}
/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
	.about {
		grid-template-areas: "profilephoto" "details";
		.profile-photo {
			.icon {
				max-width: 110px;
				max-height: 110px;
			}
		}
	}
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
	.about {
		grid-template-areas: "profilephoto details" "profilephoto details";
		.profile-photo {
			justify-content: flex-end;
			.icon {
				max-width: 300px;
				max-height: 300px;
			}
		}
	}
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
	.about {
		grid-template-areas: "profilephoto details" "profilephoto details";
		.profile-photo {
			justify-content: flex-end;
			.icon {
				max-width: 300px;
				max-height: 300px;
			}
		}
	}
}

// /* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
	.personal {
		p {
			// min-width: 30em;
			max-width: 50em;
		}
	}
}
</style>
