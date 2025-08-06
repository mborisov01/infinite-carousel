import InfiniteCarousel, { ImageItem } from "./components/InfiniteCarousel";
import { useFetch } from "./components/useFetch";
import './App.css';

function App() {
  const { data, loading, error } = useFetch<ImageItem[]>("https://picsum.photos/v2/list");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="App">
      <h1>Infinite Carousel</h1>
        <InfiniteCarousel
          images={data ?? []}
          cloneCount={2}
          itemWidth={300}
          scrollSpeed={18}
        />
    </div>
  );
}

export default App;
