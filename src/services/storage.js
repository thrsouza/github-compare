const repositoriesKey = '@GC:repositories';

const storage = {
  getRepositories: async () => JSON.parse(await localStorage.getItem(repositoriesKey)) || [],
  setRepositories: async (repositories) => {
    await localStorage.setItem(repositoriesKey, JSON.stringify(repositories));
  },
};

export default storage;
