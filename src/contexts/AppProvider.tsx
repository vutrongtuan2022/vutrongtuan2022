import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "@/redux/store";
import LoadingTopBar from "@/component/protected/LoadingTopBar";
import SplashScreen from "@/component/protected/SplashScreen";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function AppProvider({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <LoadingTopBar />
          <SplashScreen />
          <ToastContainer autoClose={3000} />
          {children}
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}

export default AppProvider;
