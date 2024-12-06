import Head from "next/head";
import React, { Fragment, ReactElement } from "react";

import BaseLayout from "@/component/layouts/BaseLayout/BaseLayout";
import Home from "@/component/pages/Home";

export const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Trang chủ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Fragment>
  );
};

index.getLayout = function (Page: ReactElement) {
  return <BaseLayout title="Trang chủ">{Page}</BaseLayout>;
};
