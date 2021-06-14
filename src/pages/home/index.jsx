import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./styles.js";
import { Container, Feed, CardText, BoxNewFeed } from "./styles";
import { logout } from "../../services/auth";
import Nav from "../../Components/Nav/index";
import { LogOff, Send, Love, Like } from "../../svgs";
const Home = () => {

  const [feeds, setFeeds] = useState([]);
  const [newFeed, setNewFeed] = useState();
  const history = useHistory();
  useEffect(() => {
    handleFeeds();
  }, []);
  function handleFeeds() {
    api
      .get("/feeds")
      .then(function (response) {
        setFeeds(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  async function handleNewPost() {
    try {
      await api.post(`feed/`, {
        content: newFeed,
      });
      handleFeeds()
      setNewFeed('');
    } catch (error) {
      alert("Erro ao Publicar seu Post");
    }
  }
  async function handleNewLikeReaction(feedId, activeUserLikedIt) {
    setFeeds((feeds) =>
      feeds.map((feed) => {
        return feed.id === feedId
          ? {
              ...feed,

              likes: activeUserLikedIt === 1 ? feed.likes - 1 : feed.likes + 1,
              activeUserLikedIt: activeUserLikedIt === 1 ? 0 : 1,
            }
          : feed;
      })
    );
    var like = false;
    activeUserLikedIt === 1 ? (like = false) : (like = true);
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
    setFeeds((feeds) =>
      feeds.map((feed) => {
        return feed.id === feedId
          ? {
              ...feed,

              loves: activeUserLovedIt === 1 ? feed.loves - 1 : feed.loves + 1,
              activeUserLovedIt: activeUserLovedIt === 1 ? 0 : 1,
            }
          : feed;
      })
    );
    var love = false;
    activeUserLovedIt === 1 ? (love = false) : (love = true);
    try {
      await api.post(`reaction/`, {
        feedId: feedId,
        love: love,
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
      <Nav>
        <header>
          <h4>Bem vindo !</h4>
          <button onClick={handleLogout} type="button">
            <LogOff />
          </button>
        </header>
      </Nav>
      <h1>Todos os Posts</h1>

      <Feed className="Feed">
        {feeds.map((feed) => (
          <li key={feed.id}>
            <CardText>
              <header>
                <strong>{feed.author.username}</strong>
              </header>
              <p>{feed.content}</p>
              <footer>
                <button
                  type="button"
                  style={{ color: feed.activeUserLikedIt === 1 ? "red" : "" }}
                  onClick={() =>
                    handleNewLikeReaction(feed.id, feed.activeUserLikedIt)
                  }
                >
                  <Love />
                </button>
                {feed.likes}
                <button
                  style={{
                    color: feed.activeUserLovedIt === 1 ? "#6b63fc" : "",
                  }}
                  type="button"
                  onClick={() =>
                    handleNewLoveReaction(feed.id, feed.activeUserLovedIt)
                  }
                >
                  <Like />
                </button>
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
          value={newFeed}
        />
        <button onClick={handleNewPost} type="button">
          <Send />
        </button>
      </BoxNewFeed>
    </Container>
  );
};

export default Home;
