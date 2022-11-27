<template>
	<div class="min-h-screen bg-gray-50">
		<SideNav />
		<SideNavPhone />

		<!-- home page -->
		<div class="md:ml-48 lg:ml-20 py-5 flex flex-col justify-center items-center font-inter">
			<!-- title  -->
			<div class="md:w-[450px] lg:w-[1000px]">
				<p class="p-2 text-2xl md:text-3xl lg:text-5xl font-lora font-semibold bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text w-fit tracking-wide">Beranda</p>
			</div>

			<!-- body -->
			<div class="px-5 md:px-0 md:w-[450px] lg:w-[1000px] mt-5">
				<!-- create new story -->
				<div class="flex flex-col justify-center items-end gap-5">
					<textarea
						name=""
						id=""
						class="w-full h-[150px] md:h-[200px] p-5 text-sm md:text-base lg:text-lg border-4 border-gray-400 rounded-lg resize-none outline-none shadow-md placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg"
						placeholder="Apa yang kamu pikirkan ?"
						v-model="createStoryValue"></textarea>

					<div class="">
						<button
							href="#created"
							class="py-2 px-4 text-xs md:text-sm lg:text-base rounded-lg text-white bg-dika-1 font-lora tracking-wider font-semibold transition-all duration-300 hover:bg-dika-3"
							@click="createStory">
							Buat Cerita
						</button>
					</div>
				</div>

				<!-- display all users story -->
				<div class="mt-20 flex flex-col-reverse gap-10">
					<div
						class=""
						v-for="data in datasAllStories"
						:key="data.timeCreate">
						<div class="p-5 bg-gray-500 rounded-lg shadow-lg border-2 border-gray-400">
							<!-- user datas -->
							<div class="pb-5 flex flex-col justify-between gap-2 items-center border-b-2 border-gray-400 border-dashed">
								<div class="flex flex-row gap-3 items-center">
									<img
										:src="data.avatar"
										alt=""
										class="w-[40px] lg:w-[50px] p-1 rounded-full border-2 border-white" />
									<p class="text-base md:text-lg lg:text-xl text-gray-50 font-lora tracking-wider font-medium">@{{ data.username }}</p>
								</div>
								<p class="text-xs md:text-sm lg:text-base text-gray-400 font-lora italic tracking-wide">{{ data.timeCreate }}</p>
							</div>

							<!-- user story -->
							<div class="pt-5 flex justify-start items-center gap-5">
								<p class="text-xs md:text-sm lg:text-base text-white text-justify font-light tracking-wide">{{ data.story }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SideNav from "../components/SideNav.vue";
	import SideNavPhone from "../components/SideNavPhone.vue";
	import db from "../firebase/index.js";
	import { getDatabase, ref, set, onValue, push } from "firebase/database";
	import { getAuth } from "firebase/auth";
	import { res } from "../utils/date.js";

	export default {
		data() {
			return {
				currentUserId: "",
				currentUsername: "",
				currentAvatar: "",
				createStoryValue: "",
				time: "",
				datasAllStories: [],
			};
		},

		components: {
			SideNav,
			SideNavPhone,
		},

		created() {
			document.title = `Beranda | Belalang Biru`;
			this.userSelect();
			this.currentUser();
			this.allStories();
		},

		mounted() {
			setInterval(() => {
				this.time = res();
			}, 500);
		},

		updated() {},

		methods: {
			createStory() {
				let story = this.createStoryValue;
				let user = this.currentUsername;
				let avatar = this.currentAvatar;
				const database = getDatabase(db);

				const postListRef = ref(database, "story-datas");
				const newPostRef = push(postListRef);
				set(newPostRef, {
					username: user,
					avatar: avatar,
					story: story,
					timeCreate: res(),
				});

				this.createStoryValue = "";
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

			// current user / username active
			currentUser() {
				const database = getDatabase(db);
				const starCountRef = ref(database, "users/" + this.currentUserId);
				onValue(starCountRef, (snapshot) => {
					const data = snapshot.val();
					this.currentAvatar = data.avatar;
					this.currentUsername = data.username;
				});
			},

			allStories() {
				this.datasAllStories = [];

				const database = getDatabase(db);
				const allDatasStories = ref(database, "story-datas");

				onValue(allDatasStories, (snapshot) => {
					const data = snapshot.val();
					this.datasAllStories = data;

					return this.datasAllStories;
				});
			},
		},
	};
</script>

<style></style>
