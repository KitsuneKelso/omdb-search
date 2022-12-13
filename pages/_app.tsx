import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useSearch } from "../hooks";

export default function App({ Component, pageProps }: AppProps) {
  useSearch();

  return <Component {...pageProps} />;
}
