import '@/styles/globals.css'
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
export default function App({ Component, pageProps }) {
  return <ConfigProvider
  theme={{
    token: {
      colorPrimary: "#231942",
      fontFamily: "Inter",
    },
    components: {
     Input:{
      colorBorder:"#231942"
     },
     InputNumber:{
      colorBorder:"#231942"
     }
    },
  }}
> <Component {...pageProps} />
</ConfigProvider>
}
