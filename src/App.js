import logo from './logo.svg';
import {Excuse} from './Excuse/Excuse'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnReconnect:false,
    },
  },
});
function App() {
  return (
    <>
        <QueryClientProvider client={client}>
          <Excuse/>
          <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Excuse />} />


          </Routes>
        </Router>
        </QueryClientProvider>

    </>
  );
}

export default App;

