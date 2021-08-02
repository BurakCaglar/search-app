import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchDetail } from "./components";
import { HomePage, SearchResultsPage, SearchDetailPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search-results" component={SearchResultsPage} />
          <Route path="/search-results/:name" component={SearchDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
