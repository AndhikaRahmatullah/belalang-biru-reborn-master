<template>
	<div class="flex flex-col justify-center items-center min-h-screen">
		<!-- body -->
		<div class="w-[800px] flex flex-col justify-center items-center gap-3 font-inter">
			<p class="text-6xl font-black text-center">Curahkan Isi Pikiranmu Bersama <span class="bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text">Belalang Biru</span></p>
			<p class="text-gray-500 font-light tracking-wide">Forum bercerita tentang apa saja dan kapan saja bersama teman baru.</p>
		</div>

		<!-- ruoter -->
		<div class="mt-10 flex flex-row justify-center items-center gap-4">
			<router-link to="/sigin" class="py-2 px-4 rounded-lg text-white bg-dika-1 font-lora tracking-wider font-semibold">Masuk</router-link>
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
