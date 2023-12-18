let slides = document.querySelectorAll('.Cyber-Breach-Container');
        let index = 0;

        function next(){
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }
        
        function prev(){
            slides[index].classList.remove('active');
            index = (index - 1 + slides.length) % slides.length;
            slides[index].classList.add('active');
        }

        setInterval(next, 6000);