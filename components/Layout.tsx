import { LayoutProps } from "types";

const Layout = ({ children }: LayoutProps) => {
  return <div className="min-h-screen min-w-[320px]">{children}</div>;
};

export default Layout;
