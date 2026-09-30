import { Head, Link } from '@inertiajs/react';
import { Page, Panel, Pill } from '@/components/studyhub/ui';
import { adminGroups, adminUsers } from '@/data/mock';

/** Admin dashboard. Route: /admin/dashboard  (role:admin only). */
export default function AdminDashboard() {
    const stats = [
        ['Total Users', adminUsers.length],
        ['Active Groups', adminGroups.length],
        ['Flagged Groups', adminGroups.filter((g) => g.status === 'Flagged').length],
        ['Sessions This Week', 28],
    ];

    return (
        <>
            <Head title="Admin Dashboard" />
            <Page title="Admin Dashboard" subtitle="Platform overview (mock data).">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map(([label, value]) => (
                        <Panel key={label}><p className="text-3xl font-semibold text-blue-700">{value}</p><p className="text-muted-foreground text-sm">{label}</p></Panel>
                    ))}
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                    <Panel>
                        <div className="mb-3 flex justify-between"><h2 className="font-semibold">Newest users</h2><Link href="/admin/users" className="text-primary text-xs">Manage</Link></div>
                        <ul className="divide-y text-sm">
                            {adminUsers.slice(0, 4).map((u) => <li key={u.id} className="flex justify-between py-2"><span>{u.name}</span><Pill tone="gray">{u.role}</Pill></li>)}
                        </ul>
                    </Panel>
                    <Panel>
                        <div className="mb-3 flex justify-between"><h2 className="font-semibold">Groups needing review</h2><Link href="/admin/groups" className="text-primary text-xs">Open</Link></div>
                        <ul className="divide-y text-sm">
                            {adminGroups.filter((g) => g.reports > 0).map((g) => <li key={g.id} className="flex justify-between py-2"><span>{g.name}</span><Pill tone="red">{g.reports} reports</Pill></li>)}
                        </ul>
                    </Panel>
                </div>
            </Page>
        </>
    );
}

AdminDashboard.layout = { breadcrumbs: [{ title: 'Admin Dashboard', href: '/admin/dashboard' }] };
