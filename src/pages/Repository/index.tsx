import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src="" alt="Github Explore" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Volta
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>Name</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1080</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1080</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1080</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="x">
          <div>
            <strong>zxzx</strong>
            <p>dfdfd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
