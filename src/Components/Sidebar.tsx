import { User } from '../types/User';

type SidebarProps = {
    repoOwner: User | undefined;
}

export const Sidebar = ({ repoOwner }: SidebarProps) => {
    return (
        <div style= {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={repoOwner?.avatar_url} alt="avatar"  style={{ width: "75%", height: "75%", borderRadius: '50%' }}/>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h2 style={{ textAlign: 'left' }}>{ repoOwner?.name }</h2>
                <h3 style={{ textAlign: 'left' }}>{ repoOwner?.username }</h3>
                <h4 style={{ textAlign: 'left' }}>{ repoOwner?.bio }</h4>
            </div>

        </div>
    );
}