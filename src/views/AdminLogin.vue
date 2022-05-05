<template>
	<div class="main">
		<LoginForm v-if="!validUser" @user-logged-in="userLoggedIn" />
		<div class="form" v-if="validUser">
			<label>Title : </label>
			<input class="input-fields" name="title" type="text" />
			<label>Description : </label>
			<input class="input-fields" name="desc" type="text" />
			<label>Date and Time : </label>

			<input class="input-fields" name="datetime" type="datetime-local" />
			<label>Type : </label>

			<select class="input-fields" name="type">
				<option selected value="photo">Photography</option>
			</select>
			<label>Images link (if any) : </label>
			<ul>
				<li v-for="(image, index) in images" :key="image">
					<input class="input-fields" type="text" :name="'img' + index" id="" />
				</li>
			</ul>

			<button class="addButton" @click="addNewImage">+ Add image link</button>
		</div>
	</div>
</template>

<script lang="ts">
import LoginForm from "@/components/admin/AdminLoginForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
	components: { LoginForm },
	name: "AdminWindow",
	data() {
		return {
			validUser: false,
			images: Array<string>(),
		};
	},
	methods: {
		addNewImage() {
			this.images.push("");
		},
		userLoggedIn() {
			this.validUser = true;
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.main {
	width: var(--content-width);
	margin: auto;
}

label {
	text-align: left;
	justify-content: left;
}
.input-fields {
	display: block;
	margin: 10px auto;
	width: var(--content-width);
	height: 40px;
	padding: 5px;
	display: flex;
	justify-content: center;
	font-size: var(--text-font-size);
	border: 0.5px solid $button-color;
	border-radius: 5px;
	&:hover {
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.218);
		transition: all 0.3s;
	}
	&:focus-visible {
		outline: none;
	}
}
ul li {
	list-style: decimal;
}
.form {
	.addButton {
		padding: var(--button-padding);
		font-size: var(--text-font-size);
		border: 0.5px solid $button-color;
		background-color: white;
		color: $font-color;
		border-radius: 5px;
		box-shadow: var(--button-shadow);
		&:hover {
			background-color: $button-color;
			color: white;
		}
	}
}
</style>
