import Head from "next/head";
import { Fragment, ReactElement } from "react";
import Home from "@/component/pages/Home";
import BaseLayout from "@/component/layouts/BaseLayout/BaseLayout";

export default function Page() {
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
}

Page.getLayout = function (Page: ReactElement) {
  return <BaseLayout title="Trang chủ">{Page}</BaseLayout>;
};
