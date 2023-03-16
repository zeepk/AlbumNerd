import { AppType } from "next/app";

import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/nextjs";

import "~/styles/globals.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Navbar from "~/components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <ClerkProvider {...pageProps}>
        <Navbar />
        <Component {...pageProps} />
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
