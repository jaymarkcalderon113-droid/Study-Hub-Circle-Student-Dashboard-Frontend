import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Page, Panel, Pill } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { adminUsers } from '@/data/mock';

/** Admin user management (mock): search + suspend toggle in React state. */
export default function AdminUsers() {
    const [users, setUsers] = useState(adminUsers);
    const [q, setQ] = useState('');
    const shown = users.filter((u) => (u.name + u.email).toLowerCase().includes(q.toLowerCase()));

    return (
        <>
            <Head title="Manage Users" />
            <Page title="Users" subtitle="Search and manage accounts.">
                <Panel>
                    <Input className="mb-4 max-w-sm" placeholder="Search name or email" value={q} onChange={(e) => setQ(e.target.value)} />
                    <table className="w-full text-sm">
                        <thead className="text-muted-foreground text-left text-xs"><tr><th className="pb-2">Name</th><th>Email</th><th>Role</th><th>Status</th><th /></tr></thead>
                        <tbody className="divide-y">
                            {shown.map((u) => (
                                <tr key={u.id}>
                                    <td className="py-2">{u.name}</td><td>{u.email}</td>
                                    <td><Pill tone={u.role === 'admin' ? 'blue' : 'gray'}>{u.role}</Pill></td>
                                    <td><Pill tone={u.status === 'Active' ? 'green' : 'red'}>{u.status}</Pill></td>
                                    <td className="text-right">
                                        {u.role !== 'admin' && (
                                            <Button size="sm" variant="outline" onClick={() => setUsers(users.map((x) => x.id === u.id ? { ...x, status: x.status === 'Active' ? 'Suspended' : 'Active' } : x))}>
                                                {u.status === 'Active' ? 'Suspend' : 'Reactivate'}
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Panel>
            </Page>
        </>
    );
}

AdminUsers.layout = { breadcrumbs: [{ title: 'Users', href: '/admin/users' }] };
