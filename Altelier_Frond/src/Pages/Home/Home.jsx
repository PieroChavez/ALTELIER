import { useState } from 'react';
import './Home.css';

export default function HomePage() {
  const [user, setUser] = useState('Peru'); // Nombre de usuario por defecto
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Peru',
      content: 'hello',
      likes: 0,
      comments: 0,
      time: '2 mins ago'
    },
    {
      id: 2,
      username: 'MikaCosmetics',
      content: 'Your pathway to stunning and immaculate beauty and made sure your skin is exfoliating skin and shining like light.',
      likes: 0,
      comments: 0,
      time: '1 hour ago',
      isAd: true,
      website: 'mikacosmetics.com'
    }
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      username: user,
      content: newPost,
      likes: 0,
      comments: 0,
      time: 'Just now'
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Bienvenido, {user}!</h1>
        <p>¿Qué hay de nuevo hoy?</p>
      </div>

      <div className="home-content">
        <div className="post-creator">
          <form onSubmit={handlePostSubmit}>
            <div className="post-input">
              <img 
                src="https://via.placeholder.com/40" 
                alt="User profile" 
                className="profile-pic"
              />
              <input
                type="text"
                placeholder="What's on your mind..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
            </div>
            <div className="post-options">
              <button type="button" className="option-btn">
                <span>Image</span>
              </button>
              <button type="button" className="option-btn">
                <span>Clip</span>
              </button>
              <button type="button" className="option-btn">
                <span>Attachment</span>
              </button>
              <button type="button" className="option-btn">
                <span>Audio</span>
              </button>
              <button type="submit" className="post-btn">
                POST
              </button>
            </div>
          </form>
        </div>

        <div className="feed">
          {posts.map((post) => (
            <div key={post.id} className={`post ${post.isAd ? 'ad-post' : ''}`}>
              <div className="post-header">
                <img 
                  src="https://via.placeholder.com/40" 
                  alt="User profile" 
                  className="profile-pic"
                />
                <div className="post-user">
                  <h3>{post.username}</h3>
                  {post.isAd && <span className="ad-tag">AD</span>}
                  <span className="post-time">{post.time}</span>
                </div>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
                {post.isAd && (
                  <a href={`https://${post.website}`} className="ad-website">
                    {post.website}
                  </a>
                )}
              </div>
              <div className="post-footer">
                <button className="like-btn">
                  <span>👍 {post.likes}</span>
                </button>
                <button className="comment-btn">
                  <span>💬 {post.comments}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="friend-list">
        <h2>Friend List</h2>
        <div className="friend">
          <img 
            src="https://via.placeholder.com/40" 
            alt="Friend profile" 
            className="profile-pic"
          />
          <span>Peru</span>
        </div>
        {/* Más amigos pueden ser añadidos aquí */}
      </div>
    </div>
  );
}