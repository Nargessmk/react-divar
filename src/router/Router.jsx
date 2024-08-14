import { Route, Routes } from "react-router-dom";
import AuthPage from "pages/AuthPage";
import Homepage from "pages/Homepage";
import DashboardPage from "pages/DashboardPage";
import NotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";

const Router = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  console.log({data, isLoading});

  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
