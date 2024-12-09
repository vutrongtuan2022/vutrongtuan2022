import { useRouter } from "next/router";
import NProgress from "nprogress";
import { memo, useEffect } from "react";

function LoadingTopBar() {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleStart = (url: any) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return null;
}

export default memo(LoadingTopBar);
