import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Page, Panel } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { initialNotifications } from '@/data/mock';

/** Notifications list with "Mark all as read". */
export default function Notifications() {
    const [items, setItems] = useState(initialNotifications);

    return (
        <>
            <Head title="Notifications" />
            <Page
                title="Notifications"
                action={<Button variant="outline" size="sm" onClick={() => setItems(items.map((n) => ({ ...n, read: true })))}>Mark all as read</Button>}
            >
                <Panel className="p-0">
                    <ul className="divide-y">
                        {items.map((n) => (
                            <li key={n.id} className="flex items-start gap-3 p-4">
                                <span className={`mt-1.5 size-2 rounded-full ${n.read ? 'bg-transparent' : 'bg-primary'}`} />
                                <div className="flex-1"><p className="text-sm font-medium">{n.title}</p><p className="text-muted-foreground text-xs">{n.body}</p></div>
                                <span className="text-muted-foreground text-xs">{n.time}</span>
                            </li>
                        ))}
                    </ul>
                </Panel>
            </Page>
        </>
    );
}

Notifications.layout = { breadcrumbs: [{ title: 'Notifications', href: '/notifications' }] };
