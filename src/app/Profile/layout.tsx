import SideDashboard from "@/components/SideDashboard";

export default function ProfileLayout({children}: {children: React.ReactNode}){
    return(
        <main className="flex flex-1 h-screen">
            <SideDashboard />
            <div className="flex-1">
                {children}
            </div>
        </main>
    );
}