import "./styles.css";

type Profile = {
  profileUrl: string;
  followers: string;
  name: string;
  location: string;
  avatarUrl: string;
};

const GithubProfileResult = ({
  profileUrl,
  followers,
  name,
  location,
  avatarUrl,
}: Profile) => {
  return (
    <div className="result-container container">
      <div className="div-result-image">
        <img src={avatarUrl} alt="Imagem perfil Github" />
      </div>
      <div className="div-result-container">
        <h3 className="result-title">Informações</h3>

        <div className="div-result-info">
          <h4>Perfil:</h4>
          <p>{profileUrl}</p>
        </div>

        <div className="div-result-info">
          <h4>Seguidores:</h4>
          <p>{followers}</p>
        </div>

        <div className="div-result-info">
          <h4>Localidade:</h4>
          <p>{location}</p>
        </div>

        <div className="div-result-info">
          <h4>Nome:</h4>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
export default GithubProfileResult;
