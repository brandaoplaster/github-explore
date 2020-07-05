import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore repositórios no Github Explore</Title>

      <Form>
        <input placeholder="digite aqui o nome do repository" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="hi">
          <img
            src="https://avatars1.githubusercontent.com/u/26599685?s=460&u=08cc3ababd84ad032d357750f19fc356027f5bc8&v=4"
            alt="Lucas"
          />
          <div>
            <strong>Lucas/github-explore</strong>
            <p>Platform to create an online portfolio for developers.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
