import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tags.css';
import { useNavigate } from 'react-router-dom';

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axios.get('/api/v1/forum/tags');
        if (Array.isArray(res.data)) {
          setTags(res.data);
        } else {
          setError('Invalid data format received.');
        }
      } catch (err) {
        console.error('Error fetching tags:', err);
        setError('Failed to load tags. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  if (loading) return <div className="tags-page">Loading tags...</div>;
  if (error) return <div className="tags-page error">{error}</div>;

  return (
    <div className="tags-page">
      <h2 className="tags-title">Explore Tags</h2>
      <div className="tag-grid">
        {tags.map((tag, index) => (
          <div
            className="tag-card"
            key={`${tag}-${index}`}
            onClick={() => navigate(`/tags/${tag}`)}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
