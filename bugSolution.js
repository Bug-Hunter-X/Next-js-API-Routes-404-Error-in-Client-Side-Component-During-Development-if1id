```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a test paragraph.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data') // Corrected path
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Data from API</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```