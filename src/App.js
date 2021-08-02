import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, SearchResultsPage } from "./pages";

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
