import { Head, Link, usePage } from '@inertiajs/react';
import { Page, Panel, Pill } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { initialNotifications, myGroups, upcomingSessions } from '@/data/mock';

/** Student dashboard (mock data). Route: /dashboard  (role:student) */
export default function Dashboard() {
    const { auth } = usePage().props;
    const stats = [
        ['My Groups', myGroups.length],
        ['Study Sessions', 5],
        ['Tasks Due', 3],
        ['Group Rating', 4.8],
    ];

    return (
        <>
            <Head title="Dashboard" />
            <Page title={`Welcome back, ${auth.user.name.split(' ')[0]}!`} subtitle="Let's make today productive.">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map(([label, value]) => (
                        <Panel key={label}>
                            <p className="text-3xl font-semibold text-blue-700">{value}</p>
                            <p className="text-muted-foreground text-sm">{label}</p>
                        </Panel>
                    ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    <Panel className="lg:col-span-2">
                        <h2 className="mb-3 font-semibold">Upcoming Study Sessions</h2>
                        <ul className="divide-y">
                            {upcomingSessions.map((s) => (
                                <li key={s.id} className="flex items-center justify-between py-3">
                                    <div>
                                        <p className="text-sm font-medium">{s.group}</p>
                                        <p className="text-muted-foreground text-xs">{s.when}</p>
                                    </div>
                                    <Button size="sm">Join</Button>
                                </li>
                            ))}
                        </ul>
                    </Panel>

                    <Panel>
                        <div className="mb-3 flex items-center justify-between">
                            <h2 className="font-semibold">Recent Notifications</h2>
                            <Link href="/notifications" className="text-primary text-xs">View all</Link>
                        </div>
                        <ul className="space-y-3">
                            {initialNotifications.slice(0, 4).map((n) => (
                                <li key={n.id} className="text-sm">
                                    <p className="font-medium">{n.title}</p>
                                    <p className="text-muted-foreground text-xs">{n.time}</p>
                                </li>
                            ))}
                        </ul>
                    </Panel>
                </div>

                <Panel>
                    <h2 className="mb-3 font-semibold">My Groups</h2>
                    <div className="flex flex-wrap gap-2">
                        {myGroups.map((g) => <Pill key={g.id}>{g.name}</Pill>)}
                    </div>
                </Panel>
            </Page>
        </>
    );
}

Dashboard.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }] };
