<template>
	<div class="hidden md:block w-60 h-full shadow-md bg-white fixed font-inter" id="sidenavSecExample">
		<!-- header -->
		<router-link to="/">
			<div class="my-2 flex justify-center gap-2">
				<img src="../assets/belalangBiru.png" alt="" class="w-[30px]" />
				<p class="text-xl font-inter font-black bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text tracking-widest">Belalang Biru</p>
			</div>
		</router-link>
		<hr />

		<!-- profile -->
		<div class="pt-4 pb-2 px-3">
			<div class="flex items-center justify-center">
				<div class="shrink-0">
					<img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10" alt="Avatar" />
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
			};
		},

		created() {
			this.userSelect();
			this.currentUser();
		},

		methods: {
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
				});
			},
		},
	};
</script>
<style></style>
