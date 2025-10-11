 tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#007BFF",
                        "background-light": "#F8F9FA",
                        "background-dark": "#212529",
                        "accent": "#20C997"
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }

let btn_cv = document.querySelector('.btn-cv');
btn_cv.addEventListener('click', openPDF);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.querySelector('.navbar').style.background = 'rgba(26, 15, 46, 0.9)';
    } else {
      document.querySelector('.navbar').style.background = 'transparent';
    }
  });
  window.addEventListener('resize', function () {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
      navbar.style.background = 'rgba(26, 15, 46, 0.9)';
    } else if (window.scrollY <= 50) {
      navbar.style.background = 'transparent';
    }
  });
  

  function openPDF() { 
    window.open('/arquivos/Curriculo Darlan.pdf', '_blank'); 
  }