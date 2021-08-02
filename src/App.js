import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search-results" component={SearchResultsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
