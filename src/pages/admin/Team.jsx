import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { tokens } from "@/pages/theme"
import { adminData } from "@/assets/data"

import AdminPanelOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header"

export default function Team() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)


    return (
        <Box>
            <Header title="TEAM" subtitle="Manage Team Members" />
        </Box>
    )
}