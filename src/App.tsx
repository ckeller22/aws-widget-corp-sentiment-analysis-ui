import React, { useState } from 'react';
import './App.scss';

function App() {
  const [reviewText, setReviewText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('🚀 ~ file: App.tsx:5 ~ handleSubmit ~ event:', event);
    // Here you can call an API to submit your form
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mb-3">
        <h2>Sentiment Analysis</h2>
        <p>
          Enter text below to analyze and determine sentiment, either positive
          or negative.
        </p>
        <div className="mb-3">
          <label htmlFor="review-text-input" className="form-label">
            Text:
          </label>
          <textarea
            className="form-control"
            id="review-text-input"
            placeholder="Enter text here..."
            rows={3}
            value={reviewText}
            onChange={handleChange}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Analyze" />
      </form>
      <div className="">
        <h2>Analysis Results</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <div className="fw-bold">Sentiment</div>
              <div>
                <span className="badge bg-success">Positive</span>
              </div>
            </div>
            <div className="text-secondary">
              &quot;Model X offers robust health monitoring features, making it
              great for health-conscious users. The touch screen responsiveness
              is top-notch, but the device struggles with connectivity issues at
              times. Model X offers robust health monitoring features, making it
              great for health-conscious users. The touch screen responsiveness
              is top-notch, but the device struggles with connectivity issues at
              times.&quot;
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <div className="fw-bold">Sentiment</div>
              <div>
                <span className="badge bg-success">Positive</span>
              </div>
            </div>
            <p>
              Model X offers robust health monitoring features, making it great
              for health-conscious users. The touch screen responsiveness is
              top-notch, but the device struggles with connectivity issues at
              times.
            </p>
          </li>

          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <div className="fw-bold">Sentiment</div>
              <div>
                <span className="badge bg-success">Positive</span>
              </div>
            </div>
            <p>
              Model X offers robust health monitoring features, making it great
              for health-conscious users. The touch screen responsiveness is
              top-notch, but the device struggles with connectivity issues at
              times.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
