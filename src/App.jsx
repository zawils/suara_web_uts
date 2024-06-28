import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PageDashboard from "./pages/PageDashboard";
import PageLogin from "./pages/PageLogin";
import PageBeranda from "./pages/PageBeranda";
import PageAccount from "./pages/PageAccount";
import PageLaporan from "./pages/PageLaporan";
import PageCreate from "./pages/PageCreate";
import PageCp from "./pages/PageCp";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Dashboard";
        metaDescription = "Welcome to the Dashboard";
        break;
      case "/pagelogin":
        title = "Login";
        metaDescription = "Please log in to your account";
        break;
      case "/pageberanda":
        title = "Beranda";
        metaDescription = "Welcome to Beranda";
        break;
      case "/pageaccount":
        title = "Account";
        metaDescription = "Manage your account here";
        break;
      case "/pagelaporan":
        title = "Laporan";
        metaDescription = "View your reports here";
        break;
      case "/pagecreate":
        title = "Create";
        metaDescription = "Create a new item";
        break;
      case "/pagecp":
        title = "Lupa Password";
        metaDescription = "Ganti Password";
        break;
      default:
        title = "App";
        metaDescription = "App description";
        break;
    }

    if (title) {
      document.title = title;
    }

    let metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.name = 'description';
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.content = metaDescription;

  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageDashboard />} />
        <Route path="/pagelogin" element={<PageLogin />} />
        <Route path="/pageberanda" element={<PageBeranda />} />
        <Route path="/pageaccount" element={<PageAccount />} />
        <Route path="/pagelaporan" element={<PageLaporan />} />
        <Route path="/pagecreate" element={<PageCreate />} />
        <Route path="/pagecp" element={<PageCp />} />
      </Routes>
    </div>
  );
}

export default App;
