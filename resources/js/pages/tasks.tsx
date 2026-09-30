import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Page, Panel, Pill } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { tasks as initial } from '@/data/mock';

/** Task / checklist system with All / Pending / Completed filters. */
export default function Tasks() {
    const [tasks, setTasks] = useState(initial);
    const [filter, setFilter] = useState<'All' | 'Pending' | 'Completed'>('All');
    const [title, setTitle] = useState('');

    const shown = tasks.filter((t) => filter === 'All' || (filter === 'Completed' ? t.done : !t.done));

    return (
        <>
            <Head title="Tasks" />
            <Page title="Tasks & Checklist" subtitle="Keep your group work on track.">
                <div className="flex gap-2">
                    {(['All', 'Pending', 'Completed'] as const).map((f) => (
                        <Button key={f} size="sm" variant={filter === f ? 'default' : 'outline'} onClick={() => setFilter(f)}>{f}</Button>
                    ))}
                </div>
                <Panel>
                    <div className="mb-4 flex gap-2">
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a task" />
                        <Button onClick={() => { if (title.trim()) { setTasks([{ id: Date.now(), title, due: 'No due date', done: false }, ...tasks]); setTitle(''); } }}>+ Add Task</Button>
                    </div>
                    <ul className="divide-y">
                        {shown.map((t) => (
                            <li key={t.id} className="flex items-center gap-3 py-3">
                                <Checkbox checked={t.done} onCheckedChange={(v) => setTasks(tasks.map((x) => x.id === t.id ? { ...x, done: v === true } : x))} />
                                <div className="flex-1">
                                    <p className={`text-sm font-medium ${t.done ? 'text-muted-foreground line-through' : ''}`}>{t.title}</p>
                                    <p className="text-muted-foreground text-xs">{t.due}</p>
                                </div>
                                <Pill tone={t.done ? 'green' : 'orange'}>{t.done ? 'Completed' : 'Pending'}</Pill>
                            </li>
                        ))}
                    </ul>
                </Panel>
            </Page>
        </>
    );
}

Tasks.layout = { breadcrumbs: [{ title: 'Tasks', href: '/tasks' }] };
