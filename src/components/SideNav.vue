<template>
	<div class="w-60 h-full shadow-md bg-white fixed font-inter" id="sidenavSecExample">
		<!-- header -->
		<router-link to="/">
			<div class="my-2 flex justify-center gap-2">
				<img src="../assets/belalangBiru.png" alt="" class="w-[30px]" />
				<p class="text-xl font-cinzel font-bold bg-gradient-to-r from-dika-1 via-dika-3 to-dika-2 text-transparent bg-clip-text">Belalang Biru</p>
			</div>
		</router-link>
		<hr />

		<!-- profile -->
		<div class="pt-4 pb-2 px-3">
			<a href="#!">
				<div class="flex items-center justify-center">
					<div class="shrink-0">
						<img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10" alt="Avatar" />
					</div>
					<div class="grow ml-3">
						<p class="w-[200px] text-base font-lora font-bold italic text-dika-1 truncate">Andhika Rahmatullah</p>
					</div>
				</div>
			</a>
		</div>

		<!-- bar -->
		<ul class="mt-2 relative px-1 text-gray-600 tracking-wide font-inter">
			<!-- login -->
			<li class="relative">
				<router-link to="/login" class="flex items-center gap-2 text-sm py-4 px-3 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded-r hover:text-dika-1 hover:bg-blue-50 transition duration-300 ease-in-out border-l-2" data-mdb-ripple="true" data-mdb-ripple-color="primary" active-class="border-dika-1 text-dika-1 font-medium">
					<span>Masuk</span>
				</router-link>
			</li>
			<!-- register -->
			<li class="relative" id="sidenavSecEx2">
				<router-link to="/register" class="flex items-center gap-2 text-sm py-4 px-3 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded-r hover:text-dika-1 hover:bg-blue-50 transition duration-300 ease-in-out border-l-2" data-mdb-ripple="true" data-mdb-ripple-color="primary" active-class="border-dika-1 text-dika-1 font-medium">
					<span>Daftar</span>
				</router-link>
			</li>
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
		</ul>

		<!-- footer -->
		<div class="my-2 text-center bottom-0 absolute w-full font-inter font-light">
			<hr class="pb-2" />
			<a class="text-sm text-gray-600" href="#">www.belalangbiru.com</a>
		</div>
	</div>
</template>
<script>
	export default {};
</script>
<style></style>
