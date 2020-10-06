$(document).ready(function(){

	$('.header__menu__mobile').on('click', function(event) {
		event.preventDefault();
		var active = $('.header__items__burger').toggleClass('active');
		var active = $('.header__items').toggleClass('active');
		var active = $('.header__menu__mobile').toggleClass('active');
		console.log(active);
	});

	let position = 0;
	const slidesToShow = 1;
	const slidesToScroll = 1;

	const container = $('.slider__container');
	const track = $('.slider__track');
	const item = $('.slider__item');

	const btnPrew = $('.btn__prew');
	const btnNext = $('.btn__next');

	const itemWidth = container.width() / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;
	const itemCount = item.length;

	item.each(function(index, item){
		$(item).css({
			minWidth: itemWidth,
		});
	});


	btnNext.click(function(){
		const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});


	btnPrew.click(function(){
		const itemsLeft = Math.abs(position) / itemWidth;
		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
		setPosition();
		checkBtns();
	});

	const setPosition = () => {
		track.css({
			transform: `translateX(${position}px)`
		});
	};

	const checkBtns = () => {
		btnPrew.prop('disabled', position === 0);
		btnNext.prop('disabled',
			position <= -(itemCount - slidesToShow) * itemWidth
		);
	};

	checkBtns();

});