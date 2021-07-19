import "./index.scss";

const tarifNavigationListItems = document.querySelectorAll('.tarif__navigation-list-item');
const tarifCardItems = document.querySelectorAll('.tarif__card-item');

const vozmognosti = document.querySelectorAll(".vozmognosti__info-navigation-list-item");
const vozmognostiTabs = document.querySelectorAll('.voz__tabs');

const popupSelectButton = document.querySelector('.popup__input_arrowdown');
const popupSelectList = document.querySelector('.popup__input-list');
const popupInputSelect = document.querySelectorAll('.popup__input_select');
const popupButtonClose = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const buttonFree = document.querySelectorAll('.button__free');
const popupBurger = document.querySelector('.popup-burger');
const popupBurgerButtonClose = document.querySelector('.popup-burger__button-close');
const popupBurgerButtonOpen = document.querySelector('.header__list-item-buttons-mobil');
const header = document.querySelector('.header');

const automationArrowLeft = document.querySelector('.automation__slider-navigation-arrow-left');
const automationArrowRight = document.querySelector('.automation__slider-navigation-arrow-right');
const automationSlide = document.querySelectorAll('.automation__slider-slide');

automationArrowLeft.addEventListener('click', () => handleClickAutomationArrow('left'));
automationArrowRight.addEventListener('click', () => handleClickAutomationArrow('right'));

const searchActiveElement = (arrow) => {
    let next = {};
    automationSlide.forEach((item) => {
        if(item.classList.contains('automation__slider-slide_active')) {
            if(arrow === 'left') {
                next = item.closest('.automation__slider-slide').previousElementSibling;
            } else {
                next = item.closest('.automation__slider-slide').nextElementSibling;
            }
        }
    });
    return next;
}

const handleClickAutomationArrow = (arrow) => {
    const element = searchActiveElement(arrow);
    handleClickSlider(element);
}

const deleteClassActiveSliders = () => {
    automationSlide.forEach(item => {
        item.classList.remove('automation__slider-slide_active');
        item.querySelector('.automation__slider-slide-description').classList.remove('automation__slider-slide-description_active');
    })
}

const handleClickSlider = (slideNext) => {
    if(slideNext) {
        deleteClassActiveSliders();
        slideNext.classList.add('automation__slider-slide_active');
        const automationSlideDescription = slideNext.querySelector(`.automation__slider-slide-description`);
        automationSlideDescription.classList.add('automation__slider-slide-description_active');
    }
}



popupBurgerButtonOpen.addEventListener('click', () => {
    header.classList.add('header_close');
    popupBurger.classList.add('popup-burger_opened');
});
popupBurgerButtonClose.addEventListener('click', () => {
    header.classList.remove('header_close');
    popupBurger.classList.remove('popup-burger_opened')
});


buttonFree.forEach(item => item.addEventListener('click', () => popup.classList.add('popup_opened')));

popupButtonClose.addEventListener('click', () => popup.classList.remove('popup_opened'));

popupSelectButton.addEventListener('click', () => {
    popupSelectList.classList.toggle('popup__input-list_opened');
})

popupInputSelect.forEach(item => {
    item.addEventListener('click', () => handleSelectClick(item));
});

const handleSelectClick = (item) => {
    popupSelectButton.textContent = item.textContent;
    popupSelectList.classList.remove('popup__input-list_opened');
}
window.onload = function() {
    const functionTitleBlock = document.querySelector('.function__title-block');
    const functionWrapperItems = document.querySelectorAll('.function__slider-wrapper-item')
    const arrowLeft = functionTitleBlock.querySelector('.navigation-arrow__button-left');
    const arrowRight = functionTitleBlock.querySelector('.navigation-arrow__button-right');
    const sliderItemsImages = document.querySelectorAll('.function__slider-wrapper-item-image');
    const sliderItemsDescription = document.querySelectorAll('.function__tabs');


    // Function section
    const func = document.querySelector('.function');
    const slickNext = func.querySelector('.slick-next');
    const slickPrev = func.querySelector('.slick-prev');
    const sliderItems = func.querySelectorAll('.slider__item');
    const sliderInfo = func.querySelector('.function__slider-info');
    
    
    // Update section
    const update = document.querySelector('.update');
    const slickNextUpdate = update.querySelector('.slick-next');
    const slickPrevUpdate = update.querySelector('.slick-prev');
    const arrowLeftUpdate = update.querySelector('.navigation-arrow__button-left');
    const arrowRightUpdate = update.querySelector('.navigation-arrow__button-right');
    
    const clientsTitleBlock = document.querySelector('.clients__title-block');
    const clientsBlock = document.querySelector('.clients__sections-organization-counter');
    const arrowLeftclientsBlock = clientsTitleBlock.querySelector('.navigation-arrow__button-left');
    const arrowRightclientsBlock = clientsTitleBlock.querySelector('.navigation-arrow__button-right');
    const slickNextclientsBlock = clientsBlock.querySelector('.slick-next');
    const slickPrevclientsBlock = clientsBlock.querySelector('.slick-prev');
    arrowLeftclientsBlock.addEventListener('click', () => slickNextclientsBlock.click());
    arrowRightclientsBlock.addEventListener('click', () => slickPrevclientsBlock.click());

    arrowLeftUpdate.addEventListener('click', () => slickNextUpdate.click());
    arrowRightUpdate.addEventListener('click', () => slickPrevUpdate.click());

    sliderItems.forEach(item => item.addEventListener('click', () => searchSliderForClick(item)));
    slickNext.addEventListener('click', () => handleClickRightButton());
    slickPrev.addEventListener('click', () => handleClickRightButton());
    arrowRight.addEventListener('click', () => slickNext.click());
    arrowLeft.addEventListener('click', () => slickPrev.click());

    const removeActiveClass = () => {
        sliderItemsImages.forEach(item => {
            item.classList.remove('slider__item_active');
        })

        functionWrapperItems.forEach(item => {
            item.classList.remove('slick-current', 'slick-center');
        })

        sliderItemsDescription.forEach(item => {
            item.classList.remove('function__tabs_active');
        })
    }
    const searchSliderForClick = (item) => {
        removeActiveClass();
        item.classList.add('slick-current', 'slick-center');
        item.querySelector('.function__slider-wrapper-item-image').classList.add('slider__item_active');
        const sliderItemsDescription = sliderInfo.querySelector(`.${item.dataset.value}`);
        sliderItemsDescription.classList.add('function__tabs_active');  
    }

    const handleClickRightButton = () => {
        functionWrapperItems.forEach(item => {
            if(item.classList.contains('slick-current')) {
                searchSliderForClick(item);
            }
        });
    }
    handleClickRightButton();
}

