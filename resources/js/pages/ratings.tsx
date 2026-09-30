import { Head } from '@inertiajs/react';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Page, Panel } from '@/components/studyhub/ui';
import { Button } from '@/components/ui/button';
import { groups } from '@/data/mock';

/** Group ratings: average stars + a demo "rate this group" control. */
export default function Ratings() {
    const [mine, setMine] = useState<Record<number, number>>({});

    return (
        <>
            <Head title="Ratings" />
            <Page title="Group Ratings" subtitle="See how groups are rated and leave your own rating.">
                <div className="grid gap-4 md:grid-cols-2">
                    {groups.map((g) => (
                        <Panel key={g.id} className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{g.name}</h3>
                                <span className="text-sm font-medium">{g.rating} <span className="text-muted-foreground">({g.reviews} reviews)</span></span>
                            </div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <button key={n} aria-label={`${n} stars`} onClick={() => setMine({ ...mine, [g.id]: n })}>
                                        <Star className={`size-5 ${n <= (mine[g.id] ?? 0) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'}`} />
                                    </button>
                                ))}
                                <Button size="sm" variant="outline" className="ml-auto" disabled={!mine[g.id]} onClick={() => toast.success(`Thanks! You rated ${g.name} ${mine[g.id]}★ (demo)`)}>Submit</Button>
                            </div>
                        </Panel>
                    ))}
                </div>
            </Page>
        </>
    );
}

Ratings.layout = { breadcrumbs: [{ title: 'Ratings', href: '/ratings' }] };
