import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./index.css";
import { getToken, logout } from "../../services/auth";
const Home = () => {
  const [feeds, setFeeds] = useState([]);
  const [newFeed, setNewFeed] = useState();
  const history = useHistory();
  const Token = getToken();

  useEffect(() => {
    api.get("/feeds")
     .then(function (response) {
        setFeeds(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

  }, [Token]);

  async function handleNewPost(){
      try {
          await api.post(`feed/`,{
            content: 'xxxx',
          });

          // setIncidents(incidents.filter(incident => incident.id !== id))
      } catch (error) {
          alert('Erro ao Publicar seu Post')
      }
  }

  function handleLogout() {
    logout();
    history.push("/");
  }
  return (
    <div className="profile-container">
      <header>
        <span>Bem vindo !</span>

        {/* <Link className="button" to="/incidents/new">New Post</Link> */}
        <button onClick={handleLogout} type="button">
          sair
        </button>
      </header>
      <h1>Todos os Posts</h1>

      <ul className="Feed">
        {feeds.map((feed) => (
          <li key={feed.id}>
            <strong>mensagem:</strong>
            <p>{feed.content}</p>
            <strong>likes</strong>
            <p>{feed.likes}</p>
            <strong>loves</strong>
            <p>{feed.loves}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleNewPost} type="button">
          Publicar
        </button>
    </div>
  );
};

export default Home;
