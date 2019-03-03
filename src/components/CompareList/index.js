import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories, updateRepository, removeRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <a href={repository.html_url} without rel="noopener noreferrer" target="_blank">
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          </a>
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>
            {`${repository.stargazers_count} `}
            <small>stars</small>
          </li>
          <li>
            {`${repository.forks_count} `}
            <small>forks</small>
          </li>
          <li>
            {`${repository.subscribers_count} `}
            <small>subscribers</small>
          </li>
          <li>
            {`${repository.open_issues_count} `}
            <small>issues</small>
          </li>
          <li>
            {`${repository.last_commit} `}
            <small>last commit</small>
          </li>
        </ul>
        <div className="buttons-container">
          <button type="button" onClick={() => updateRepository(repository.id)} className="update">
            <i className="fa fa-sync-alt" />
            {' Update'}
          </button>
          <button type="button" onClick={() => removeRepository(repository.id)} className="remove">
            <i className="fa fa-trash" />
            {' Remove'}
          </button>
        </div>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      full_name: PropTypes.string,
      html_url: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      subscribers_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
  removeRepository: PropTypes.func.isRequired,
  updateRepository: PropTypes.func.isRequired,
};

export default CompareList;
