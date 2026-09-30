import { Head } from '@inertiajs/react';
import { FileText, Paperclip } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Page, Panel } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { files as initialFiles, notes as initialNotes } from '@/data/mock';

/** Shared notes + file sharing (demo: nothing is really uploaded yet). */
export default function Notes() {
    const [tab, setTab] = useState<'notes' | 'files'>('notes');
    const [notes, setNotes] = useState(initialNotes);
    const [files, setFiles] = useState(initialFiles);
    const [title, setTitle] = useState('');

    const addNote = () => {
        if (!title.trim()) return;
        setNotes([{ id: Date.now(), title, by: 'Anna', date: 'Today' }, ...notes]);
        setTitle('');
    };

    return (
        <>
            <Head title="Notes & Files" />
            <Page title="Shared Notes & Files" subtitle="Everything your groups share in one place.">
                <div className="flex gap-2">
                    {(['notes', 'files'] as const).map((t) => (
                        <Button key={t} variant={tab === t ? 'default' : 'outline'} size="sm" onClick={() => setTab(t)}>
                            {t === 'notes' ? 'Notes' : 'Files'}
                        </Button>
                    ))}
                </div>

                {tab === 'notes' ? (
                    <Panel>
                        <div className="mb-4 flex gap-2">
                            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New note title" />
                            <Button onClick={addNote}>+ New Note</Button>
                        </div>
                        <ul className="divide-y">
                            {notes.map((n) => (
                                <li key={n.id} className="flex items-center gap-3 py-3">
                                    <FileText className="text-primary size-5" />
                                    <div><p className="text-sm font-medium">{n.title}</p><p className="text-muted-foreground text-xs">Created by {n.by} · {n.date}</p></div>
                                </li>
                            ))}
                        </ul>
                    </Panel>
                ) : (
                    <Panel>
                        <label className="mb-4 inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm">
                            <Paperclip className="size-4" /> Upload file
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) => {
                                    const f = e.target.files?.[0];
                                    if (!f) return;
                                    setFiles([{ id: Date.now(), name: f.name, size: `${(f.size / 1024 / 1024).toFixed(1)} MB`, date: 'Today' }, ...files]);
                                    toast.success('Added to the list (demo, not uploaded)');
                                }}
                            />
                        </label>
                        <ul className="divide-y">
                            {files.map((f) => (
                                <li key={f.id} className="flex items-center gap-3 py-3">
                                    <FileText className="size-5 text-red-500" />
                                    <div><p className="text-sm font-medium">{f.name}</p><p className="text-muted-foreground text-xs">{f.size} · {f.date}</p></div>
                                </li>
                            ))}
                        </ul>
                    </Panel>
                )}
            </Page>
        </>
    );
}

Notes.layout = { breadcrumbs: [{ title: 'Notes & Files', href: '/notes' }] };
