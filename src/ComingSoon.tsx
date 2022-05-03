import './App.css';

const ComingSoon = () => {
  return (
    <div className="page-section profile-section">
      <div className="profile-info">
        <h1>👷‍♂️ Site under construction!</h1>
        <h2>This site is coming soon.</h2>
        <h3>
          Stay tuned for the 2022 refresh of my website! In the meantime, you can contact me through the following:
        </h3>
        <div style={{ display: 'flex', gap: '2em' }}>
          <a href="mailto:richard.dominick01@gmail.com">Email</a>
          <a href="https://github.com/richdom2185/">GitHub</a>
          <a href="https://www.linkedin.com/in/richard-dominick/">LinkedIn</a>
        </div>
        <p>Richard Dominick</p>
      </div>
      <div className="profile-avatar">
        <img src="https://picsum.photos/1000" alt="Profile Avatar" />
        <span>Have a random photo! 😊</span>
      </div>
    </div>
  );
};

export default ComingSoon;