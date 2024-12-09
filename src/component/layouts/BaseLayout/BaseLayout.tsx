import React, { createContext, useState } from "react";
import styles from "./BaseLayout.module.scss";
import { PropsBaseLayout, TContextBaseLayout } from "./interface";
import Header from "./component/Header";
import Footer from "./component/Footer";

export const ContextBaseLayout = createContext<TContextBaseLayout>({});

function BaseLayout({ children, title }: PropsBaseLayout) {
  const [showFull, setShowFull] = useState(true);
  return (
    <ContextBaseLayout.Provider value={{ showFull, setShowFull }}>
      <div>
        <Header title={title} />
        <main>{children}</main>
        <Footer />
      </div>
    </ContextBaseLayout.Provider>
  );
}

export default BaseLayout;
