
// Hooks from external libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navigation Bar Component


// Components for other pages
import { Excuse } from "./Excuse/Excuse";
import { Books } from "./Books/Books";
import  Home from "./Home/Home";
import { Profile } from "./Profile/Profile";
import Countries from "./Countries/Countries";
import CountryDetail from "./Countries/CountryDetail/CountryDetail";
import Header from "./Header/Header";
// react hooks
import { useState, createContext } from "react";



// Style Sheet for generic styles
import "./App.css";

//Creating MainContext jsx for App(return section)
export const MainContext = createContext();

// Custom update function for user profile
export const update = (obj, prev) => {
  console.log({ name: obj.fullName, email: obj.email });
  return { ...prev, name: obj.fullName, email: obj.email };
};

// Default string for user profile
const defaultUser = {
  name: "Please Login @ Profile",
  email: "",
};

// Creating client for "QueryClientProvider" jsx in app(return section)
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const browserData = [
  window.localStorage.getItem("localChosen"),
  window.localStorage.getItem("localNations"),
];

function App() {
  const [filterValue, setFilterValue] = useState("All");
  const [theme, setTheme] = useState("dark");
  const [searchInput, setSearchInput] = useState("");
  const [api, setApi] = useState("https://restcountries.com/v3.1/all");
  const [chosen, setChosen] = useState(JSON.parse(browserData[0]));
  const [nationsData, setNationsData] = useState();

  const toggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };
  const [user, setUser] = useState(defaultUser);

  return (
    <div className={theme}>
      <MainContext.Provider
        value={{
          user,
          setUser,
          filterValue,
          theme,
          setFilterValue,
          api,
          setApi,
          setSearchInput,
          searchInput,
          chosen,
          setChosen,
          setNationsData,
          nationsData,
        }}
      >
        <QueryClientProvider client={client}>
          <Router>
            <Header theme={theme} handleClick={toggle}/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/books" element={<Books />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/excuse" element={<Excuse />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/count" element={<CountryDetail />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </MainContext.Provider>
    </div>
  );
}

export default App;
