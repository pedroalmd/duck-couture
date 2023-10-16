import React from 'react';
import '../App.css';

// Ajustar path do login-button nada com nada
const HomePage = () => {
  return (
    <div className="App">
      <header>
        <div style={{ textAlign: 'center' }}>
          <img src="images/logo1-no-bg.png" alt="Logo da Empresa" id="logo" />
        </div>
        <div style={{ textAlign: 'right' }}>
          <a className="login-button" href="file:///Users/pedro/Documents/cesar/2023-2/login.html">Cadastro / Login</a>
        </div>
      </header>

      <div className="container">
        <h1>Quem somos nós?</h1>
        <p>
          Na Duck Couture, acreditamos que todos os patos merecem se vestir com
          elegância e estilo. Fundada com a paixão por moda e uma adoração
          inabalável por nossos amigos emplumados, nossa empresa é dedicada a
          fornecer roupas exclusivas e sofisticadas para patos de todos os
          tamanhos, cores e personalidades.
        </p>

        <div className="video">
          <iframe src="https://www.youtube.com/embed/dvHlC29ahgg"></iframe>
        </div>

        <div className="gallery">
          <img src="images/foto1.jpeg" alt="Instalações" />
          <img src="images/foto2.jpeg" alt="Instalações" />
          <img src="images/foto3.jpeg" alt="Instalações" />
          <img src="images/foto4.jpeg" alt="Funcionários" />
        </div>

        <div className="products">
          <h2>Nossos Produtos</h2>
          <p>
            Conheça nossos produtos de alta qualidade, incluindo roupas para todas
            as ocasiões.
          </p>
          <div className="gallery">
            <img src="images/destaque1.jpeg" alt="Instalações" />
            <img src="images/destaque2.jpeg" alt="Instalações" />
            <img src="images/destaque3.avif" alt="Instalações" />
          </div>
        </div>

        <div className="founders">
          <h2>Conheça Nossos Fundadores</h2>
          <table>
            <tr>
              <th>Cargo</th>
              <th>Nome</th>
              <th>Curriculum Vitae</th>
            </tr>
            <tr>
              <td>CEO</td>
              <td>Gustavo Lima</td>
              <td>
                <a style={{ color: 'black' }} href="gustavo_cv.pdf" target="_blank">Baixar PDF</a>
              </td>
            </tr>
            <tr>
              <td>COO</td>
              <td>Pedro Almeida</td>
              <td>
                <a style={{ color: 'black' }} href="pedro_cv.pdf" target="_blank">Baixar PDF</a>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <footer>
        <div className="contact-info">
          <ul>
            <li>Número de telefone: (81) 9999-9999</li>
            <li>Número de WhatsApp: (81) 8181-8181</li>
            <li>
              <a href="mailto:contato@duckcouture.com">Email: contato@duckcouture.com</a>
            </li>
          </ul>
        </div>
        <div className="address">
          <p>Endereço: Rua 1 (ao lado da Rua 2), nº 0 - Recife - PE</p>
        </div>
        <div className="payment-methods">
          <img src="images/visa.jpg" alt="Visa" />
          <img src="images/mastercard.png" alt="Mastercard" />
          <img src="images/paypal.jpg" alt="PayPal" />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
