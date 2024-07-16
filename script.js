document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.querySelector('.faq-question').addEventListener('click', function () {
            faqItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                    otherItem.querySelector('.pluslogo').style.display = 'block';
                    otherItem.querySelector('.crosslogo').style.display = 'none';
                }
            });

            var answer = item.querySelector('.faq-answer');
            var plusLogo = item.querySelector('.pluslogo');
            var crossLogo = item.querySelector('.crosslogo');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                plusLogo.style.display = 'block';
                crossLogo.style.display = 'none';
            } else {
                answer.style.display = 'block';
                plusLogo.style.display = 'none';
                crossLogo.style.display = 'block';
            }
        });
    });

    function getDeviceWidth() {
        const width = window.innerWidth;
        console.log("Device width: " + width + "px");
        return width;
    }

    // Call the function to get the device width and set the width of #header::before
    function setHeaderWidth() {
        const width = getDeviceWidth();
        document.documentElement.style.setProperty('--header-width', width + 'px');
    }

    // Initial call to set the width
    setHeaderWidth();

    // Optionally, add an event listener to update the width when the window is resized
    window.addEventListener('resize', setHeaderWidth);
});
