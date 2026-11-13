const API_KEY = process.env.HYPOTHESIS_API_KEY; 
const HYPOTHESIS_API_BASE = 'https://api.hypothesis.is/api/annotations/';

export default async function handler(req, res) {
  // CORS setup (required for client-side fetch)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHead(204);
    res.end();
    return;
  }
  
  const url = new URL(req.url, `http://${req.headers.host}`);
  const annotationId = url.searchParams.get('id');

  if (!API_KEY || !annotationId) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'Missing API key or annotation ID.' }));
    return;
  }

  try {
    const response = await fetch(`${HYPOTHESIS_API_BASE}${annotationId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`, // Securely attach the key
        'Accept': 'application/json',
      },
    });

    const data = await response.json();
    res.writeHead(response.status);
    res.end(JSON.stringify(data));

  } catch (error) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'Internal server error.' }));
  }
}