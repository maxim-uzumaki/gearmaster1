(function () {

    // Слайдер-категории

    new Swiper('.categories__slider', {

        spaceBetween: 20,
        slidesPerView: 1.1,

        pagination: {
            el: '.categories__pagination',
            type: 'bullets',
            clickable: true,
        },

        navigation: {
            nextEl: '.categories__next',
            prevEl: '.categories__prev',
        },

    });


    // Акордеон

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

})()