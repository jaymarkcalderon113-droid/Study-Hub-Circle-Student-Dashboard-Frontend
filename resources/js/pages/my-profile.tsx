import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Chip, Initials, Page, Panel, SelectBox } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { skillLevels, studyGoals, studyModes, subjects } from '@/data/mock';

/**
 * Student profile + subject selection + skill level + study goal + preference.
 * Phase 1: state lives in the browser only (nothing is saved to the database).
 */
export default function MyProfile() {
    const { auth } = usePage().props;
    const [picked, setPicked] = useState<string[]>(['Math', 'Programming']);
    const [level, setLevel] = useState('Intermediate');
    const [goal, setGoal] = useState('Pass Exam');
    const [mode, setMode] = useState('Online');
    const [bio, setBio] = useState('');

    const toggle = (s: string) =>
        setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

    return (
        <>
            <Head title="My Profile" />
            <Page title="My Profile" subtitle="Tell us how you like to study so we can match you.">
                <div className="grid gap-4 lg:grid-cols-3">
                    <Panel className="flex flex-col items-center gap-2 text-center">
                        <Initials name={auth.user.name} className="size-20 text-xl" />
                        <p className="font-semibold">{auth.user.name}</p>
                        <p className="text-muted-foreground text-sm">{auth.user.email}</p>
                    </Panel>

                    <Panel className="space-y-5 lg:col-span-2">
                        <div className="grid gap-2">
                            <Label>Subjects</Label>
                            <div className="flex flex-wrap gap-2">
                                {subjects.map((s) => (
                                    <Chip key={s} active={picked.includes(s)} onClick={() => toggle(s)}>{s}</Chip>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="grid gap-2"><Label>Skill level</Label><SelectBox value={level} onChange={setLevel} options={skillLevels} /></div>
                            <div className="grid gap-2"><Label>Study goal</Label><SelectBox value={goal} onChange={setGoal} options={studyGoals} /></div>
                            <div className="grid gap-2"><Label>Preference</Label><SelectBox value={mode} onChange={setMode} options={studyModes} /></div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="bio">About me</Label>
                            <Input id="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="e.g. Evening learner, love group problem-solving" />
                        </div>
                        <Button onClick={() => toast.success('Profile saved (demo only, not stored yet)')}>Save profile</Button>
                    </Panel>
                </div>
            </Page>
        </>
    );
}

MyProfile.layout = { breadcrumbs: [{ title: 'My Profile', href: '/my-profile' }] };
