// getting buttons
const btn = {
    prev: document.getElementById('prev'),
    stop: document.getElementById('stop'),
    count: document.getElementById('count'),
    next: document.getElementById('next')
}

// getting slides
const img = document.querySelectorAll('.item')

// interval between slides
let interval = 5000

// first slide is active
img[0].classList.add('active')

let counter = 0

let infinity = true

// auto slider animation function
function infinitySlider() {
    setTimeout(() => {
        if (!infinity) {
            return
        }
        img[counter].classList.remove('active')
        if (counter + 1 == img.length) {
            counter = 0
        } else {
            counter++
        }
        img[counter].classList.add('active')
        setTimeout(infinitySlider(), interval);
    }, interval)
}

infinitySlider()

// stop function of the slider
function stopSlider() {
    btn.stop.style.display = 'none'
    btn.count.innerText = `${counter + 1}/${img.length}`
    btn.count.style.display = 'block'
}

// prev button
btn.prev.addEventListener('click', () => {
    infinity = false
    if (counter == 0) {
        img[counter].classList.remove('active')
        counter = img.length - 1
        img[counter].classList.add('active')
    } else {
        img[counter].classList.remove('active')
        counter--
        img[counter].classList.add('active')
    }
    stopSlider()
})

// next button
btn.next.addEventListener('click', () => {
    infinity = false
    if (counter == img.length - 1) {
        img[counter].classList.remove('active')
        counter = 0
        img[counter].classList.add('active')
    } else {
        img[counter].classList.remove('active')
        counter++
        img[counter].classList.add('active')
    }
    stopSlider()
})

// stop button
btn.stop.addEventListener('click', () => {
    infinity = false
    stopSlider()
})