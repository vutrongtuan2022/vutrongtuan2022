import Head from "next/head";
import { Fragment, ReactElement } from "react";
import BaseLayout from "@/component/layouts/BaseLayout/BaseLayout";
import CreatePageUser from "@/component/pages/user/CreatePageUser";

export default function Page() {
  return (
    <Fragment>
      <Head>
        <title>Thêm mới nhân viên</title>
        <meta name="description" content="Thêm mới nhân viên" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreatePageUser />
    </Fragment>
  );
}

Page.getLayout = function (Page: ReactElement) {
  return <BaseLayout title="Thêm mới nhân viên">{Page}</BaseLayout>;
};
