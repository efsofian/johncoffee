import "../styles/globals.css";
import { StoreProvider } from "../context/store/store.context";

function MyApp({ Component, pageProps }) {
	return (
		<StoreProvider>
			<Component {...pageProps} />
		</StoreProvider>
	);
}

export default MyApp;
