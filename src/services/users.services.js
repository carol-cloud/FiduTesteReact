
export const UserService = () => ({
  searchUser: query => fetch(`https://api.github.com/search/users?q=${query}`),
  listRepos: loginUser => fetch(`https://api.github.com/users/${loginUser}/repos`)
});
