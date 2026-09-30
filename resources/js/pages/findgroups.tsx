import { Head } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Chip, Page, Panel, Pill, SelectBox } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { groups, skillLevels, studyGoals, studyModes, subjects } from '@/data/mock';

/**
 * Automatic group matching (demo). We score each mock group against the
 * student's choices: subject 40 pts, level 20, goal 20, mode 20.
 * Phase 2 moves this scoring to a Laravel service.
 */
export default function FindGroups() {
    const [picked, setPicked] = useState<string[]>(['Math']);
    const [level, setLevel] = useState('Intermediate');
    const [goal, setGoal] = useState('Pass Exam');
    const [mode, setMode] = useState('Online');
    const [searched, setSearched] = useState(true);

    const results = useMemo(
        () =>
            groups
                .map((g) => ({
                    ...g,
                    score:
                        (picked.includes(g.subject) ? 40 : 0) +
                        (g.level === level ? 20 : 0) +
                        (g.goal === goal ? 20 : 0) +
                        (g.mode === mode ? 20 : 0),
                }))
                .filter((g) => g.score > 0)
                .sort((a, b) => b.score - a.score),
        [picked, level, goal, mode],
    );

    return (
        <>
            <Head title="Find Groups" />
            <Page title="Find Study Partners" subtitle="Let us match you with students who fit your preferences.">
                <div className="grid gap-4 lg:grid-cols-3">
                    <Panel className="space-y-4">
                        <div className="grid gap-2">
                            <Label>Subjects</Label>
                            <div className="flex flex-wrap gap-2">
                                {subjects.map((s) => (
                                    <Chip key={s} active={picked.includes(s)} onClick={() => setPicked((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s])}>{s}</Chip>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-2"><Label>Skill level</Label><SelectBox value={level} onChange={setLevel} options={skillLevels} /></div>
                        <div className="grid gap-2"><Label>Study goal</Label><SelectBox value={goal} onChange={setGoal} options={studyGoals} /></div>
                        <div className="grid gap-2"><Label>Study preference</Label><SelectBox value={mode} onChange={setMode} options={studyModes} /></div>
                        <Button className="w-full" onClick={() => setSearched(true)}>Find Matches</Button>
                    </Panel>

                    <Panel className="lg:col-span-2">
                        <h2 className="mb-3 font-semibold">Matching Results</h2>
                        {searched && results.length === 0 && (
                            <p className="text-muted-foreground text-sm">No matches yet. Try selecting more subjects.</p>
                        )}
                        <ul className="divide-y">
                            {results.map((g) => (
                                <li key={g.id} className="flex items-center justify-between gap-3 py-3">
                                    <div>
                                        <p className="font-medium">{g.name}</p>
                                        <p className="text-muted-foreground text-xs">{g.members}/{g.max} members · {g.level}</p>
                                        <div className="mt-1 flex flex-wrap gap-1">
                                            <Pill>{g.subject}</Pill><Pill tone="green">{g.goal}</Pill><Pill tone="gray">{g.mode}</Pill>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <Pill tone={g.score >= 80 ? 'green' : 'orange'}>{g.score}% match</Pill>
                                        <Button size="sm" onClick={() => toast.success(`Join request sent to ${g.name} (demo)`)}>Join</Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Panel>
                </div>
            </Page>
        </>
    );
}

FindGroups.layout = { breadcrumbs: [{ title: 'Find Groups', href: '/findgroups' }] };
