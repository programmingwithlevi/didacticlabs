import React, { useState, useEffect } from 'react';

/**
 * Dual-mode Hypothesis component:
 * 1. Single mode: Pass `annotationId="..."`
 * 2. Feed mode: Pass `user="..."` and optional `tag="..."`
 */
export default function AnnotationEmbedder({ annotationId, user, tag, limit = 50 }) {
  const [annotations, setAnnotations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let apiUrl = '';
        
        if (annotationId) {
          // Single annotation endpoint
          apiUrl = `https://hypothes.is/api/annotations/${annotationId}`;
        } else if (user) {
          // Search feed endpoint
          apiUrl = `https://hypothes.is/api/search?user=${user}${tag ? `&tag=${tag}` : ''}&limit=${limit}`;
        } else {
          setIsLoading(false);
          return;
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        // Single endpoint returns an object; search endpoint returns { rows: [...] }
        if (annotationId) {
          setAnnotations(data && data.id ? [data] : []);
        } else {
          setAnnotations(data.rows || []);
        }
      } catch (e) {
        console.error("Failed to fetch annotations:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    setError(null);
    fetchData();
  }, [annotationId, user, tag, limit]);

  if (isLoading) {
    return <p style={{ color: '#E0E0E0' }}>Loading annotations...</p>;
  }

  if (error) {
    return <p style={{ color: '#FF5252' }}>Error loading annotations: {error}</p>;
  }

  if (annotations.length === 0) {
    return (
      <p style={{ color: '#E0E0E0' }}>
        {annotationId 
          ? `No annotation found for ID ${annotationId}` 
          : `No annotations found for user ${user}${tag ? ` with tag ${tag}` : ''}.`}
      </p>
    );
  }

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      {annotations.map((anno) => {
        // Extract exact highlighted quote snippet if available
        let exactQuote = null;
        if (anno.target && anno.target.length > 0) {
          const selectors = anno.target[0].selector || [];
          const quoteSelector = selectors.find((s) => s.type === 'TextQuoteSelector');
          if (quoteSelector) {
            exactQuote = quoteSelector.exact;
          }
        }

        return (
          <div 
            key={anno.id} 
            style={{ 
              marginBottom: '16px', 
              borderLeft: '4px solid #FBC02D', 
              borderRadius: '0 8px 8px 0',
              padding: '14px 18px',
              backgroundColor: '#1E1E1E',
              color: '#E0E0E0',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {exactQuote && (
              <blockquote 
                style={{ 
                  margin: '0 0 12px 0', 
                  paddingLeft: '10px',
                  borderLeft: '2px solid #FFF59D',
                  color: '#FFF59D',
                  fontStyle: 'italic',
                  fontSize: '0.95rem'
                }}
              >
                "{exactQuote}"
              </blockquote>
            )}

            <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', lineHeight: '1.5' }}>
              <strong style={{ color: '#FBC02D' }}>Notes:</strong> {anno.text ? anno.text : <em style={{ color: '#888' }}>[No comment]</em>}
            </p>

            <small style={{ color: '#AAA', fontSize: '0.8rem' }}>
              <a 
                href={anno.links?.html} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#FFF59D', textDecoration: 'underline' }}
              >
                View on Hypothesis
              </a>
            </small>
          </div>
        );
      })}
    </div>
  );
}