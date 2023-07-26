function initCursor(default_pointer = "point-pointer", delay = 80) {
    let pointerA = document.createElement('div')
        pointerA.classList.add('a')
        let pointerB = document.createElement('div')
        pointerB.classList.add('b')
        let pointerContainer = document.createElement('div')
        pointerContainer.classList.add('pointer')
        pointerContainer.appendChild(pointerA)
        pointerContainer.appendChild(pointerB)
        // document.body.setAttribute('cursor-style', default_pointer)
        document.body.appendChild(pointerContainer)
        document.body.style.cursor = 'none'
        document.addEventListener('mousemove', event => {
            console.log('moved')
            mouseCursorMove(event)
        })
        document.addEventListener('click', event => {
            mouseCursorMove(event)
        })
        document.addEventListener('wheel', event => {
            mouseCursorMove(event)
        })
        

        function mouseCursorMove(event) {
            let timerA = setTimeout(() => {
                pointerA.style.left = event.pageX - (pointerA.offsetWidth / 2) + 'px'
                pointerA.style.top = event.pageY - (pointerA.offsetHeight / 2) + 'px'
            }, delay)
            let timerB = setTimeout(() => {
                pointerB.style.left = event.pageX - (pointerB.offsetWidth / 2) + 'px'
                pointerB.style.top = event.pageY - (pointerB.offsetHeight / 2) + 'px'
            }, delay *2)
        }

        document.querySelectorAll('[cursor-style]').forEach(element => {
            console.log(element)
            element.addEventListener('mouseover', ev => {
                pointerB.classList.add('hide-pointer')
                pointerA.classList.add(...element.getAttribute('cursor-style').split(' '))
            })
            element.addEventListener('mouseleave', ev => {
                pointerB.classList.remove('hide-pointer')
                pointerA.classList.remove(...element.getAttribute('cursor-style').split(' '))
            })
        })
}