import { useState } from "react";
import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { ColorModeContext, useMode } from "@/pages/theme";
import { CssBaseline, ThemeProvider } from "@mui/material/";
import { SidePanel, TopPanel, Header } from "@/components";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    const [theme, colorMode] = useMode();

    const [isSidebar, setIsSidebar] = useState(true);

    if (loading) return <h1>A.D.M.I.N.I.S.T.R.A.T.O.R......</h1>;
    if (!user) route.push("/");
    if (user) {
        return (
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ProSidebarProvider>
                        <main>
                            <TopPanel setIsSidebar={setIsSidebar} />
                            <Header title="ADMIN DASHBOARD" subtitle="Welcome to your Dashboard" />
                            <SidePanel setIsSidebar={setIsSidebar} />
                        </main>
                    </ProSidebarProvider>
                </ThemeProvider>
            </ColorModeContext.Provider>
        );
    }
}
