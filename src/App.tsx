import { Button, Result, Spin } from "antd";
import { Suspense } from "react";
import { Link, Navigate, Route, Routes } from "react-router";
import { Fragment } from "react/jsx-runtime";

import paths from "@/config/paths";
import { privateRoutes, publicRoutes } from "@/routes";
import { RouteType } from "@/types/routes";

function App() {
  const publicRoute = publicRoutes.map((route: RouteType) => {
    const Page = route.component;
    const Layout = route.layout ?? Fragment;

    return (
      <Route
        element={
          <Layout>
            <Page />
          </Layout>
        }
        key={route.path}
        path={route.path}
      />
    );
  });

  const privateRoute = privateRoutes.map((route: RouteType) => {
    const Page = route.component;
    const Layout = route.layout ?? Fragment;

    return (
      <Route
        element={
          <Layout>
            <Page />
          </Layout>
        }
        key={route.path}
        path={route.path}
      />
    );
  });

  return (
    <div className="App">
      <Suspense fallback={<Spin size="large" />}>
        <Routes>
          <Route element={<Navigate to="/product" />} path="/" />
          {publicRoute}
          {privateRoute}
          <Route
            element={
              <Result
                className="not-found"
                extra={
                  <Link to={paths.home}>
                    <Button type="primary">Về trang chủ</Button>
                  </Link>
                }
                status="404"
                subTitle="Trang bạn truy cập không tồn tại"
                title="404"
              />
            }
            path="*"
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
