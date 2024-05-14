import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Routing } from "../routing";
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
};
