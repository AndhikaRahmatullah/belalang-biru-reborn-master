<template>
	<div class="min-h-screen bg-gray-50">
		<SideNav />
		<!-- register page -->
		<div class="ml-60 py-5 flex flex-col justify-center items-center font-inter">
			<!-- title  -->
			<div class="w-[1000px]">
				<p class="p-2 font-lora font-semibold text-5xl bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text tracking-wide w-fit">Daftar</p>
			</div>
			<!-- body  -->
			<div class="w-[1000px] mt-5">
				<!-- form create account -->
				<div class="flex flex-col justify-center items-center gap-3">
					<!-- username input -->
					<div class="form-floating w-full">
						<input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding bg-transparent border-b-[3px] border-solid border-gray-300 transition-all duration-300 m-0 focus:text-dika-1 focus:border-dika-1 outline-none focus:ring-0" id="floatingInput" placeholder="Username" v-model="usernameValue" />
						<label for="floatingInput" class="text-gray-700">Username</label>
					</div>
					<!-- password input -->
					<div class="form-floating w-full">
						<input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding bg-transparent border-b-[3px] border-solid border-gray-300 transition-all duration-300 m-0 focus:text-dika-1 focus:border-dika-1 outline-none focus:ring-0" id="floatingPassword" placeholder="Password" v-model="passwordValue" />
						<label for="floatingPassword" class="text-gray-700">Password</label>
					</div>
					<!-- button send -->
					<div class="mt-5">
						<button class="p-2 bg-dika-1 transition-all duration-300 text-white rounded-lg shadow-lg font-lora hover:bg-dika-3 active:shadow-none active:scale-95" @click="createAccount">Buat Akun</button>
					</div>
				</div>

				<!-- display db -->
				<div class="mb-5" v-for="data in userDatas" :key="data.id">
					<p class="">{{ data.id }}</p>
					<p class="">{{ data.username }}</p>
					<p class="">{{ data.password }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SideNav from "../components/SideNav.vue";
	import db from "../firebase/index.js";
	export default {
		data() {
			return {
				userDatas: [],
				usernameValue: "",
				passwordValue: "",
			};
		},

		components: {
			SideNav,
		},

		created() {
			document.title = `Daftar | Belalang Biru`;
			this.dbUsers();
		},

		mounted() {},

		updated() {
			// this.userDatas;
		},

		methods: {
			dbUsers() {
				db.database()
					.ref("users")
					.on("value", (users) => {
						users.forEach((item) => {
							let data = {
								id: item.key,
								username: item.val().username,
								password: item.val().password,
							};
							this.userDatas.push(data);
						});
					});
			},

			createAccount() {
				let username = this.usernameValue;
				let password = this.passwordValue;
				let statusName = false;

				if (!username || !password) {
					alert(`Mohon isi semua data yang dibutuhkan !`);
				} else {
					const userDatas = this.userDatas;
					// make array for looping in 'for of'
					let arr = [];
					userDatas.map((e) => {
						arr.push(e.username);
					});

					for (const x of arr) {
						// name not available
						if (this.usernameValue === x) {
							return alert(`Maaf, Username Telah Terdaftar`);
						}
						statusName = true;
					}

					// name available
					if (statusName) {
						this.userDatas = [];
						alert(`Berhasil Membuat Akun !`);
						return db.database().ref("users").push({
							username: username,
							password: password,
						});
					}
				}
			},
		},
	};
</script>
<style></style>
