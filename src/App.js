import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-teal-200 overflow-hidden w-full h-screen flex justify-center items-center">
      <div className=" text-white text-5xl font-semibold h-96 flex-col justify-center items-center">
        <div className="mb-20">Welcome</div>
        <div className="mb-10">Choose Your Crypto</div>
        <div className="flex-col">
          <div>
            <Link to="/btc">Bitcoin</Link>
          </div>
          <div>
            <Link to="/eth">Ethereum</Link>
          </div>
          <div>
            <Link to="/sol">Solana</Link>
          </div>
          <div>
            <Link to="/xrp">Ripple</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
