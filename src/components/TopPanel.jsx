import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "@/pages/theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import SearchIcon from "@mui/icons-material/Search"

const TopPanel = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box className="flex justify-between p-2">
            {/** Search bar */}
            <Box
                className="flex rounded"
                backgroundColor={colors.primary[400]}
            >
                <InputBase className=" flex ml-2" placeholder="Search" />
                <IconButton className="p-1" type="button">
                    <SearchIcon />
                </IconButton>
            </Box>
            {/** Toggle, Notification, Settings and Avatar Icons*/}
            <Box className="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>

                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>

                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export { TopPanel };