
  document.addEventListener("DOMContentLoaded", function () {
    // Botão de voltar ao topo
    const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        btnTop.classList.add("show");
      } else {
        btnTop.classList.remove("show");
      }
    });

    btnTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  
    const swiper = new Swiper(".storiesSwiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      freeMode: true,
      grabCursor: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    });
  });


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-voluntario");
  const botao = document.getElementById("btn-submit");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    botao.classList.add("onclic");
    botao.disabled = true;

    const formData = new FormData(form);

    fetch("https://formspree.io/f/mjkwqrbe", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setTimeout(() => {
            botao.classList.remove("onclic");
            botao.classList.add("validate");

            form.reset();
            const modalElement = document.getElementById("volunteerForm");
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();

            setTimeout(() => {
              location.reload(); // recarrega só depois de mostrar ✓
            }, 3000); 

          }, 3000); 
        } else {
          throw new Error("Erro ao enviar");
        }
      })
      .catch((error) => {
        botao.classList.remove("onclic", "validate");
        botao.disabled = false;
        alert("Falha ao enviar: " + error.message);
      });
  });
});






