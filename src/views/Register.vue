<template>
	<div class="min-h-screen bg-gray-50">
		<SideNav />
		<!-- register page -->
		<div class="ml-60 py-5 flex flex-col justify-center items-center">
			<!-- title  -->
			<div class="w-[1000px]">
				<p class="p-2 font-lora font-semibold text-5xl bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text tracking-wide w-fit">Daftar</p>
			</div>
			<!-- body  -->
			<div class="w-[1000px] mt-5">
				<div class=""></div>
			</div>
		</div>
	</div>
</template>

<script>
	import SideNav from "../components/SideNav.vue";
	export default {
		data() {
			return {
				sasa: "belalangBiru.png",
			};
		},

		components: {
			SideNav,
		},

		created() {
			document.title = `Masuk | Belalang Biru`;
		},

		methods: {},
	};
</script>
<style></style>
