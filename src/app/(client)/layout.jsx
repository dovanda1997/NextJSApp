import Link from "next/link";
import SearchForm from "../_shared/component/search-form/search-form";
import HeaderPage from "../_shared/component/header/page";
import Footer from "../_shared/component/footer/page";
import { Providers } from "../_shared/redux/provider";
import BackToTopButton from "../_shared/component/back-to-top/page";

export default function ClientLayout({ children }) {
  return (
    <>
      <Providers>
        <HeaderPage />
        <div style={{ marginTop: "30px" }}>{children}</div>
        <Footer />
        <BackToTopButton />
      </Providers>
    </>
  );
}
