import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Page, Panel } from '@/components/studyhub/ui';
import { scheduleEvents } from '@/data/mock';

/** Study schedule: a static October 2026 calendar with mock sessions. */
export default function Schedule() {
    const [selected, setSelected] = useState(2);
    const firstWeekday = new Date(2026, 9, 1).getDay(); // Oct 1, 2026
    const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: 31 }, (_, i) => i + 1)];

    return (
        <>
            <Head title="Schedule" />
            <Page title="Study Schedule" subtitle="October 2026">
                <div className="grid gap-4 lg:grid-cols-3">
                    <Panel className="lg:col-span-2">
                        <div className="text-muted-foreground mb-2 grid grid-cols-7 text-center text-xs">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => <span key={d}>{d}</span>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {cells.map((day, i) =>
                                day === null ? <span key={i} /> : (
                                    <button
                                        key={i}
                                        onClick={() => setSelected(day)}
                                        className={`relative aspect-square rounded-lg text-sm ${selected === day ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                                    >
                                        {day}
                                        {scheduleEvents[day] && <span className="absolute bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber-500" />}
                                    </button>
                                ),
                            )}
                        </div>
                    </Panel>
                    <Panel>
                        <h2 className="mb-3 font-semibold">Sessions on Oct {selected}</h2>
                        {(scheduleEvents[selected] ?? []).length === 0 && <p className="text-muted-foreground text-sm">Nothing scheduled.</p>}
                        <ul className="space-y-3">
                            {(scheduleEvents[selected] ?? []).map((e) => (
                                <li key={e.title + e.time} className="text-sm">
                                    <p className="font-medium">{e.title}</p>
                                    <p className="text-muted-foreground text-xs">{e.time}</p>
                                </li>
                            ))}
                        </ul>
                    </Panel>
                </div>
            </Page>
        </>
    );
}

Schedule.layout = { breadcrumbs: [{ title: 'Schedule', href: '/schedule' }] };
