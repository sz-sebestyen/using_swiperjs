function _load() {
	const root = document.getElementById("root");

	root.insertAdjacentHTML("beforeend", `
		<!-- Slider main container -->
		<div class="swiper-container">

			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->

			</div>

			<!-- If we need pagination -->
			<div class="swiper-pagination"></div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<!-- If we need scrollbar -->
			<!-- <div class="swiper-scrollbar"></div> -->
		</div>
	`);

	const swrapper = document.querySelector(".swiper-wrapper");


	for (let index = 0; index < 10; index++) {
		swrapper.insertAdjacentHTML("beforeend", `
			<div class="swiper-slide"> <img src="https://picsum.photos/1200?random=${index+1}" alt="random picture"> </div>
		`);
	}

	const mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		//direction: 'vertical',
		direction: 'horizontal',
		loop: false,

		// custom
		speed : 800,
		mousewheel : true,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		// And if we need scrollbar
/* 		scrollbar: {
			el: '.swiper-scrollbar',
		}, */
	})
}

window.addEventListener("load", _load);
