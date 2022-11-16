<template>
	<div class="flex flex-col justify-center items-center min-h-screen">
		<!-- body -->
		<div class="w-[800px] flex flex-col justify-center items-center gap-3 font-inter">
			<p class="text-6xl font-black text-center">Curahkan Isi Pikiranmu Bersama <span class="bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text">Belalang Biru</span></p>
			<p class="text-gray-500 font-light tracking-wide">Forum bercerita tentang apa saja dan kapan saja bersama teman baru.</p>
		</div>

		<!-- ruoter -->
		<div class="mt-10 flex flex-row justify-center items-center gap-4 font-inter font-semibold">
			<router-link to="/login" class="p-2 rounded-lg text-white bg-dika-1">Masuk</router-link>
			<router-link to="/register" class="p-2 rounded-lg text-white bg-dika-1">Daftar</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		created() {
			document.title = `Belalang Biru`;
		},
	};
</script>
<style></style>
