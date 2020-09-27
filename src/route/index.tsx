import {ConnectedRouter} from "connected-react-router";
import {get} from "lodash";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Layout from "../components/Layout";
import LazyComponent from "../components/LazyComponent";

const routes: any[] = [
  {
    path: "/index",
    component: React.lazy(() => import("../pages/index")),
  },
  {
    path: "/home",
    component: React.lazy(() => import("../pages/home")),
  },
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("../pages/index")),
  },
];

function preHandler(meta: any) {
  document.title = get(meta, "title", "sub");
}

export const Router = ({history}: any) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((RouteItem) => (
          <Route
            key={RouteItem.path}
            path={RouteItem.path}
            exact={RouteItem.exact}
            render={() => {
              preHandler(RouteItem.meta);
              return (
                <LazyComponent>
                  <Layout isFooter={RouteItem.meta?.footer || false}>
                    <RouteItem.component meta={RouteItem.meta} />
                  </Layout>
                </LazyComponent>
              );
            }}
          />
        ))}
        <Redirect to='/' />
      </Switch>
    </ConnectedRouter>
  );
};
