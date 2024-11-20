import "./App.scss";

function App() {
  return (
    <main className="card">
      <img
        className="card-image"
        alt="image depicting coding"
        src="/assets/images/illustration-article.svg"
      />
      <span className="pill">Learning</span>
      <span className="publish-date">Published 21 Dec 2023</span>
      <h1 className="title">HTML & CSS foundations</h1>
      <p className="description">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="author-details">
        <img
          className="author-image"
          alt="author image"
          src="/assets/images/image-avatar.webp"
        />
        <span className="author-name">Greg Hooper</span>
      </div>
    </main>
  );
}

export default App;
