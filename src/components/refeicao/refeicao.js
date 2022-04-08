import "./refeicao.css";
import { MdEmojiPeople } from 'react-icons/md';
import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

const Refeicao = () => {

  const [commentary, setCommentary] = useState('');
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {

    async function getPessoasInfo() {
      const response = await api.get('/pessoas');
      console.log(response.data);
      setPessoas(response.data);
    }

    getPessoasInfo();
  }, []);


  async function putSaldosInfo(destino, valor, valorAnterior) {
    const saldoNovo = Number(valorAnterior) + Number(valor);
    const response = await api.put('/pessoas/1', {
      origem: "refeicao",
      saldoOrigem: Number(pessoas[0]?.refeicao) - Number(valor),
      destino: destino,
      saldoDestino: saldoNovo,
      ultima_movimentacao: Number(valor),
      ultima_coluna: destino
    });
    alert("Saldo transferido com sucesso!");
    console.log(response.data);
  }




  return (
    <main>
      <div className="main__container">

        <div className="main__title">
          <MdEmojiPeople />
          <div className="main__greeting">
            <h1>Refeicao</h1>
            <p>Aqui voce acompanha seus saldos e movimentacoes</p>
          </div>
        </div>


        <div className="card2" id="refeicao3">
          <div className="target_transf6">
            <div className="card_inner2">
              <p className="text-primary-p" id="transf">SALDO A SER TRANSFERIDO </p>
              
              <span className="font-bold text-title" >
               
                <input placeholder="Digite o valor aqui" id="inp" value={commentary} onChange={e => setCommentary(e.target.value)}></input>
                
              </span>
            </div>
          </div>
        </div>
        <div className="aviso">

          <p>Selecione o destino do saldo!!!</p>

        </div>
        <Link to="/">
        <div className="cards_transf">
          <button className="card" id="mobilidade3" class="glow-on-hover" onClick={() => putSaldosInfo("mobilidade", commentary, pessoas[0]?.mobilidade)}>
            <div className="target__ben" >
              <p>MOBILIDADE</p>
            </div>
          </button>
          
          <button className="card" id="cultura3" class="glow-on-hover" onClick={() => putSaldosInfo("cultura", commentary, pessoas[0]?.cultura)}>
          
            <div className="target__ben">
              <p>CULTURA</p>

            </div>
          </button>
          
          <button className="card" id="saude3" class="glow-on-hover" onClick={() => putSaldosInfo("saude", commentary, pessoas[0]?.saude)}>
            <div className="target__ben">
              <p >SAUDE</p>
            </div>
          </button>

          <button className="card" id="educacao3" class="glow-on-hover" onClick={() => putSaldosInfo("educacao", commentary, pessoas[0]?.educacao)}>
            <div className="target__ben">
              <p >EDUCAÇAO</p>
            </div>
          </button>


        </div>
        </Link>
        <div className="charts">


          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Ultimas movimentacoes</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="cardt1">
                <h1>{pessoas[0]?.ultimas_nome}</h1>
              </div>

              <div className="cardt2">
                <p><b>R${pessoas[0]?.ultimas_movimentacoes},00</b></p>
              </div>

              <div className="cardt3">
                <h1>mobilidade</h1>
              </div>

              <div className="cardt4">
                <p><b>-$1881</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Refeicao;