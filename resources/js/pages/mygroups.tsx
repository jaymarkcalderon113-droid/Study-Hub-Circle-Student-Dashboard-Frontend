import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Page, Panel, Pill, SelectBox } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { myGroups as initial, skillLevels, studyModes, subjects } from '@/data/mock';
import type { Group } from '@/data/mock';

/** My Groups + "Create Study Group" dialog (state only, not saved yet). */
export default function MyGroups() {
    const [list, setList] = useState<Group[]>(initial);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState(subjects[0]);
    const [level, setLevel] = useState('Beginner');
    const [mode, setMode] = useState('Online');

    const create = () => {
        if (!name.trim()) return toast.error('Please enter a group name');
        setList([{ id: Date.now(), name, subject, level, goal: 'Pass Exam', mode, members: 1, max: 5, rating: 0, reviews: 0 }, ...list]);
        setName('');
        setOpen(false);
        toast.success('Group created (demo only)');
    };

    return (
        <>
            <Head title="My Groups" />
            <Page
                title="My Groups"
                subtitle="Groups you belong to."
                action={
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild><Button>+ Create Group</Button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader><DialogTitle>Create a study group</DialogTitle></DialogHeader>
                            <div className="grid gap-3">
                                <Label htmlFor="gname">Group name</Label>
                                <Input id="gname" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Calculus Crew" />
                                <Label>Subject</Label><SelectBox value={subject} onChange={setSubject} options={subjects} />
                                <Label>Level</Label><SelectBox value={level} onChange={setLevel} options={skillLevels} />
                                <Label>Mode</Label><SelectBox value={mode} onChange={setMode} options={studyModes} />
                                <Button onClick={create}>Create group</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                }
            >
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {list.map((g) => (
                        <Panel key={g.id} className="space-y-3">
                            <div>
                                <h3 className="font-semibold">{g.name}</h3>
                                <p className="text-muted-foreground text-xs">{g.members}/{g.max} members · {g.level}</p>
                            </div>
                            <div className="flex flex-wrap gap-1"><Pill>{g.subject}</Pill><Pill tone="gray">{g.mode}</Pill></div>
                            <Button asChild size="sm" variant="outline"><Link href="/messages">Open chat</Link></Button>
                        </Panel>
                    ))}
                </div>
            </Page>
        </>
    );
}

MyGroups.layout = { breadcrumbs: [{ title: 'My Groups', href: '/mygroups' }] };
