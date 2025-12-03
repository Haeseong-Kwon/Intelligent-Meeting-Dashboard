import Link from "next/link";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";

export function TodayMeetingsCard() {
  const meetings = [
    {
      id: 1,
      title: "Marketing Strategy Review",
      project: "Project A",
      time: "9:00 AM",
    },
    {
      id: 2,
      title: "Design Feedback",
      project: "Project A",
      time: "11:00 AM",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-slate-900">Today&apos;s Meetings</h2>
        <Link
          href="/meetings"
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          View all Meetings
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
          >
            <div className="flex-1">
              <div className="font-semibold text-slate-900 mb-1">
                {meeting.title}
              </div>
              <div className="text-sm text-slate-500">
                {meeting.project} • {meeting.time}
              </div>
            </div>
            <Button variant="secondary" size="sm">
              View Prep Summary
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}

