import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./styles.js";
import { Container, Feed, CardText, BoxNewFeed } from "./styles";
import { getToken, logout } from "../../services/auth";
const Home = () => {
  const [feeds, setFeeds] = useState([]);
  const [newFeed, setNewFeed] = useState();
  const history = useHistory();
  const Token = getToken();

  useEffect(() => {
    api
      .get("/feeds")
      .then(function (response) {
        setFeeds(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [Token]);

  async function handleNewPost() {
    try {
      await api.post(`feed/`, {
        content: newFeed,
      });
    } catch (error) {
      alert("Erro ao Publicar seu Post");
    }
  }
  async function handleNewLikeReaction(feedId, activeUserLikedIt) {
    var like = false;
    activeUserLikedIt === 1 ? like=false : like=true
    try {
      await api.post(`reaction/`, {
        feedId: feedId,
        like: like,
      });
    } catch (error) {
      alert("Erro ao Publicar seu Post");
    }
  }
  async function handleNewLoveReaction(feedId, activeUserLovedIt) {
    var love = false;
    activeUserLovedIt === 1 ? love=false : love=true
    try {
      await api.post(`reaction/`, {
        feedId: feedId,
        love: love
      });

    } catch (error) {
      alert("Erro ao Publicar seu Post");
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
              <header>
                <strong>{feed.author.username}</strong>
              </header>
              <section>{feed.content}</section>
              <footer>
                <button type="button" onClick={ () =>handleNewLikeReaction(feed.id, feed.activeUserLikedIt)}>like</button>
                {feed.likes}
                <button type="button" onClick={() => handleNewLoveReaction(feed.id, feed.activeUserLikedIt)}>amei</button>
                 {feed.loves}
              </footer>
            </CardText>
          </li>
        ))}
      </Feed>
      <BoxNewFeed>
        <input
          type="txt"
          placeholder="Seu texto"
          onChange={(e) => setNewFeed(e.target.value)}
        />
        <button onClick={handleNewPost} type="button">
          Publicar
        </button>
      </BoxNewFeed>
    </Container>
  );
};

export default Home;
