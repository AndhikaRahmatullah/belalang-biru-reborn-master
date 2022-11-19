<template>
	<div>
		<!-- Button trigger modal -->
		<button type="button" class="py-2 px-4 text-xs md:text-sm lg:text-base rounded-lg text-white bg-dika-1 font-lora tracking-wider font-semibold transition-all duration-300 hover:bg-dika-3" data-bs-toggle="modal" data-bs-target="#staticBackdropRegister">Daftar</button>

		<!-- Modal -->
		<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto font-lora" id="staticBackdropRegister" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropRegisterLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl relative w-auto pointer-events-none">
				<div class="modal-content border-none shadow-lg relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
					<!-- modal header -->
					<div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
						<p class="text-xl font-semibold leading-normal text-gray-800" id="exampleModalLabel">Daftar</p>
						<button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" @click="close"></button>
					</div>

					<!-- modal body -->
					<div class="modal-body relative p-4">
						<!-- form create account -->
						<div class="flex flex-col justify-center items-start gap-3" v-if="createStatus">
							<!-- username input -->
							<div class="form-floating w-full">
								<input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding bg-transparent border-b-[3px] border-solid border-gray-300 transition-all duration-300 m-0 focus:text-dika-1 focus:border-dika-1 outline-none focus:ring-0" id="floatingInput" placeholder="Username" v-model="usernameValue" />
								<label for="floatingInput" class="text-gray-700">Username</label>
							</div>

							<!-- email input -->
							<div class="form-floating w-full">
								<input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding bg-transparent border-b-[3px] border-solid border-gray-300 transition-all duration-300 m-0 focus:text-dika-1 focus:border-dika-1 outline-none focus:ring-0" id="floatingInput" placeholder="Email" v-model="emailValue" />
								<label for="floatingInput" class="text-gray-700">Email</label>
							</div>

							<!-- password input -->
							<div class="form-floating w-full">
								<input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding bg-transparent border-b-[3px] border-solid border-gray-300 transition-all duration-300 m-0 focus:text-dika-1 focus:border-dika-1 outline-none focus:ring-0" id="floatingPassword" placeholder="Password" v-model="passwordValue" />
								<label for="floatingPassword" class="text-gray-700">Password</label>
							</div>

							<!-- description -->
							<div class="ml-5 mt-5 text-red-500 tracking-wide flex flex-col gap-2 lg:gap-0">
								<p class="">Catatan :</p>
								<div class="flex flex-row gap-2">
									<p class="">-</p>
									<p class="leading-tight">Tidak perlu menggunakan Email asli Kamu. Namun perhatikan penulisan Email yang valid. Contoh (example@gmail.com).</p>
								</div>
								<div class="flex flex-row gap-2">
									<p class="">-</p>
									<p class="">Password minimal terdiri dari 6 karakter atau digit.</p>
								</div>
							</div>
						</div>

						<!-- create account success -->
						<div class="font-medium" v-else>Pendaftaran akun berhasil, silahkan masuk !</div>
					</div>

					<!-- button -->
					<div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md gap-4">
						<!-- close -->
						<button type="button" class="py-2 px-4 bg-dika-1 transition-all duration-300 text-white rounded-lg shadow-lg font-lora hover:bg-dika-3 active:shadow-none active:scale-95" data-bs-dismiss="modal" @click="close">Keluar</button>
						<!-- create -->
						<button class="py-2 px-4 bg-dika-1 transition-all duration-300 text-white rounded-lg shadow-lg font-lora hover:bg-dika-3 active:shadow-none active:scale-95" @click="createAccount" v-if="createStatus">Buat Akun</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import db from "../firebase/index.js";
	import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
	import { getDatabase, ref, set } from "firebase/database";
	export default {
		name: "ModalAuthRegister",
		data() {
			return {
				usernameValue: "",
				emailValue: "",
				passwordValue: "",
				createStatus: true,
			};
		},

		created() {},

		mounted() {},

		updated() {},

		methods: {
			createAccount() {
				let username = this.usernameValue;
				let email = this.emailValue;
				let password = this.passwordValue;

				// create account
				const auth = getAuth(db);
				const database = getDatabase(db);

				if (!username || !email || !password) {
					alert(`Mohon isi semua formulir yang tersedia !`);
				} else {
					createUserWithEmailAndPassword(auth, email, password)
						.then((userCredential) => {
							// Signed in
							const user = userCredential.user;
							set(ref(database, "users/" + user.uid), {
								username: username,
								email: email,
								password: password,
							});
						})
						.then(() => {
							this.createStatus = false;
							alert(`Berhasil Membuat Akun !`);
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;

							if (errorMessage === `Firebase: Error (auth/email-already-in-use).`) {
								alert(`Email telah terdaftar, mohon gunakan Email lain !`);
							} else if (errorMessage === `Firebase: Error (auth/invalid-email).`) {
								alert(`Mohon masukan email yang valid !`);
							} else if (errorMessage === `Firebase: Password should be at least 6 characters (auth/weak-password).`) {
								alert(`Password minimal terdiri dari 6 karakter/digit !`);
							}
						});
				}
			},

			close() {
				this.createStatus = true;
				this.usernameValue = "";
				this.passwordValue = "";
				this.emailValue = "";
			},
		},
	};
</script>
<style></style>
