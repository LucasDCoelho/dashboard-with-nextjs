import AvatarImg from '@/components/AvatarImg'

const HeaderDashboard = () => {
    return (
        <>
            <header className='flex h-20 border-b-slate-800 items-center justify-between px-5 bg-slate-500'>
                <h1 className="text-3xl font-bold">Login</h1>
                <AvatarImg img="B"/>  
            </header>
        </>
    );
}

export default HeaderDashboard;