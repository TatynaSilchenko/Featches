import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import List from './pages/List';
import Input from "./pages/Input";
import Button from "./pages/Button";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    PRE_LIST:'/pre-list',
    PRE_TEXT_INPUT:'/pre-text-input',
    PRE_BUTTON:'/pre-button'
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
            <Route path={PATH.PRE_LIST}  render={() => <List/>}/>
            <Route path={PATH.PRE_TEXT_INPUT}  render={() => <Input/>}/>
            <Route path={PATH.PRE_BUTTON} exact render={() => <Button/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
