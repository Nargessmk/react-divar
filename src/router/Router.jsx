import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "pages/AuthPage";
import Homepage from "pages/Homepage";
import DashboardPage from "pages/DashboardPage";
import NotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import Loader from "components/module/Loader";

const Router = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  console.log({ data, isLoading });

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
