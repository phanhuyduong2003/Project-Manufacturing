import paths from "@/config/paths";
import { publicRoutes } from "@/routes";
import { RouteType } from "@/types/routes";
import { Button, Result, Spin } from "antd";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router";
import { Fragment } from "react/jsx-runtime";

function App() {
  const publicRoute = publicRoutes.map((route: RouteType) => {
    const Page = route.component;
    const Layout = route.layout ?? Fragment;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    );
  });

  return (
    <div className="App">
      <Suspense fallback={<Spin size="large" />}>
        <Routes>
          {publicRoute}
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
