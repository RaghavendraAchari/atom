<template>
	<div class="main">
		<form class="form" @submit.prevent="submit($event)">
			<label>Username : </label>
			<input class="input-fields" name="uname" type="text" />
			<label>Password : </label>
			<input class="input-fields" name="pass" type="password" />

			<button type="submit" class="addButton" value="">Log In</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "LoginForm",
	methods: {
		submit(event) {
			console.log(event);

			fetch("http://localhost:5000/api/admin/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					uname: event.target.uname.value,
					pass: event.target.pass.value,
				}),
			})
				.then((res) => {
					if (res.ok) {
						this.$emit("userLoggedIn");
					}
				})
				.catch((err) => {
					alert("Login Failed " + err);
				});
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";

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
