import React from 'react';
import '../App.css';

const Cadastro = () => {
  return (
    <div className="container-login" style={{ maxWidth: '600px' }}>
      <h1>Cadastro de Produtos</h1>
      <form action="processar_cadastro.php" method="post" encType="multipart/form-data">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="descricao">Descrição:</label>
        <textarea id="descricao" name="descricao" rows="4" required></textarea>

        <label htmlFor="imagem">Imagem:</label>
        <input type="file" id="imagem" name="imagem" accept="image/*" required />

        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" required />

        <label htmlFor="tags">Tags (separadas por vírgula):</label>
        <input type="text" id="tags" name="tags" required />

        <input type="submit" value="Cadastrar Item" style={{ color: 'var(--pink)' }} />
      </form>
    </div>
  );
};

export default Cadastro;
