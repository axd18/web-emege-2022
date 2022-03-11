import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import Slide from "../components/Slide";
import Main from "../pages/main"

const Index = () => {
  return (
    <div className="text-gray-200">
      <Layout>
        <Navbar />
        <Slide />
        <Main />
      </Layout>
    </div>
  );
};

export default Index;
