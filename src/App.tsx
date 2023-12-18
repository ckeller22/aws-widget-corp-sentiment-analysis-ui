import './App.scss';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('🚀 ~ file: App.tsx:5 ~ handleSubmit ~ event:', event);
    // Here you can call an API to submit your form
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Sentiment Analysis</h2>
        <p>Add the text you want to analyze below.</p>
        <div className="mb-3">
          <label htmlFor="review-text-input" className="form-label">
            Text:
          </label>
          <textarea className="form-control" id="review-text-input" rows={3} />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
