import "./styles.css";

const GithubSearch = () => {
  return (
    <div className="github-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form>
          <div className="form-container">
            <input
              type="text"
              name="userGithub"
              className="search-input"
              placeholder="Usuário Github"
            />
            <button type="submit" className="btn btn-primary search-user">
              Encontrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GithubSearch;
