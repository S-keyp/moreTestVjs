<script setup lang="ts">
	import Navbar from './components/ui/Navbar.vue'
	import HardCTA from './components/ui/HardCTA.vue';
</script>

<template>
	<div class="main-homepage">
		<header>
			<div class="top-left-corner" style="display: none;">
				<svg width="85" height="103" viewBox="0 0 85 103" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M82.8333 41.6667C82.8333 47.284 80.2843 53.7117 76.3935 60.2332C72.5097 66.7431 67.3238 73.2894 62.1265 79.1304C56.9309 84.9695 51.7337 90.0929 47.8347 93.7571C45.8855 95.5889 44.2614 97.0553 43.1252 98.0633C42.5571 98.5673 42.111 98.9567 41.8073 99.2198C41.7564 99.2638 41.7095 99.3044 41.6667 99.3413C41.6239 99.3044 41.577 99.2638 41.5261 99.2198C41.2223 98.9567 40.7762 98.5673 40.2081 98.0633C39.0719 97.0553 37.4479 95.5889 35.4987 93.7571C31.5996 90.0929 26.4025 84.9695 21.2069 79.1304C16.0096 73.2894 10.8237 66.7431 6.9398 60.2332C3.04904 53.7117 0.5 47.284 0.5 41.6667C0.5 18.9309 18.9309 0.5 41.6667 0.5C64.4024 0.5 82.8333 18.9309 82.8333 41.6667Z" fill="#1E97BB" stroke="white"/>
					<g filter="url(#filter0_d_1_2123)">
						<path d="M78.3338 42.6388C78.3338 62.966 41.6672 94.1666 41.6672 94.1666C41.6672 94.1666 5.00049 62.966 5.00049 42.6388C5.00049 22.3117 21.4167 5.83325 41.6672 5.83325C61.9176 5.83325 78.3338 22.3117 78.3338 42.6388Z" fill="#E65026"/>
						<path d="M77.8338 42.6388C77.8338 47.5855 75.5969 53.2525 72.1748 59.0101C68.7596 64.7562 64.1987 70.5356 59.6263 75.6937C55.0557 80.8499 50.4835 85.3743 47.0532 88.6102C45.3384 90.2278 43.9097 91.5227 42.9102 92.4128C42.4104 92.8578 42.018 93.2016 41.7509 93.4339C41.7214 93.4595 41.6935 93.4837 41.6672 93.5066C41.6408 93.4837 41.6129 93.4595 41.5834 93.4339C41.3163 93.2016 40.9239 92.8578 40.4242 92.4128C39.4247 91.5227 37.9959 90.2278 36.2811 88.6102C32.8508 85.3743 28.2786 80.8499 23.708 75.6937C19.1357 70.5356 14.5747 64.7562 11.1595 59.0101C7.73743 53.2525 5.50049 47.5855 5.50049 42.6388C5.50049 22.586 21.6946 6.33325 41.6672 6.33325C61.6397 6.33325 77.8338 22.586 77.8338 42.6388Z" stroke="white"/>
					</g>
					<defs>
						<filter id="filter0_d_1_2123" x="3.00049" y="5.83325" width="81.3333" height="96.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dx="2" dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2123"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2123" result="shape"/>
						</filter>
					</defs>
				</svg>

				<p>
					43.610183 N 
					<br>
					3.885431 E
				</p>
			</div>

			<Navbar />

			<HardCTA href="/requestDemo" style="display: none;">
				Request Demo
			</HardCTA>
		</header>
	</div>

</template>

<style>
	@import url('https://fonts.cdnfonts.com/css/alegreya-sans');
	@import url('https://fonts.cdnfonts.com/css/almarai');
</style>

<style scoped>
	.main-homepage{
		width: 100vw;
		background: url('./assets/bg1.svg') center repeat;
		background-attachment: fixed;
	}
</style>
