<template>
	<div class="flex flex-col justify-center items-center min-h-screen">
		<!-- body -->
		<div class="w-[300px] md:w-[500px] lg:w-[800px] flex flex-col justify-center items-center gap-3 font-inter">
			<p class="text-2xl md:text-4xl lg:text-6xl font-black text-center">Curahkan Isi Pikiranmu Bersama <span class="bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text">Belalang Biru</span></p>
			<p class="text-xs md:text-sm lg:text-base text-gray-500 font-light tracking-wide text-center">Forum bercerita tentang apa saja dan kapan saja bersama teman baru.</p>
		</div>

		<!-- ruoter -->
		<div class="mt-10 flex flex-row justify-center items-center gap-4">
			<router-link to="/sigin" class="py-2 px-4 text-xs md:text-sm lg:text-base rounded-lg text-white bg-dika-1 font-lora tracking-wider font-semibold transition-all duration-300 hover:bg-dika-3">Masuk</router-link>
			<ModalAuthRegister />
		</div>
	</div>
</template>

<script>
	import ModalAuthRegister from "../components/ModalAuthRegister.vue";
	export default {
		components: {
			ModalAuthRegister,
		},
		created() {
			document.title = `Belalang Biru`;
		},
	};
</script>
<style></style>
