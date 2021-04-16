import React from 'react';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import tshirtImage from '../../assets/tshirt.png';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="">Compartilhar</a>
        <a href="">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection: React.FC = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="description">
            Receba o produto que você está esperando ou devolvemos o seu
            dinheiro
          </p>
        </span>

        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">sem garantia</p>
        </span>
      </div>

      <a href="">Saiba mais sobre garantia</a>
    </Section>
  );
};

const Info: React.FC = () => {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        adipisci, assumenda minima consequuntur odio atque? Esse quaerat
        voluptates maiores, sunt sed corporis eum hic. Hic at voluptatum
        blanditiis non atque.
        <br />
        <br />
        Itens inclusos: <br />
        - 1x Lorem Ipsum <br />
        - 1x Lorem Ipsum <br />
        - 1x Lorem Ipsum <br />
        - 1x Lorem Ipsum <br />
        - 1x Lorem Ipsum <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
        temporibus magni qui itaque aliquid, ab provident asperiores. Eligendi
        illum, libero, repellat expedita, distinctio excepturi minima enim ut
        alias fugit ex?
      </p>
    </Description>
  );
};

export default Product;
