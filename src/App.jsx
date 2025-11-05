import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/ToBorrow";
import LoginPage from "./pages/LoginPage";
import DebtsPage from "./pages/ToLend";
import TransactionPage from "./pages/TransactionPage";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="debts" element={<DebtsPage />} />
        <Route path="transaction" element={<TransactionPage />} />
        <Route />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
