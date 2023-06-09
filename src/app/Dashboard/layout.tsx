import HeaderDashboard from "@/components/HeaderDashboard";
import SideDashboard from "@/components/SideDashboard";

export default function DashboardLayout({children}: {children: React.ReactNode}){
    return(
        <main className="flex flex-1 h-screen">
            <SideDashboard />
            <div className="flex-1">
                <HeaderDashboard />
                {children}
            </div>
        </main>
    );
}