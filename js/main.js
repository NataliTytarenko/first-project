$(document).ready(function(){
	$('.header').height($(window).height());
})

$(".navbar a").click(function(){
	$("body,html").animate({
		scrollTop:$("#" + $(this).data('value')).offset().top
	},1000)
})

// Берем HTML элементы
const genForm = document.querySelector('.form-gen')
const res = document.querySelector('.result')

// Делаем действие на нажатие кнопки
genForm.addEventListener('submit', submitBtn)

// Функция отправки
function submitBtn(e) {
	
	// Отменяем перезагрузку страницы
	e.preventDefault()

	// Берем значение из формы (то какие числа там написаны)
    const formElems = e.currentTarget.elements

    // Первое число
    const min = formElems.one.value

    // Второе число
    const max = formElems.two.value

    // Делаем рандомное число
    const rand = Math.floor(Math.random() * (max - min + 1)) + Number(min)

    // Показываем это число на нашей HTML разметке
    res.textContent = rand
}