<template>
	<div class="md:hidden">
		<div class="" v-show="navStatus">
			<img src="../assets/belalangBiru.png" alt="" class="w-[40px] p-1 fixed top-2 left-2 bg-gray-500 rounded-full shadow-md animate-pulse" @click="showNav" />
		</div>

		<Transition name="slide-fade">
			<div class="w-60 h-full shadow-2xl bg-white fixed font-inter" v-show="!navStatus">
				<!-- header -->
				<div class="my-2 flex justify-center gap-2" @click="showNav">
					<img src="../assets/belalangBiru.png" alt="" class="w-[30px] animate-pulse" />
					<p class="text-xl font-inter font-black bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text tracking-widest">Belalang Biru</p>
				</div>
				<hr />

				<!-- profile -->
				<div class="pt-4 pb-2 px-3">
					<div class="flex items-center justify-center">
						<div class="shrink-0">
							<img :src="currentAvatar" class="rounded-full w-10" alt="Avatar" />
						</div>
						<div class="grow ml-3">
							<p class="w-[100px] text-base font-lora font-bold text-dika-1 truncate tracking-wide">{{ currentUsername }}</p>
						</div>
					</div>
				</div>

				<!-- bar -->
				<ul class="mt-2 relative px-1 text-gray-600 tracking-wide font-inter">
					<!-- home -->
					<li class="relative" id="sidenavSecEx3">
						<router-link to="/home" class="flex items-center gap-2 text-sm py-4 px-3 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded-r hover:text-dika-1 hover:bg-blue-50 transition duration-300 ease-in-out border-l-2" data-mdb-ripple="true" data-mdb-ripple-color="primary" active-class="border-dika-1 text-dika-1 font-medium">
							<span>Beranda</span>
						</router-link>
					</li>

					<!-- about -->
					<li class="relative" id="sidenavSecEx3">
						<router-link to="/about" class="flex items-center gap-2 text-sm py-4 px-3 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded-r hover:text-dika-1 hover:bg-blue-50 transition duration-300 ease-in-out border-l-2" data-mdb-ripple="true" data-mdb-ripple-color="primary" active-class="border-dika-1 text-dika-1 font-medium">
							<span>Tentang Kami</span>
						</router-link>
					</li>

					<!-- signout -->
					<li class="relative" id="sidenavSecEx3">
						<router-link to="/sigin" class="flex items-center gap-2 text-sm py-4 px-3 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded-r hover:text-dika-1 hover:bg-blue-50 transition duration-300 ease-in-out border-l-2" data-mdb-ripple="true" data-mdb-ripple-color="primary" active-class="border-dika-1 text-dika-1 font-medium">
							<span>Keluar</span>
						</router-link>
					</li>
				</ul>

				<!-- footer -->
				<div class="my-2 text-center bottom-0 absolute w-full font-inter font-light">
					<hr class="pb-2" />
					<a class="text-sm text-gray-600" href="#">www.belalangbiru.com</a>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script>
	import db from "../firebase/index.js";
	import { getAuth } from "firebase/auth";
	import { getDatabase, ref, onValue } from "firebase/database";
	export default {
		name: "SideNav",

		data() {
			return {
				currentUserId: "",
				currentUsername: "",
				currentAvatar: "",
				navStatus: true,
			};
		},

		created() {
			this.userSelect();
			this.currentUser();
		},

		methods: {
			showNav() {
				if (this.navStatus) {
					this.navStatus = false;
				} else {
					this.navStatus = true;
				}
			},

			userSelect() {
				const auth = getAuth(db);
				const user = auth.currentUser;

				if (user) {
					this.currentUserId = user.uid;
				} else {
					// No user is signed in.
				}
			},

			// current user / user active
			currentUser() {
				const database = getDatabase(db);
				const starCountRef = ref(database, "users/" + this.currentUserId);
				onValue(starCountRef, (snapshot) => {
					const data = snapshot.val();
					this.currentUsername = data.username;
					this.currentAvatar = data.avatar;
				});
			},
		},
	};
</script>

<style>
	.slide-fade-enter-active {
		transition: all 0.8s ease-out;
	}

	.slide-fade-leave-active {
		transition: all 0.8s ease-in;
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateX(-500px);
		opacity: 0;
	}
</style>
