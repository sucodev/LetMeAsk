import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import "./styles/global.scss";

import { AuthStorage } from "./contexts/AuthContext";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import { PublicRoom } from "./pages/PublicRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthStorage>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
          <Route path="/public-rooms" component={PublicRoom} />
        </Switch>
      </AuthStorage>
    </BrowserRouter>
  );
}

export default App;
