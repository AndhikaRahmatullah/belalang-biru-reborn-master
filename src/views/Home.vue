<template>
	<div class="min-h-screen bg-gray-50">
		<SideNav />
		<!-- home page -->
		<div class="ml-60 py-5 flex flex-col justify-center items-center">
			<!-- title  -->
			<div class="w-[1000px]">
				<p class="p-2 font-lora font-semibold text-5xl bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text tracking-wide w-fit">Beranda</p>
			</div>
			<!-- body  -->
			<div class="w-[1000px] mt-5">
				<div class="flex flex-col justify-center items-start">
					<p class="">Selamat datang di Belalang Biru</p>
					<p>Silahkan <router-link to="/sigin" class="underline">login</router-link> untuk menyampaikan keluh kesah mu !</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SideNav from "../components/SideNav.vue";

	export default {
		components: {
			SideNav,
		},

		created() {
			document.title = `Beranda | Belalang Biru`;
		},
	};
</script>

<style></style>
