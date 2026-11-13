
// import React, { useState, useEffect } from 'react';

// // The API URL you provided
// const API_URL = 'https://hypothes.is/api/search?user=acct:didacticcloud@hypothes.is&tag=test&limit=50';

// /**
//  * Fetches and displays annotations from the Hypothes.is API.
//  */
// function HypothesisAnnotations() {
//   const [annotations, setAnnotations] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(API_URL);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // The Hypothes.is API returns an object with a 'rows' array of annotations
//         setAnnotations(data.rows || []);
//       } catch (e) {
//         console.error("Failed to fetch annotations:", e);
//         // Display a user-friendly error
//         setError(e.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchData();
//   }, []); // Empty dependency array means this runs only once after the initial render

//   if (isLoading) {
//     return <p>Loading annotations...</p>;
//   }

//   if (error) {
//     return <p style={{ color: 'red' }}>Error loading annotations: {error}</p>;
//   }

//   if (annotations.length === 0) {
//     return <p>No annotations found with the specified user and tag.</p>;
//   }

//   return (
//     <div>
//       <h3>Latest Annotations ({annotations.length})</h3>
//       {annotations.map((anno) => (
//         <div 
//           key={anno.id} 
//           style={{ 
//             marginBottom: '20px', 
//             borderLeft: '4px solid #03A9F4', 
//             padding: '10px',
//             backgroundColor: '#f5f5f5'
//           }}
//         >
//           {/* Display the original text that was annotated (the quote) */}
//           {anno.target && anno.target[0] && anno.target[0].selector && anno.target[0].selector[0] && anno.target[0].selector[0].exact && (
//             <p>
//               **Quote:** <blockquote style={{margin: 0, padding: '0 10px', fontSize: '0.9em'}}>
//                 <em style={{color: '#555'}}>{anno.target[0].selector[0].exact}</em>
//               </blockquote>
//             </p>
//           )}

//           {/* Display the annotation comment (the payload) */}
//           <p>
//             **Comment:** {anno.text ? anno.text : '*[No comment]*'}
//           </p>

//           <small>
//             <a href={anno.links.html} target="_blank" rel="noopener noreferrer">
//                 View Annotation
//             </a>
//             {' | '}
//             <span title={anno.uri}>Source Document</span>
//           </small>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HypothesisAnnotations;






























// import React, { useState, useEffect } from 'react';

// /**
//  * Fetches and displays annotations from the Hypothes.is API.
//  * @param {object} props - Component props
//  * @param {string} props.user - The Hypothes.is user account (e.g., 'acct:didacticcloud@hypothes.is')
//  * @param {string} props.tag - The tag to filter by (e.g., 'test')
//  * @param {number} [props.limit=50] - The maximum number of results to return
//  */
// function HypothesisAnnotations({ user, tag, limit = 50 }) {
//   const [annotations, setAnnotations] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Construct the API URL using the props
//   const API_URL = `https://hypothes.is/api/search?user=${user}&tag=${tag}&limit=${limit}`;

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(API_URL);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setAnnotations(data.rows || []);
//       } catch (e) {
//         console.error("Failed to fetch annotations:", e);
//         setError(e.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     // Reset state and fetch data whenever 'user', 'tag', or 'limit' changes
//     setIsLoading(true);
//     setError(null);
//     fetchData();
//   }, [user, tag, limit]); // DEPENDENCY ARRAY: Component re-fetches when these props change

//   // --- Rendering remains the same ---
//   if (isLoading) {
//     return <p>Loading annotations...</p>;
//   }

//   if (error) {
//     return <p style={{ color: 'red' }}>Error loading annotations: {error}</p>;
//   }

//   if (annotations.length === 0) {
//     return <p>No annotations found for user **{user}** and tag **{tag}**.</p>;
//   }

//   return (
//     <div>
//       <h3>Latest Annotations ({annotations.length})</h3>
//       {annotations.map((anno) => (
//         <div 
//           key={anno.id} 
//           style={{ 
//             marginBottom: '20px', 
//             borderLeft: '4px solid #03A9F4', 
//             padding: '10px',
//             backgroundColor: '#f5f5f5'
//           }}
//         >
//           {/* Display the annotation comment */}
//           <p>
//             **Comment:** {anno.text ? anno.text : '*[No comment]*'}
//           </p>

//           <small>
//             <a href={anno.links.html} target="_blank" rel="noopener noreferrer">
//                 View Annotation
//             </a>
//             {' | '}
//             Source: <a href={anno.uri} target="_blank" rel="noopener noreferrer">{new URL(anno.uri).hostname}</a>
//           </small>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HypothesisAnnotations;

// import React, { useState, useEffect } from 'react';

// /**
//  * Fetches and displays annotations from the Hypothes.is API.
//  * 
//  * @param {object} props Component props
//  * @param {string} props.user The Hypothes.is user account (e.g., 'acct:didacticcloud@hypothes.is')
//  * @param {string} props.tag The tag to filter by (e.g., 'test')
//  * @param {number} [props.limit=50] The maximum number of results to return
//  */
// function HypothesisAnnotations({ user, tag, limit = 50 }) {
//   const [annotations, setAnnotations] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_URL = `https://hypothes.is/api/search?user=${user}&tag=${tag}&limit=${limit}`;

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(API_URL);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setAnnotations(data.rows || []);
//       } catch (e) {
//         console.error("Failed to fetch annotations:", e);
//         setError(e.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     setIsLoading(true);
//     setError(null);
//     fetchData();
//   }, [user, tag, limit]);

//   if (isLoading) {
//     return <p style={{ color: '#E0E0E0' }}>Loading annotations...</p>;
//   }

//   if (error) {
//     return <p style={{ color: '#FF5252' }}>Error loading annotations: {error}</p>;
//   }

//   if (annotations.length === 0) {
//     return <p style={{ color: '#E0E0E0' }}>No annotations found for user <strong>{user}</strong> and tag <strong>{tag}</strong>.</p>;
//   }

//   return (
//     <div style={{ marginTop: '24px', marginBottom: '24px' }}>
//       <h3 style={{ color: '#FBC02D', marginBottom: '16px' }}>
//         Latest Annotations ({annotations.length})
//       </h3>
//       {annotations.map((anno) => (
//         <div 
//           key={anno.id} 
//           style={{ 
//             marginBottom: '16px', 
//             borderLeft: '4px solid #FBC02D', 
//             borderRadius: '0 8px 8px 0',
//             padding: '12px 16px',
//             backgroundColor: '#1E1E1E',
//             color: '#E0E0E0',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
//           }}
//         >
//           <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', lineHeight: '1.5' }}>
//             <strong style={{ color: '#FBC02D' }}>Comment:</strong> {anno.text ? anno.text : <em style={{ color: '#888' }}>[No comment]</em>}
//           </p>

//           <small style={{ color: '#AAA', fontSize: '0.8rem' }}>
//             <a 
//               href={anno.links.html} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               style={{ color: '#FFF59D', textDecoration: 'underline' }}
//             >
//               View Annotation
//             </a>
//             {' | '}
//             Source: <a 
//               href={anno.uri} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               style={{ color: '#FFF59D', textDecoration: 'underline' }}
//             >
//               {new URL(anno.uri).hostname}
//             </a>
//           </small>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HypothesisAnnotations;


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