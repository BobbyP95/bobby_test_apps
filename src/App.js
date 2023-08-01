// Navigation Bar Component
import {Navbar} from './Navbar/Navbar';

// Components for other pages
import {Excuse} from './Excuse/Excuse';
import {Books} from './Books/Books';
import { Welcome } from "./Welcome/Welcome";
import { Profile } from "./Profile/Profile";

// react hooks
import {useState, createContext} from 'react';

// Hooks from external libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style Sheet for generic styles
import './App.css';

//Creating MainContext jsx for App(return section) 
export const MainContext = createContext();

// Custom update function for user profile
export const update = (obj, prev) => {
  console.log({name: obj.fullName, email:obj.email});
  return { ...prev, name: obj.fullName, email:obj.email };
};

// Default string for user profile
const defaultUser = {
  name: "Please Login @ Profile",
  email: '',
};

// Creating client for "QueryClientProvider" jsx in app(return section)
const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnReconnect:false,
    },
  },
});

function App() {
  
  const [user, setUser] = useState(defaultUser);
  return (
    <>
        <MainContext.Provider value={{user, setUser}}>
        <QueryClientProvider client={client}>
          <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/books" element={<Books />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/excuse" element={<Excuse/>} />
          </Routes>
        </Router>
        </QueryClientProvider>

        </MainContext.Provider>
    </>
  );
}

export default App;

