import toast, { Toaster } from "react-hot-toast";
import { AppLoadingModal, AppSnackBarMessage } from "@/components/global";
import { AppLayout } from "@/components/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: any) {
  const Layout = Component.Layout || AppLayout;

  return (
    <Layout>
      <Component {...pageProps} />
      <AppLoadingModal />
      <AppSnackBarMessage />
    </Layout>
  );
}
