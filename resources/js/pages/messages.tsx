import { Head } from '@inertiajs/react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { Initials, Page, Panel, Pill } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { chatMessages, members } from '@/data/mock';

/** Group chat (demo). New messages are kept in React state only. */
export default function Messages() {
    const [msgs, setMsgs] = useState(chatMessages);
    const [text, setText] = useState('');

    const send = () => {
        if (!text.trim()) return;
        setMsgs([...msgs, { id: Date.now(), from: 'Anna', time: 'now', text, mine: true }]);
        setText('');
    };

    return (
        <>
            <Head title="Group Chat" />
            <Page title="Math Study Group" subtitle="3/4 members · Intermediate">
                <div className="grid gap-4 lg:grid-cols-4">
                    <Panel className="flex h-[28rem] flex-col lg:col-span-3">
                        <div className="flex-1 space-y-3 overflow-y-auto">
                            {msgs.map((m) => (
                                <div key={m.id} className={`flex items-end gap-2 ${m.mine ? 'flex-row-reverse' : ''}`}>
                                    <Initials name={m.from} className="size-8" />
                                    <div className={`max-w-[70%] rounded-2xl px-3 py-2 text-sm ${m.mine ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                        <p className="text-xs opacity-70">{m.from} · {m.time}</p>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 flex gap-2">
                            <Input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} placeholder="Type a message..." />
                            <Button onClick={send} size="icon" aria-label="Send"><Send /></Button>
                        </div>
                    </Panel>
                    <Panel>
                        <h2 className="mb-3 font-semibold">Members</h2>
                        <ul className="space-y-2">
                            {members.slice(0, 3).map((m) => (
                                <li key={m} className="flex items-center gap-2 text-sm"><Initials name={m} className="size-8" />{m}</li>
                            ))}
                        </ul>
                        <div className="mt-4 flex gap-1"><Pill>Math</Pill><Pill tone="green">Pass Exam</Pill></div>
                    </Panel>
                </div>
            </Page>
        </>
    );
}

Messages.layout = { breadcrumbs: [{ title: 'Messages', href: '/messages' }] };
