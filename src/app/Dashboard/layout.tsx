import HeaderDashboard from "@/components/HeaderDashboard";
import SideDashboard from "@/components/SideDashboard";

export default function DashboardLayout({children}: {children: React.ReactNode}){
    return(
        <>
            <SideDashboard />
            <HeaderDashboard />
            {children}
        </>
    );
}