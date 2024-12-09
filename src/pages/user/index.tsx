import Head from "next/head";
import { Fragment, ReactElement } from "react";
import BaseLayout from "@/component/layouts/BaseLayout/BaseLayout";
import MainPageUser from "@/component/pages/user/MainPageUser";

export default function Page() {
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

Page.getLayout = function (Page: ReactElement) {
  return <BaseLayout title="Nhân viên">{Page}</BaseLayout>;
};
