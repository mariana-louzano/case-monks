document.addEventListener('DOMContentLoaded', () => {

  const languageButtons = document.querySelectorAll('.product-card .btn-secondary');
  const icons = [
    'assets/icons/uk.svg', 
    'assets/icons/spain.svg'    
  ];

  languageButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      // Cria o elemento da imagem
      const iconElement = document.createElement('img');
      iconElement.src = icons[index] || 'assets/icons/default.svg'; 
      iconElement.alt = 'Ícone';
      iconElement.classList.add('language-icon'); 
      iconElement.classList.add('flying-icon');      

      // Pega a posição do botão para saber de onde o ícone deve sair
      const buttonSpan = button.querySelector('span'); 
      const rect = buttonSpan.getBoundingClientRect(); 

      const x = rect.left + (rect.width / 2);  
      const y = rect.top + (rect.height / 2);  

      // Define a posição inicial do ícone no centro do botão
      iconElement.style.left = `${x}px`;
      iconElement.style.top = `${y}px`;

      // Adiciona o ícone ao corpo da página
      document.body.appendChild(iconElement);      

      // Remove o ícone do HTML após a animação 
      iconElement.addEventListener('animationend', () => {
        iconElement.remove();
      });
    });
  });

  // Verificação de segurança do formulário
  const form = document.getElementById('form-seguranca');
  if (form) {
    const num1Span = document.getElementById('num1');
    const num2Span = document.getElementById('num2');
    const resultadoInput = document.getElementById('resultado');

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    num1Span.textContent = num1;
    num2Span.textContent = num2;

    // Lógica de validação 
    const feedbackParagrafo = document.querySelector('.contact-form .feedback'); 

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const resultadoUsuario = parseInt(resultadoInput.value, 10); 
      const somaCorreta = num1 + num2;

      // Verifica se número válido
      if (isNaN(resultadoUsuario)) {
        feedbackParagrafo.textContent = "Por favor, insira um número válido.";
        feedbackParagrafo.className = 'feedback error'; 
        setTimeout(() => clearFeedback(), 4000);
      } else if (resultadoUsuario === somaCorreta) {
        feedbackParagrafo.textContent = "Mensagem enviada com sucesso!";
        feedbackParagrafo.className = 'feedback success'; 
        form.reset();
        setTimeout(() => clearFeedback(), 4000);
      } else {
        feedbackParagrafo.textContent = "Tente novamente.";
        feedbackParagrafo.className = 'feedback error'; 
        setTimeout(() => clearFeedback(), 4000);
      }
    });

    // Limpar o feedback
    function clearFeedback() {
      feedbackParagrafo.textContent = "";
      feedbackParagrafo.className = 'feedback'; 
    }
  }

});