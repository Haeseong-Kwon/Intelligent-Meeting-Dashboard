import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";

export function RecentMeetingsCard() {
  const meetings = [
    {
      id: 1,
      title: "Business Review",
      date: "Nov 29",
      project: "Project A",
    },
    {
      id: 2,
      title: "Team Sync",
      date: "Nov 28",
      project: "Project B",
    },
    {
      id: 3,
      title: "Sprint Planning",
      date: "Nov 27",
      project: "Project A",
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold text-slate-900 mb-6">Recent Meetings</h2>
      <div className="grid grid-cols-3 gap-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="p-4 bg-slate-50 rounded-lg flex flex-col gap-3"
          >
            <div>
              <div className="font-semibold text-slate-900 mb-1">
                {meeting.title}
              </div>
              <div className="text-sm text-slate-500">
                {meeting.date} | {meeting.project}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="text-xs justify-start">
                View Minutes
              </Button>
              <Button variant="ghost" size="sm" className="text-xs justify-start">
                View Patterns
              </Button>
              <Button variant="ghost" size="sm" className="text-xs justify-start">
                Prepare Next Meetings
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

