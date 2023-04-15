{/** This is a reusable Header component for Dashboard */ }
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "@/pages/theme";

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box className="mb-3">
            <Box className="grid justify-center items-center">
                <Typography
                    className="font-bold mr-1"
                    variant="h2"
                    color={colors.grey[100]}
                >
                    {title}
                </Typography>
                <Typography
                    className="font-semibold"
                    variant="h4"
                    color={colors.greenAccent[400]}
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    )
}

export { Header }