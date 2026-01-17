import { Box } from "@mui/material";
import Sidebar from "../components/sidebar";

function MainLayout({ children }) {
  return (
    <Box>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box>{children}</Box>
    </Box>
  );
}

export default MainLayout;
