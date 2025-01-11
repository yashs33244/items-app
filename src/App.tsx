import "./App.css";
import ItemListManager from "./components/ItemsManager";

// const slides = [
//   {
//     title: "Slide 1",
//     content: "Slide 1 content",
//     image: "https://source.unsplash.com/1600x900/?nature,water",
//   },
//   {
//     title: "Slide 2",
//     content: "Slide 2 content",
//     image: "https://source.unsplash.com/1600x900/?nature,forest",
//   },
//   {
//     title: "Slide 3",
//     content: "Slide 3 content",
//     image: "https://source.unsplash.com/1600x900/?nature,mountain",
//   },
//   {
//     title: "Slide 4",
//     content: "Slide 4 content",
//     image: "https://source.unsplash.com/1600x900/?nature,beach",
//   },
// ];

function App() {
  return (
    <main className="py-10">
      <ItemListManager />
      {/* <Slideshow slides={slides} /> */}
    </main>
  );
}

export default App;
