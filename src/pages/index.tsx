import BaseLayout from "@/component/layouts/BaseLayout/BaseLayout";
import MainPageUser from "@/component/pages/user/MainPageUser";
import Head from "next/head";
import React, { Fragment, ReactElement } from "react";

function Page() {
  return (
    <Fragment>
      <Head>
        <title>Nhân viên</title>
        <meta name="description" content="Nhân viên" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPageUser />
    </Fragment>
  );
}

export default Page;

Page.getLayout = function (Page: ReactElement) {
  return <BaseLayout title="Nhân viên">{Page}</BaseLayout>;
};
