import { Head } from '@inertiajs/react';
import { Page, Panel, Pill } from '@/components/studyhub/ui';
import { adminGroups } from '@/data/mock';

/** Admin group moderation list (mock). */
export default function AdminGroups() {
    return (
        <>
            <Head title="Manage Groups" />
            <Page title="Groups" subtitle="Review reported or flagged groups.">
                <Panel>
                    <table className="w-full text-sm">
                        <thead className="text-muted-foreground text-left text-xs"><tr><th className="pb-2">Group</th><th>Owner</th><th>Members</th><th>Reports</th><th>Status</th></tr></thead>
                        <tbody className="divide-y">
                            {adminGroups.map((g) => (
                                <tr key={g.id}><td className="py-2">{g.name}</td><td>{g.owner}</td><td>{g.members}</td><td>{g.reports}</td><td><Pill tone={g.status === 'Active' ? 'green' : 'red'}>{g.status}</Pill></td></tr>
                            ))}
                        </tbody>
                    </table>
                </Panel>
            </Page>
        </>
    );
}

AdminGroups.layout = { breadcrumbs: [{ title: 'Groups', href: '/admin/groups' }] };
