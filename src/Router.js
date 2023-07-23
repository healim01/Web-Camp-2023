import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Funding from './routes/Funding';
import Home from './routes/Home';
import CreateFund from './routes/CreateFund';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/funding/:fundingId">
          <Funding />
        </Route>
        {/* <Route exact path="/room/:roomId/funding/:fundingId">
          <Funding />
        </Route> */}
        <Route exact path="/create">
          <CreateFund />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
