const repositoriesAPI = {
  async searchRepositories(keyword) {
    const response = await fetch(`https://api.github.com/search/repositories?q=${keyword}`);
    const result = await response.json();
    return result.items || [];
  },
  getSelectedRepositories() {
    return JSON.parse(
      localStorage.getItem('repositories') || '[]'
    );
  },
  selectRepository(repositoryToSelect) {
    let repositories = JSON.parse(
      localStorage.getItem('repositories') || '[]'
    );
    
    repositories = repositories.filter(({ id }) => id !== repositoryToSelect.id);
    repositories.push(repositoryToSelect);
    localStorage.setItem('repositories', JSON.stringify(repositories));
  },
  deleteRepositoryFromSelected(repositoryToDeleteId) {
    let repositories = JSON.parse(
      localStorage.getItem('repositories') || '[]'
    );
    
    repositories = repositories.filter(({ id }) => id !== repositoryToDeleteId);
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }
}

export default repositoriesAPI
