import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Finish from "../components/Finish/Finish";
import Main from "../components/Main/Main";


export default function Router() {
    return (
export default function Router() {
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">

                        < Main />
                    </Route>

                    <Route exact path="/cliente">
                        <Finish />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );

}

