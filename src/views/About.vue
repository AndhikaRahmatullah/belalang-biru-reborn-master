<template>
	<div class="min-h-screen bg-gray-50">
		<SideNav />
		<SideNavPhone />

		<!-- about page -->
		<div class="md:ml-48 lg:ml-20 py-5 flex flex-col justify-center items-center">
			<!-- title  -->
			<div class="md:w-[450px] lg:w-[1000px]">
				<p class="p-2 text-2xl md:text-3xl lg:text-5xl font-lora font-semibold bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text w-fit tracking-wide">Tentang Kami</p>
			</div>

			<!-- body  -->
			<div class="md:w-[450px] lg:w-[1000px] mt-5">
				<div class="flex flex-col justify-center items-center gap-5">
					<p class="px-5 md:px-0 text-sm md:text-base lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, soluta. Autem pariatur vero error, molestias esse doloribus facilis eveniet laboriosam obcaecati voluptatem aliquam ratione, odit minima corrupti eum quae itaque vel. Voluptatum, ab. Labore architecto eveniet unde excepturi alias quibusdam officia molestias. Aut ipsa rerum dolorum, exercitationem a harum corporis!</p>

					<!-- logos -->
					<div class="flex flex-row items-center gap-5">
						<!-- instagram -->
						<a href="https://www.instagram.com/andhikarhmt_/" target="_blank" class="hidden lg:block">
							<div class="w-[100px] h-[50px] flex items-center justify-center" @mouseenter="instagramHover = true" @mouseleave="instagramHover = false">
								<img src="../assets/icon-instagram.gif" alt="" class="w-[50px]" v-show="!instagramHover" />
								<span v-show="instagramHover" class="lg:text-lg tracking-wider font-semibold text-dika-1 font-lora">Instagram</span>
							</div>
						</a>
						<!-- instagram phone -->
						<a href="https://www.instagram.com/andhikarhmt_/" target="_blank" class="lg:hidden">
							<img src="../assets/icon-instagram.gif" alt="" class="w-[40px] md:w-[45px]" />
						</a>

						<!-- github -->
						<a href="https://github.com/AndhikaRahmatullah" target="_blank" class="hidden lg:block">
							<div class="w-[100px] h-[50px] flex items-center justify-center" @mouseenter="githubHover = true" @mouseleave="githubHover = false">
								<img src="../assets/icon-github.gif" alt="" class="w-[50px]" v-show="!githubHover" />
								<span v-show="githubHover" class="lg:text-lg tracking-wider font-semibold text-dika-1 font-lora">Github</span>
							</div>
						</a>
						<!-- github phone -->
						<a href="https://github.com/AndhikaRahmatullah" target="_blank" class="lg:hidden">
							<img src="../assets/icon-github.gif" alt="" class="w-[40px] md:w-[45px]" />
						</a>

						<!-- linkedin -->
						<a href="https://www.linkedin.com/in/andhika-rahmatullah-2039b0157/" target="_blank" class="hidden lg:block">
							<div class="w-[100px] h-[50px] flex items-center justify-center" @mouseenter="linkedinHover = true" @mouseleave="linkedinHover = false">
								<img src="../assets/icon-linkedin.gif" alt="" class="w-[50px]" v-show="!linkedinHover" />
								<span v-show="linkedinHover" class="lg:text-lg tracking-wider font-semibold text-dika-1 font-lora">LinkedIn</span>
							</div>
						</a>
						<!-- linkedin phone -->
						<a href="https://www.linkedin.com/in/andhika-rahmatullah-2039b0157/" target="_blank" class="lg:hidden">
							<img src="../assets/icon-linkedin.gif" alt="" class="w-[40px] md:w-[45px]" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import SideNav from "../components/SideNav.vue";
	import SideNavPhone from "../components/SideNavPhone.vue";
	export default {
		data() {
			return {
				instagramHover: false,
				githubHover: false,
				linkedinHover: false,
			};
		},

		components: {
			SideNav,
			SideNavPhone,
		},

		created() {
			document.title = `Tentang Kami | Belalang Biru`;
		},
	};
</script>
<style></style>
