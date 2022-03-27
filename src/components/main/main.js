import "./main.css";
import { MdEmojiPeople } from 'react-icons/md';
import { useState, useEffect } from "react";
import api from "../../services/api";

const Main = () => {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {

    async function getPessoasInfo() {
      const response = await api.get('/pessoas');
      console.log(response.data);
      setPessoas(response.data);
    }

    getPessoasInfo();
  }, []);




  return (
    <main>
      <div className="main__container">

        <div className="main__title">
          <MdEmojiPeople />
          <div className="main__greeting">
            <h1>Dashboard</h1>
            <p>Aqui voce acompanha seus saldos e movimentacoes</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card" id="refeicao">
            <div className="saldos">
              <div className="card_inner">
                <p className="text-primary-p">Saldo em refeicao:</p>
                <span className="font-bold text-title">{pessoas[0]?.refeicao}</span>
              </div>
            </div>
          </div>
          <div className="card" id="mobilidade">
            <div className="saldos">
              <div className="card_inner">
                <p className="text-primary-p">Saldo em mobilidade:</p>
                <span className="font-bold text-title">{pessoas[0]?.mobilidade}</span>
              </div>
            </div>
          </div>

          <div className="card" id="cultura">
            <div className="saldos">
              <div className="card_inner">
                <p className="text-primary-p" >Saldo em cultura:</p>
                <span className="font-bold text-title">{pessoas[0]?.cultura}</span>
              </div>
            </div>
          </div>

          <div className="card" id="saude">
            <div className="saldos">
              <div className="card_inner">
                <p className="text-primary-p">Saldo em saude:</p>
                <span className="font-bold text-title">{pessoas[0]?.saude}</span>
              </div>
            </div>
          </div>

          <div className="card" id="educacao">
            <div className="saldos">
              <div className="card_inner">
                <p className="text-primary-p">Saldo em educacao:</p>
                <span className="font-bold text-title">{pessoas[0]?.educacao}</span>
              </div>
            </div>
          </div>

          <div className="card" id="saldolivre">
            <div className="saldos">
              <div className="card_inner">
                <p className="text-primary-p">Saldo livre:</p>
                <span className="font-bold text-title">{pessoas[0]?.saldo_livre}</span>
              </div>
            </div>
          </div>
        </div>
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
                <h1>saude</h1>
              </div>

              <div className="cardt2">
                <p><b>$124,200</b></p>
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

export default Main;