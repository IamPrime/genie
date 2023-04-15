import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { tokens } from "@/pages/theme";
import Link from "next/link";

{/** Importing MUI Icons */ }
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import CalendarOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            onClick={() => setSelected(title)}
            active={selected === title}
            style={{ color: colors.grey[200] }}
            icon={icon}
        >
            <Typography>
                {title}
            </Typography>
        </MenuItem>
    )
}


const SidePanel = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [user, loading] = useAuthState(auth);

    // Check if sidebar is collapsed or not
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Check which item/page we are currently at
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        style={{ color: colors.grey[100] }}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    >
                        {!isCollapsed && (
                            <Box className="flex justify-between items-center">
                                <Typography
                                    className="text-center"
                                    variant="h4"
                                    color={colors.blueAccent[700]}>
                                    ADMINISTRATOR
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOpenOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/** Admin Details */}
                    {!isCollapsed && (
                        <Box className="mb-24">
                            <Box className="flex justify-center items-center">
                                <img
                                    className="w-24 h-24 cursor-pointer rounded-full"
                                    src={user.photoURL}
                                    alt="Avatar"
                                />
                            </Box>
                            <Box className="text-center">
                                <Typography
                                    className="font-bold mt-2"
                                    variant="h2"
                                    color={colors.blueAccent[400]}
                                >
                                    Prime
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color={colors.greenAccent[500]}
                                >
                                    Project Lead
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color={colors.greenAccent[600]}
                                >
                                    Team Blueblood
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/** Menu Items */}
                    <Box
                        paddingLeft={isCollapsed ? undefined : "10%"}
                    >
                        <Item
                            title="Dashboard"
                            to="/admin/Dashboard"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Manage Data
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/admin/Team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Manage Quiz"
                            to="/admin/Quiz"
                            icon={<QuizOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/admin/Calendar"
                            icon={<CalendarOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Visualize Data
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/admin/Data#bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/admin/Data#pie"
                            icon={<PieChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Timeline"
                            to="/admin/Data#timeline"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geo Data"
                            to="/admin/Geo"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export { SidePanel };