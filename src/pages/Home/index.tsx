import React from 'react';
import { FiChevronLeft, FiChevronRight, FiDollarSign } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ReasonBox from '../../components/ReasonBox';
import Footer from '../../components/Footer';

import noChangeImg from '../../assets/nochange.svg';
import measureTapeImg from '../../assets/measureTape.svg';
import questionImg from '../../assets/question.svg';

import {
  Container,
  FirstBlock,
  AboutUs,
  ToSignUp,
  PorqueComprar,
  ReasonsList,
  HowToAnnounce,
  HowToAnnounceTitle,
  HowToAnnounceBox,
  HowToAnnounceContent,
  HowMuch,
  HowMuchTitle,
  HowMuchLine,
  HowMuchBox1,
  HowMuchBox2,
  HowMuchBox3,
  HowMuchValues,
  HowMuchValuesBox,
  HowMuchSold,
  HowMuchGet,
  Obs,
  ObsTitle,
  ObsInfo,
  ObsBox,
  Recap,
  RecapTitle,
  RecapInfo,
  RecapBox,
  JoinUs,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header isHome />

      <FirstBlock>
        <AboutUs>
          <div>
            <h2>Nosso negócio</h2>
            <p>
              Somos um brechó online, com foco em vendas de artigos usados,
              roupas, acessórios, livros, sapatos e afins, voltado à todos os
              tipos de público.
            </p>
            <p>
              Nossa missão é incentivar o consumo consciente e reduzir os
              impactos ambientais, evitando desperdício e incentivando o
              comércio local.
            </p>
          </div>
          <div>
            <h2>Média de preço</h2>
            <p>
              Nossos itens variam o preço dependendo da qualidade, marca,
              quantas vezes foi utilizado e outras características.
            </p>
            <p>
              Não estabelecemos valor mínimo ou máximo, mas buscamos lembrar
              sempre que por se tratar de um brechó, todos os itens são de
              valores acessíveis à todos os públicos.
            </p>
          </div>
        </AboutUs>
        <ToSignUp>
          <div>
            <h1>Quer anunciar com a gente?</h1>
          </div>
          <Link to="/signup">Faça seu cadastro</Link>
        </ToSignUp>
      </FirstBlock>

      <PorqueComprar>
        <h1>Porque comprar em brechó?</h1>
        <h2>5 vantagens de garimpar</h2>
        <ReasonsList>
          <ReasonBox
            id="reason1"
            title="1. Garimpar é divertido!"
            description="Como somos um brechó online, você não pode revirar as
             araras, mas pode revirar nosso feed até encontrar aquela peça PERFEITA 
             e ainda por cima no seu tamanho e voilà!, aquisição nova feita! É 
             como se fosse brincar de caça ao tesouro!"
          />
          <ReasonBox
            id="reason2"
            title="2. Peças exclusivas"
            description="Os nosso acervos contém de vintage a roupas de marca,
            além de coleções exclusivas que muito provavelmente não estão
             disponíveis em nenhum outro lugar. Sem contar que as chances de
              algum conhecido possuir a mesma peça são ínfimas."
          />
          <ReasonBox
            id="reason3"
            title="3. Vintage nunca sai de moda"
            description="E brechós são os lugares ideais para encontrar
            tesouros vintage."
          />
          <ReasonBox
            id="reason4"
            title="4. Peças atuais e de qualidade com preços de banana"
            description="Roupas usadas são em média 40-60% mais baratas que
             peças novas, sem contar que a qualidade normalmente é superior. Ou
              seja, roupas de brechó vão ter um tempo de uso muito mais longo
               do que fast fashion, fazendo com que o retorno no seu
                investimento – fashion – seja muito mais alto."
          />
          <ReasonBox
            id="reason5"
            title="5. Consumo mais responsável"
            description="Comprar em brechó evita desperdício e, consequentemente
            , reduz impactos ambientais. Ao reutilizar algo que já foi de alguém
            , evitamos que aquela peça gere mais lixo, poupando a natureza de
             todo o trabalho de decomposição do objeto. É o que chamamos de
              “consumo consciente“."
          />
        </ReasonsList>
      </PorqueComprar>

      <HowToAnnounce>
        <HowToAnnounceTitle>Como anunciar?</HowToAnnounceTitle>
        <HowToAnnounceBox>
          <FiChevronLeft size="3.2rem" color="#500a0f" />
          <HowToAnnounceContent>
            <h2>Por que anunciar?</h2>
            <p>
              Você tem items que estão há muito tempo parados no seu
              guarda-roupa ou na sua casa que você não usa mais, não servem ou
              já cumpriram o papel que deveriam na sua vida?
            </p>
            <p>
              Nós disponibilizamos esse espaço pra você desapegar e ainda
              conseguir um dinheirinho extra!
            </p>
            <p>Abra espaço pra coisas novas na sua vida.</p>
          </HowToAnnounceContent>
          <FiChevronRight size="3.2rem" color="#500a0f" />
        </HowToAnnounceBox>
      </HowToAnnounce>

      <HowMuch>
        <HowMuchTitle>
          <h1>Quanto custa para anunciar no brechó?</h1>
          <h2>A pergunta mais feita por todos que procuram o Ju.foryou</h2>
        </HowMuchTitle>
        <HowMuchLine>
          <HowMuchBox1>
            <p>
              Nós ajustamos o preço das mercadorias e o parceiro/consignante
              fica sempre com uma porcentagem % do valor pelo qual forem
              revendidas, descontadas as despesas operacionais.
            </p>
            <p>
              Com absoluta transparência, prestamos ao parceirx/consignante
              todas as informações sobre os produtos já revendidos e os valores
              a serem repassados.
            </p>
          </HowMuchBox1>
          <HowMuchBox2>
            <h1>O QUE SÃO AS DESPESAS OPERACIONAIS?</h1>
            <p>
              Despesas operacionais são todos os gastos que o brechó possui ao
              anunciar a peça.
            </p>
            <p>
              Nós cuidamos de absolutamente tudo pra você. Desde a higienização
              pesada, estoque, embalagens, brindes, fotografias e edição de
              imagem, envio, negociação, disponibilização de diversas formas de
              pagamento, frete (gratuito pra determinadas regiões) e demais que
              se fizerem necessárias para finalização da compra.
            </p>
            <p id="last-paragraph">
              Para oferecermos sempre a melhor experiência para nossxs clientes,
              nós temos uma tarifa por venda no valor de R$1 (um real).
            </p>
          </HowMuchBox2>
        </HowMuchLine>
        <HowMuchLine>
          <HowMuchBox3>
            <h1>
              QUAL O VALOR DE PORCENTAGEM QUE O PARCEIRO RECEBE APÓS A VENDA?
            </h1>
            <p>
              *descontadas as despesas operacionais de R$1 (um real) por venda
              concluída
            </p>
          </HowMuchBox3>
          <HowMuchValues>
            <HowMuchValuesBox>
              <HowMuchSold>
                <h1>
                  <FiDollarSign size={32} color="#500a0f" />
                </h1>
                <p>Peças até R$40</p>
              </HowMuchSold>
              <HowMuchGet>50%</HowMuchGet>
            </HowMuchValuesBox>

            <HowMuchValuesBox>
              <HowMuchSold>
                <h1>
                  <FiDollarSign size={32} color="#500a0f" />
                  <FiDollarSign size={32} color="#500a0f" />
                </h1>
                <p>Peças de R$41 à R$100</p>
              </HowMuchSold>
              <HowMuchGet>60%</HowMuchGet>
            </HowMuchValuesBox>

            <HowMuchValuesBox>
              <HowMuchSold>
                <h1>
                  <FiDollarSign size={32} color="#500a0f" />
                  <FiDollarSign size={32} color="#500a0f" />
                  <FiDollarSign size={32} color="#500a0f" />
                </h1>
                <p>Peças acima de R$101</p>
              </HowMuchSold>
              <HowMuchGet>65%</HowMuchGet>
            </HowMuchValuesBox>
          </HowMuchValues>
        </HowMuchLine>
      </HowMuch>

      <Obs>
        <ObsTitle>Observações...</ObsTitle>

        <ObsInfo>
          <ObsBox>
            <p>Nós não efetuamos trocas.</p>
            <p>
              Não efetuamos trocas após vendidas, nem disponibilizamos a opção
              de trocar uma peça pessoal por alguma disponível no brechó.
            </p>
            <img src={noChangeImg} alt="No Change" />
          </ObsBox>

          <ObsBox>
            <p>
              Disponibilizamos uma fita métrica e estamos disponíveis sempre pra
              sanar todas as dúvidas com relação às peças, desde o tamanho,
              qualidade, cor, caimento, enfim, o que for necessário.
            </p>
            <div>
              <img src={measureTapeImg} alt="measure tape" />
              <img src={questionImg} alt="question" />
            </div>
          </ObsBox>
        </ObsInfo>
      </Obs>

      <Recap>
        <RecapTitle>Recaptulando:</RecapTitle>
        <RecapInfo>
          <RecapBox>
            <p>
              O Ju.foryou pode ser um espaço pra você anunciar itens que estão
              há muito tempo guardados, roupas que não servem mais, livros que
              você já leu etc.
            </p>
            <p>
              Uma forma de circular a energia, consumir de uma forma mais
              consciente e sustentável, além de gerar uma graninha extra.
            </p>
            <p>
              Pra anunciar as peças nas nossas redes sociais, nós cobramos
              apenas uma porcentagem quando a compra é finalizada, descontadas
              as despesas operacionais no valor de R$1 (um real) por venda.
            </p>
            <p>
              Os valores serão repassados sempre 30 dias após a finalização da
              venda.
            </p>
          </RecapBox>
          <RecapBox>
            <p>
              Quanto mais você compartilha, posta, recomenda, indica nossas
              redes sociais, mais chance você tem de ver seu produto vendido, é
              importante fazer sua parte.
            </p>
            <p>
              Quanto mais pessoas acessando e conhecendo nosso conteúdo, mais
              chances de venda e também de produtos novos anunciados.
            </p>
            <p>
              Nós selecionamos e precificamos as peças, higienizamos,
              fotografamos e divulgamos. Cuidamos de absolutamente TUDO, até que
              a peça chegue ao comprador.
            </p>
            <p>
              Você não precisa se preocupar com nada, é tudo por nossa conta.
            </p>
          </RecapBox>
        </RecapInfo>
      </Recap>

      <JoinUs>
        <h1>E aí? Quer anunciar com a gente?</h1>
        <h2>
          Preencha nosso formulário clicando <Link to="/signup">AQUI</Link>
        </h2>
      </JoinUs>
      <Footer />
    </Container>
  );
};

export default Home;
