import {Header, Slider, Footer, Text} from "./components/config";

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Slider />
        <Text
            element="p"
            className="first"
            strong
        >
            <span>1111111111111111</span>
        </Text>
        <Text
            element="div"
            className="second"
            italic
        >
            <p>Тестовый текст</p>
        </Text>
        <Text
            element="span"
            className="third"
            disabled
        >
            <p>333333333333333</p>
        </Text>
      <Footer />
    </>
  );
}

export default App;
