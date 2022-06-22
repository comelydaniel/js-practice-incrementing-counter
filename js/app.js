const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = 0;

    const updateCounter = () => {
        const target = counter.getAttribute('data-attribute');
        const num = +counter.innerText
        const increment = target/100

        if(num < target) {
            counter.innerText = `${Math.ceil(num + increment)}`
            setTimeout(updateCounter, 4)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})