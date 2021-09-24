
export const UserService = () => ({
  searchUser: query => fetch(`https://api.github.com/search/users?q=${query}`),
  listRepos: idUser => fetch(`https://api.github.com/users/${idUser}/repos`)
});
