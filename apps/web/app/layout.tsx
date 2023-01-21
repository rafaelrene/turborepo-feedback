import "./global.css";

import React, { ReactNode } from "react";

type TRootLayoutProps = { children: ReactNode };

const RootLayout = ({ children }: TRootLayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
