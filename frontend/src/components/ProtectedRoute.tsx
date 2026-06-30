import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  children: ReactNode;
  redirectTo?: string;
};

export default function ProtectedRoute({
  isAuthenticated,
  children,
  redirectTo = "/login",
}: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
