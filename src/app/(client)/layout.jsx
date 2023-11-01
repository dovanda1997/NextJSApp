import Link from "next/link";
import SearchForm from "../_shared/component/search-form/search-form";
import HeaderPage from "../_shared/component/header/page";
import Footer from "../_shared/component/footer/page";

export default function ClientLayout({ children }) {
  return (
    <>
      <HeaderPage />
      <div style={{ marginTop: "30px" }}  >{children}</div>
      <Footer />
    </>
  );
}
