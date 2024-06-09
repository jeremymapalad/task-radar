import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "@contexts/authContext";
import { useNavigate } from "react-router-dom";

interface RouteGuardProps extends PropsWithChildren {
  redirectTo: string;
  requireAuth?: boolean;
}

const RouteGuard = ({
  children,
  redirectTo,
  requireAuth = true,
}: RouteGuardProps) => {
  const { isUserLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if ((!requireAuth && isUserLoggedIn) || (requireAuth && !isUserLoggedIn)) {
      navigate(redirectTo, { replace: true });
    }
  }, [navigate, redirectTo, isUserLoggedIn, requireAuth]);

  return isLoading ? "" : children;
};

export default RouteGuard;
