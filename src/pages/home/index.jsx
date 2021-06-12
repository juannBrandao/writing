import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./styles.js";
import {Container, Feed, CardText } from "./styles";
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
    <Container className="profile-container">
      <header>
        <span>Bem vindo !</span>
        <button onClick={handleLogout} type="button">
          sair
        </button>
      </header>
      <h1>Todos os Posts</h1>

      <Feed className="Feed">
        {feeds.map((feed) => (
          <li key={feed.id}>
            <CardText>
              <header><strong>{feed.author.username}</strong></header>
              <section>{feed.content}</section>
              <footer>{feed.likes} {feed.loves}</footer>
            </CardText>
          </li>
        ))}
      </Feed>
      <button onClick={handleNewPost} type="button">
          Publicar
        </button>
    </Container>
  );
};

export default Home;
