import Head from "next/head";
import { Fragment, ReactElement } from "react";
import BaseLayout from "@/component/layouts/BaseLayout/BaseLayout";
import UpdatePageUser from "@/component/pages/user/UpdatePageUser/UpdatePageUser";

export default function Page() {
  return (
    <Fragment>
      <Head>
        <title>Cập nhật nhân viên</title>
        <meta name="description" content="Cập nhật nhân viên" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UpdatePageUser />
    </Fragment>
  );
}

Page.getLayout = function (Page: ReactElement) {
  return <BaseLayout title="Cập nhật nhân viên">{Page}</BaseLayout>;
};
