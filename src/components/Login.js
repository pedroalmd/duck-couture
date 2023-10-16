import React from 'react';
import '../App.css';

// remover php nada com nada
const LoginForm = () => {
  return (
    <div className="login-container">
      <img src="images/logo2-no-bg.png" alt="Logo da Empresa" id="logo" className="center" />
      <div className="container-login">
        <form action="processar_login.php" method="post">
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />

          <input type="submit" value="Entrar" style={{ color: 'var(--pink)' }} />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
