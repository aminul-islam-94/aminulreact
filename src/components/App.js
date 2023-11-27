import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Nav from "./Nav";

export default function App() {
  return (
    <div className="container ml-12">
      <Header />
      <Nav />
      <Menu />
      <Footer />
    </div>
  );
}
