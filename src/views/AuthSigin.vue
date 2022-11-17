<template>
	<div class="min-h-screen flex justify-center items-center">
		<!-- login page -->
		<div class="w-[1200px]">
			<!-- form -->
			<div class="mt-5 p-2 flex flex-row justify-center items-center border-2 border-gray-500">
				<div class="basis-1/2">
					<img src="../assets/doodleLogin.png" alt="" class="" />
				</div>

				<div class="basis-1/2">
					<!-- form -->
					<div class="flex flex-col justify-center items-center gap-3 font-lora">
						<!-- login status true -->
						<div class="w-full" v-if="loginStatus">
							<!-- email input -->
							<div class="form-floating w-full">
								<input type="email" class="form-control text-xl block w-full px-3 py-1.5 font-normal bg-clip-padding bg-transparent border-b-[3px] border-solid border-gray-300 transition-all duration-300 m-0 focus:text-dika-3 focus:border-dika-3 outline-none focus:ring-0" id="floatingInput" placeholder="Email" v-model="emailValueLogin" />
								<label for="floatingInput" class="text-gray-700 font-medium tracking-wide">Email</label>
							</div>

							<!-- password input -->
							<div class="form-floating w-full">
								<input type="password" class="form-control text-xl block w-full px-3 py-1.5 font-normal bg-clip-padding bg-transparent border-b-[3px] border-solid border-gray-300 transition-all duration-300 m-0 focus:text-dika-3 focus:border-dika-3 outline-none focus:ring-0" id="floatingPassword" placeholder="Password" v-model="passwordValueLogin" />
								<label for="floatingPassword" class="text-gray-700 font-medium tracking-wide">Password</label>
							</div>
						</div>

						<!-- login status false -->
						<div class="" v-else>
							<p class="">Selamat Datang di Belalang Biru, Kawan !</p>
						</div>

						<!-- button -->
						<div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md gap-4">
							<!-- close -->
							<router-link to="/" type="button" class="py-2 px-4 bg-dika-3 transition-all duration-300 text-white rounded-lg shadow-lg font-lora hover:bg-dika-1 active:shadow-none active:scale-95" @click="close">Kembali</router-link>
							<!-- login -->
							<button class="py-2 px-4 bg-dika-3 transition-all duration-300 text-white rounded-lg shadow-lg font-lora hover:bg-dika-1 active:shadow-none active:scale-95" @click="login" v-if="loginStatus">Masuk</button>
							<!-- beranda -->
							<router-link to="/home" class="py-2 px-4 bg-dika-3 transition-all duration-300 text-white rounded-lg shadow-lg font-lora hover:bg-dika-1 active:shadow-none active:scale-95" v-if="!loginStatus">Beranda</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import db from "../firebase/index.js";
	import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

	export default {
		name: "Sigin",

		data() {
			return {
				emailValueLogin: "",
				passwordValueLogin: "",
				loginStatus: true,
			};
		},

		created() {
			document.title = `Masuk | Belalang Biru`;
			// this.userSelect();
		},

		mounted() {},

		updated() {},

		methods: {
			login() {
				const auth = getAuth(db);
				let email = this.emailValueLogin;
				let password = this.passwordValueLogin;

				signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed in
						const user = userCredential.user;
					})
					.then(() => {
						alert(`Masuk berhasil !`);
						this.loginStatus = false;
					})
					.catch((error) => {
						const errorMessage = error.message;
						if (errorMessage === `Firebase: Error (auth/invalid-email).`) {
							alert(`Email Tidak Valid`);
						} else if (errorMessage === `Firebase: Error (auth/wrong-password).`) {
							alert(`Password Salah`);
						}
					});
			},

			close() {
				this.loginStatus = true;
				this.currentUsername = "";
			},
		},
	};
</script>
<style></style>
