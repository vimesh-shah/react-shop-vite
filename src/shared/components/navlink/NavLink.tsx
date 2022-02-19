import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ children, to, ...props }: NavLinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={match ? "active" : ""} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
