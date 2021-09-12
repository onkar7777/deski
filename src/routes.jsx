import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import { MainTheme } from './Theme/MainTheme';
import { Home } from "./pages/Home";

export const Routes = () => {
    
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/"  exact>
                        <MainTheme>
                            <Home />
                        </MainTheme>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}