// //-----------------------------------------------------------------------
const time = 900000;
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
//-----------------------counter
function ounNum(num) {
    let step = getRandom(1, 10);
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let num3 = document.querySelector('#num3');
    let num4 = document.querySelector('#num4');
    let n = 4570;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        let step = getRandom(1, 10);
        n = n + step;
        if (n > 9970) {
            clearInterval(interval);

            
        }
        let digits = n.toString().split('');
        num1.textContent = digits[0];
        num2.textContent = digits[1];
        num3.textContent = digits[2];
        num4.textContent = digits[3];
    },
        t);
}

ounNum(9999);
//-----------------------------------------------------------------------
vozmognosti.forEach(item => item.addEventListener("click", () => headerClick(item)));
function headerClick(item) {
    vozmognostiTabs.forEach(tab => {
        tab.classList.remove('vozmognosti__info-description_active');})
        document.querySelector(`.${item.id}`).classList.add('vozmognosti__info-description_active');
}
//-----------------------------------------------------------------------
const deleteClassActiveTarifCard = () => {
    tarifCardItems.forEach(item => {
        item.classList.remove('tarif__card-item_active');
        item.querySelector('.tarif__card-item-name').classList.remove('tarif__card-item-name_active');
        item.querySelector('.font__card-price').classList.remove('tarif__card-item-price_active');
        item.querySelector('.font__card-price-description').classList.remove('tarif__card-item-price_active');
        item.querySelector('.tarif__card-item-line').classList.remove('tarif__card-item-line_active');
        item.querySelector('.tarif__card-description_bottom').classList.remove('tarif__card-description', 'tarif__card-description_active');
    });
}

const handleClickTarifCard = (item) => {
    deleteClassActiveTarifCard();
    item.classList.add('tarif__card-item_active');
    item.querySelector('.tarif__card-item-name').classList.add('tarif__card-item-name_active');
    item.querySelector('.font__card-price').classList.add('tarif__card-item-price_active');
    item.querySelector('.font__card-price-description').classList.add('tarif__card-item-price_active');
    item.querySelector('.tarif__card-item-line').classList.add('tarif__card-item-line_active');
    item.querySelector('.tarif__card-description_bottom').classList.add('tarif__card-description', 'tarif__card-description_active');
}

tarifCardItems.forEach(item => item.addEventListener('click', () => handleClickTarifCard(item)));
const deleteClassActiveButtonTarif = () => tarifNavigationListItems.forEach(item => item.classList.remove('tarif__navigation-list-item_active'));

const handleClickButtonTarif = (item) => {
    deleteClassActiveButtonTarif();
    const tarifPrice = document.querySelectorAll('.tarif__card-item-price_calc');
    tarifPrice.forEach(price => {
        price.textContent = (price.dataset.price * item.dataset.month) - ((price.dataset.price * item.dataset.month) / 100 ) * item.dataset.skidka;
    })   
    item.classList.add('tarif__navigation-list-item_active');
}

tarifNavigationListItems.forEach(item => item.addEventListener('click', () => handleClickButtonTarif(item)));
//-----------------------------------------------------------------------

$(document).ready(function() {
    $('.question-answer__list-item-section').click(function(event) {
        $(this).toggleClass('question-answer__list-item-section_active').next().slideToggle(300);
    });
});

$(document).ready(function() {
    $('.crm__down').click(function(event) {
        $(this).toggleClass('crm__down_active').next().slideToggle(300);
    });
});

$('.function__slider-wrapper').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 8,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          centerPadding: '40px',
          slidesToShow: 7
        }
      },
      {
        breakpoint: 954,
        settings: {
          centerPadding: '40px',
          slidesToShow: 6
        }
      },
      {
        breakpoint: 870,
        settings: {
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 500,
        settings: {
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 360,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  });

  $('.update__list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 920,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.clients__sections-organization-counter').slick({
    arrow: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
            
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 920,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  });

  $('.reviews__block-review').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 1,
  });


  const screenWidth = window.screen.width;
  if(screenWidth < 500) {
    $('.tarif__card').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
      });
  }