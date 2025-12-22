(function () {

    // Бургер-меню

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 1200) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Слайдер-категории

    new Swiper('.categories__slider', {

        spaceBetween: 20,
        slidesPerView: 1,

        pagination: {
            el: '.categories__pagination',
            type: 'bullets',
            clickable: true,
        },

        breakpoints: {

            1201: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
        }

    });


    // Слайдер-товари

    new Swiper('.products__slider', {

        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: '.products__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.products__next',
            prevEl: '.products__prev',
        },

        breakpoints: {

            551: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            901: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }

    });


    // Прихована теги - Секція Гарячі Пропозиції

    const showTagsBtns = document.querySelectorAll('.products__tags-button')

    showTagsBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const tagsList = btn.closest('.products__tags-inner')

            const tagsHiddenItems = tagsList.querySelectorAll('.products__tags-item--hidden')

            tagsHiddenItems.forEach((item) => {
                item.classList.remove('products__tags-item--hidden');
            })

            btn.style.display = 'none';
        })
    })


    // Кількість товару

    const numbers = document.querySelectorAll('.products__amount')
    const maxNumber = 4

    numbers.forEach(number => {
        const minusBtn = number.querySelector('.products__minus')
        const plusBtn = number.querySelector('.products__plus')
        const numberSpan = number.querySelector('.products__number')

        const updateBtnState = (currentNumber) => {
            numberSpan.textContent = currentNumber

            if (currentNumber <= 1) {
                minusBtn.classList.add('products__minus--no-active')
            } else {
                minusBtn.classList.remove('products__minus--no-active')
            }

            if (currentNumber >= maxNumber) {
                plusBtn.classList.add('products__plus--no-active')
            } else {
                plusBtn.classList.remove('products__plus--no-active')
            }
        }

        plusBtn.addEventListener('click', () => {
            let currentNumber = parseInt(numberSpan.textContent);

            if (currentNumber < maxNumber) {
                currentNumber++;
                updateBtnState(currentNumber);
            }
        });

        minusBtn.addEventListener('click', () => {
            let currentNumber = parseInt(numberSpan.textContent);

            if (currentNumber > 1) {
                currentNumber--
                updateBtnState(currentNumber)
            }
        });
    })


    // Приховані елементи

    const showMoreBtns = document.querySelectorAll('.show-more-btn')

    showMoreBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const parentSection = btn.closest('.container')
            const hiddenItems = parentSection.querySelectorAll('.item--hidden')
            const itemsToShow = 3

            if (hiddenItems.length <= itemsToShow) {
                btn.style.display = 'none';
            }

            for (let i = 0; i < itemsToShow; i++) {
                if (hiddenItems[i]) {
                    hiddenItems[i].classList.remove('item--hidden')
                }
            }
        })
    })


    // Прихована галерея відгуків

    const showGalleryBtns = document.querySelectorAll('.testimonials__content-button')

    showGalleryBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const testimonialGallery = btn.closest('.testimonials__content')

            const testimonialHiddenImages = testimonialGallery.querySelectorAll('.testimonials__content-img--hidden')

            testimonialHiddenImages.forEach((img) => {
                img.classList.remove('testimonials__content-img--hidden');
            })

            btn.style.display = 'none';
        })
    })


    // Акордеон-FAQ

    const accordionLists = document.querySelectorAll('.accordion__list')

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }

        })

    })

    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+38 (999) 999-99-99')
    im.mask(telInputs)

})()