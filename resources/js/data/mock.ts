/**
 * MOCK DATA (Phase 1). Every page below reads from here instead of an API.
 * In Phase 2 each export is replaced by real data from Laravel controllers.
 */

export const subjects = ['Math', 'Programming', 'Science', 'English', 'Chemistry', 'History'];
export const skillLevels = ['Beginner', 'Intermediate', 'Advanced'];
export const studyGoals = ['Pass Exam', 'Build Projects', 'Improve Grades', 'Deep Understanding'];
export const studyModes = ['Online', 'In-person', 'Hybrid'];

export type Group = {
    id: number;
    name: string;
    subject: string;
    level: string;
    goal: string;
    mode: string;
    members: number;
    max: number;
    rating: number;
    reviews: number;
};

export const groups: Group[] = [
    { id: 1, name: 'Math Study Group', subject: 'Math', level: 'Intermediate', goal: 'Pass Exam', mode: 'Online', members: 3, max: 4, rating: 4.8, reviews: 12 },
    { id: 2, name: 'Programming Group', subject: 'Programming', level: 'Beginner', goal: 'Build Projects', mode: 'Online', members: 2, max: 4, rating: 4.6, reviews: 8 },
    { id: 3, name: 'Science Group', subject: 'Science', level: 'Beginner', goal: 'Improve Grades', mode: 'Hybrid', members: 1, max: 5, rating: 4.5, reviews: 6 },
    { id: 4, name: 'English Study Group', subject: 'English', level: 'Advanced', goal: 'Deep Understanding', mode: 'In-person', members: 4, max: 6, rating: 4.3, reviews: 5 },
    { id: 5, name: 'Chemistry Group', subject: 'Chemistry', level: 'Intermediate', goal: 'Pass Exam', mode: 'Online', members: 3, max: 5, rating: 4.2, reviews: 4 },
];

export const myGroups = groups.slice(0, 3);

export const upcomingSessions = [
    { id: 1, group: 'Math Study Group', when: 'Today, 10:00 AM – 12:00 PM' },
    { id: 2, group: 'Programming Group', when: 'Tomorrow, 2:00 PM – 4:00 PM' },
    { id: 3, group: 'Science Group', when: 'Oct 3, 9:00 AM – 11:00 AM' },
];

export const chatMessages = [
    { id: 1, from: 'Mark', time: '10:15 AM', text: "Let's meet at 10 AM today!", mine: false },
    { id: 2, from: 'Anna', time: '10:16 AM', text: "Okay! I'll share the notes.", mine: true },
    { id: 3, from: 'John', time: '10:18 AM', text: 'Great! See you all!', mine: false },
];

export const members = ['Mark Reyes', 'Anna Cruz', 'John Diaz', 'Lea Tan'];

export const notes = [
    { id: 1, title: 'Math Formulas', by: 'John', date: 'Sep 28, 2026' },
    { id: 2, title: 'Chapter 4 Summary', by: 'Anna', date: 'Sep 27, 2026' },
    { id: 3, title: 'Programming Concepts', by: 'Mark', date: 'Sep 26, 2026' },
];

export const files = [
    { id: 1, name: 'Physics_Notes.pdf', size: '2.4 MB', date: 'Sep 25, 2026' },
    { id: 2, name: 'Study_Guide.docx', size: '1.1 MB', date: 'Sep 24, 2026' },
    { id: 3, name: 'Group_Presentation.pptx', size: '3.8 MB', date: 'Sep 20, 2026' },
];

export const tasks = [
    { id: 1, title: 'Read Chapter 4 (Calculus)', due: 'Due Oct 2, 2026', done: false },
    { id: 2, title: 'Solve Practice Problems', due: 'Due Oct 3, 2026', done: false },
    { id: 3, title: 'Group Presentation', due: 'Due Oct 8, 2026', done: false },
    { id: 4, title: 'Review for Exam', due: 'Due Oct 10, 2026', done: true },
];

export const sessionLog = [
    { id: 1, group: 'Math Study Group', date: 'Sep 28, 2026', duration: '2 hours' },
    { id: 2, group: 'Programming Group', date: 'Sep 26, 2026', duration: '1.5 hours' },
    { id: 3, group: 'Science Group', date: 'Sep 24, 2026', duration: '2 hours' },
];

export const weeklyHours = [
    { day: 'Mon', hours: 3 },
    { day: 'Tue', hours: 5 },
    { day: 'Wed', hours: 4 },
    { day: 'Thu', hours: 6 },
    { day: 'Fri', hours: 3 },
    { day: 'Sat', hours: 5 },
    { day: 'Sun', hours: 2 },
];

export const initialNotifications = [
    { id: 1, title: 'New message in Math Study Group', body: 'Mark: Let\'s meet at 10 AM today!', time: '2m ago', read: false },
    { id: 2, title: 'You were added to a new group', body: 'You are now a member of Programming Group.', time: '15m ago', read: false },
    { id: 3, title: 'Task "Chapter 4 Review" is due tomorrow', body: "Don't forget to complete your task!", time: '1h ago', read: false },
    { id: 4, title: 'Your group got a new rating!', body: 'Math Study Group received 4.8 stars.', time: '2h ago', read: true },
    { id: 5, title: 'New file shared', body: 'John shared "Study_Guide.docx" in Science Group.', time: '3h ago', read: true },
];

/** Events for the schedule calendar: key = day of month (Oct 2026). */
export const scheduleEvents: Record<number, { title: string; time: string }[]> = {
    2: [{ title: 'Math Study Group', time: '10:00 AM – 12:00 PM' }],
    3: [{ title: 'Programming Group', time: '2:00 PM – 4:00 PM' }, { title: 'Science Group', time: '5:00 PM – 6:30 PM' }],
    8: [{ title: 'Math Study Group', time: '10:00 AM – 12:00 PM' }],
    15: [{ title: 'English Study Group', time: '1:00 PM – 3:00 PM' }],
    22: [{ title: 'Programming Group', time: '2:00 PM – 4:00 PM' }],
};

// ---- Admin mock data ----
export const adminUsers = [
    { id: 1, name: 'Anna Cruz', email: 'anna@example.com', role: 'student', status: 'Active', joined: 'Sep 12, 2026' },
    { id: 2, name: 'Mark Reyes', email: 'mark@example.com', role: 'student', status: 'Active', joined: 'Sep 14, 2026' },
    { id: 3, name: 'John Diaz', email: 'john@example.com', role: 'student', status: 'Suspended', joined: 'Sep 15, 2026' },
    { id: 4, name: 'Lea Tan', email: 'lea@example.com', role: 'student', status: 'Active', joined: 'Sep 20, 2026' },
    { id: 5, name: 'Admin User', email: 'admin@studyhub.test', role: 'admin', status: 'Active', joined: 'Sep 01, 2026' },
];

export const adminGroups = [
    { id: 1, name: 'Math Study Group', owner: 'Mark Reyes', members: 3, reports: 0, status: 'Active' },
    { id: 2, name: 'Programming Group', owner: 'Anna Cruz', members: 2, reports: 1, status: 'Flagged' },
    { id: 3, name: 'Science Group', owner: 'John Diaz', members: 1, reports: 0, status: 'Active' },
    { id: 4, name: 'Chemistry Group', owner: 'Lea Tan', members: 3, reports: 2, status: 'Flagged' },
];
