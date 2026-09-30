import { Head } from '@inertiajs/react';
import { Clock } from 'lucide-react';
import { Page, Panel } from '@/components/studyhub/ui';
import { sessionLog, weeklyHours } from '@/data/mock';

/** Study session tracking: weekly bar chart + recent sessions. */
export default function Progress() {
    const total = weeklyHours.reduce((sum, d) => sum + d.hours, 0);
    const max = Math.max(...weeklyHours.map((d) => d.hours));

    return (
        <>
            <Head title="Progress" />
            <Page title="Study Session Tracking" subtitle="See how much you studied this week.">
                <div className="grid gap-4 lg:grid-cols-3">
                    <Panel className="flex items-center gap-4">
                        <Clock className="text-primary size-12" />
                        <div><p className="text-muted-foreground text-xs">Total study time</p><p className="text-3xl font-semibold">{total} hours</p></div>
                    </Panel>
                    <Panel className="lg:col-span-2">
                        <h2 className="mb-3 font-semibold">Study time (hours)</h2>
                        <div className="flex h-40 items-end gap-3">
                            {weeklyHours.map((d) => (
                                <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
                                    <div className="bg-primary w-full rounded-t" style={{ height: `${(d.hours / max) * 100}%` }} />
                                    <span className="text-muted-foreground text-xs">{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </Panel>
                </div>
                <Panel>
                    <h2 className="mb-3 font-semibold">Recent Sessions</h2>
                    <table className="w-full text-sm">
                        <thead className="text-muted-foreground text-left text-xs"><tr><th className="pb-2">Group</th><th>Date</th><th>Duration</th></tr></thead>
                        <tbody className="divide-y">
                            {sessionLog.map((s) => <tr key={s.id}><td className="py-2">{s.group}</td><td>{s.date}</td><td>{s.duration}</td></tr>)}
                        </tbody>
                    </table>
                </Panel>
            </Page>
        </>
    );
}

Progress.layout = { breadcrumbs: [{ title: 'Progress', href: '/progress' }] };
