import React, { useState } from 'react';
import './Exerc.css';
import aluno from './Component.js';

function Exerc() {
   
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <div className="Form">
      <form>
        <div>
          <p>Nome do aluno:</p>
          <input
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Nome"
          />
        </div>
        <div>
          <p>Numero de telefone:</p>
          <input
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
          placeholder="14 997554433"
          />
        </div>
      </form>
      <div className="Soma_resp">
        <div className="Resultado">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
     </div>

    <div className="Soma_resp">
        <div className="Resultado">
          <p>{aluno.nome}</p>
          <p>{aluno.ra}</p>
        </div>
      </div>
    </div>
  );
}

export default Exerc;
