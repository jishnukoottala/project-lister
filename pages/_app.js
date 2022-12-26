import "../styles/globals.css";
import Layout from "../components/common/Layout";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
