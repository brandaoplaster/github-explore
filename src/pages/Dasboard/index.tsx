import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);
    const repository = response.data;
    setRepositories([...repository, repositories]);
  }

  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore repositórios no Github Explore</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="digite aqui o nome do repository"
        />
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
