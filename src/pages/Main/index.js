import React, { Component } from 'react';
import moment from 'moment';
import CompareList from '../../components/CompareList';

import api from '../../services/api';
import storage from '../../services/storage';

import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading: false, repositories: await storage.getRepositories() });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;

    if (repositories.find(repo => repo.full_name === repositoryInput)) {
      this.setState({ repositoryError: true });
      return;
    }

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.last_commit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });

      await storage.setRepositories([...(await storage.getRepositories()), repository]);
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleUpdateRepository = async (id) => {
    const { repositories } = this.state;
    const repository = repositories.find(item => item.id === id);

    try {
      const { data } = await api.get(`/repos/${repository.full_name}`);

      data.last_commit = moment(repository.pushed_at).fromNow();

      await this.setState({
        repositories: repositories.map(item => (item.id === id ? data : item)),
      });

      await storage.setRepositories(repositories);
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleRemoveRepository = async (id) => {
    const { repositories: oldRepositories } = this.state;
    const repositories = oldRepositories.filter(repo => repo.id !== id);

    this.setState({ repositories });
    await storage.setRepositories(repositories);
  };

  render() {
    const {
      repositoryError, repositoryInput, repositories, loading,
    } = this.state;

    return (
      <Container>
        <h1>Github Stats</h1>
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : <i className="fa fa-plus" />}
          </button>
        </Form>

        <CompareList
          repositories={repositories}
          updateRepository={this.handleUpdateRepository}
          removeRepository={this.handleRemoveRepository}
        />
      </Container>
    );
  }
}
