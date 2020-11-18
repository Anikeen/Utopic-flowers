function AnknCarousel(options){
  const carousel = document.querySelector(options.target)  // get target node for carousel
  
  if (carousel){
    carousel.classList.add('ankn-carousel')

    let stage = document.createElement('div')     // create stage for carousel
    stage.className = 'ankn-carousel__stage'
    
    let stageWidth  = carousel.offsetWidth * carousel.children.length // calculate stage width
    stage.setAttribute('style', 'width: ' + stageWidth + 'px; transform: translateX(0);')       // set stage width
    
    let slides = carousel.children                // get slides for replace them to stage   
    const slidesQuantity = slides.length

    for (let i = 0; i < slidesQuantity; i++){     // replace slide to stage
      slides[0].setAttribute('style', `width: ${carousel.offsetWidth}px`) // set slide width
      stage.append(slides[0])
    }
    
    carousel.append(stage)                        // append stage to carousel  
    
    if (options.nav){
      let arrowNav = document.createElement('div')       // create arrow navigation container
      arrowNav.className = 'ankn-carousel__arrow-nav'

      let prevArrow = document.createElement('button')   // create previous button
      prevArrow.className = 'ankn-carousel__prev-arrow'

      prevArrow.addEventListener('click', () => {   // add a slide change by clicking on the "previous" button
        let currentPosition = parseInt(stage.style.transform.replace(/[^\d.]/g, '')) // get current position
        if (currentPosition){                           // change slide only if is not origin position
          let transform = -currentPosition + carousel.offsetWidth
          stage.setAttribute('style', `width: ${stageWidth}px; transform: translateX(${transform}px)`)
          if (options.dotsNav){
            activatePreviousDot()
          }
        }
      })

      let nextArrow = document.createElement('button')  // create next button
      nextArrow.className = 'ankn-carousel__next-arrow'

      nextArrow.addEventListener('click', () => {   // add a slide change by clicking on the "next" button
        let currentPosition = parseInt(stage.style.transform.replace(/[^\d.]/g, '')) // get current position
        if (-currentPosition > -(carousel.offsetWidth * (slidesQuantity - 1))){      // change slide only if is not origin position
          let transform = -currentPosition - carousel.offsetWidth
          stage.setAttribute('style', `width: ${stageWidth}px; transform: translateX(${transform}px)`)
          if (options.dotsNav){
            activateNextDot()
          }
        }
      })

      arrowNav.append(prevArrow)                        // add navigation to carousel
      arrowNav.append(nextArrow)
      carousel.append(arrowNav)
    }

    if (options.dotsNav){                               // add dots navigation if enabled
      let navDots = document.createElement('div')       // create dots container
      navDots.className = 'ankn-carousel__nav-dots'

      for (i = 0; i < slidesQuantity; i++){                     // loop for creating and adding dots 
        let dot = document.createElement('button')      // create dot
        dot.className = 'ankn-carousel__dot'
        dot.setAttribute('data-id', i + 1)              // set dot number
        if (i == 0){                                    
          dot.classList.add('active')                   // make the first dot active
        }

        dot.addEventListener('click', function(){       // add a slide change by clicking on the button
          let multiplier = this.dataset.id              // get multiplier for stage offset
          
          if (multiplier == 1){                         // stage position control
            stage.setAttribute('style', `width: ${stageWidth}px; transform: translateX(0)`)
            activateSpecificDot(this)          
          } else {
            let transform = -(carousel.offsetWidth * (multiplier - 1))
            stage.setAttribute('style', `width: ${stageWidth}px; transform: translateX(${transform}px)`)
            activateSpecificDot(this)
          }
        })
        navDots.append(dot)                             // add dot ot container 
      }
      carousel.append(navDots)                          // append dots navigation to carousel
    }

    function activateSpecificDot(elem){  // to highlight the active navigation dot
      let active = document.querySelector('.ankn-carousel__dot.active')
      active.classList.remove('active')
      elem.classList.add('active')
    }

    function activateNextDot(){  // to highlight the active navigation dot
      let active = document.querySelector('.ankn-carousel__dot.active')
      active.classList.remove('active')
      active.nextSibling.classList.add('active')
    }

    function activatePreviousDot(){  // to highlight the active navigation dot
      let active = document.querySelector('.ankn-carousel__dot.active')
      active.classList.remove('active')
      active.previousSibling.classList.add('active')
    }
  }
}

AnknCarousel({
  target: '.carousel',
  nav: true,
  dotsNav: true
})