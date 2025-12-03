import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { MeetingHeader } from "./MeetingHeader";

const meetingData = {
  title: "Marketing Strategy Review",
  date: "Nov 30",
  time: "9:00 AM",
  endTime: "11:00 AM",
  duration: "2h",
  attendees: ["Kim minsoo", "Park minsoo", "Lee minsoo"],
  project: "Project A",
  tags: ["Design", "PM"],
  status: "Scheduled",
};

export function MeetingOverviewSection() {
  return (
    <div className="space-y-6">
      <MeetingHeader {...meetingData} />

      {/* Meeting Details Table */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Meeting details
        </h2>
        <div className="space-y-3">
          <div className="flex">
            <div className="w-32 text-sm font-medium text-slate-600">Date</div>
            <div className="text-sm text-slate-900">{meetingData.date}</div>
          </div>
          <div className="flex">
            <div className="w-32 text-sm font-medium text-slate-600">Time</div>
            <div className="text-sm text-slate-900">
              {meetingData.time} - {meetingData.endTime} ({meetingData.duration})
            </div>
          </div>
          <div className="flex">
            <div className="w-32 text-sm font-medium text-slate-600">
              Attendees
            </div>
            <div className="text-sm text-slate-900">
              {meetingData.attendees.join(", ")}
            </div>
          </div>
          <div className="flex">
            <div className="w-32 text-sm font-medium text-slate-600">Project</div>
            <div className="text-sm text-slate-900">{meetingData.project}</div>
          </div>
          <div className="flex">
            <div className="w-32 text-sm font-medium text-slate-600">Tag</div>
            <div className="text-sm text-slate-900">
              {meetingData.tags.join(", ")}
            </div>
          </div>
          <div className="flex">
            <div className="w-32 text-sm font-medium text-slate-600">Status</div>
            <div className="text-sm text-slate-900">{meetingData.status}</div>
          </div>
        </div>
      </Card>

      {/* Purpose */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Purpose</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-5">
          <h3 className="text-base font-semibold text-slate-900 mb-2">Prep</h3>
          <p className="text-sm text-slate-600 mb-4">
            Review materials and prepare for the meeting
          </p>
          <Button variant="primary" size="sm" className="w-full">
            View Prep Summary
          </Button>
        </Card>
        <Card className="p-5">
          <h3 className="text-base font-semibold text-slate-900 mb-2">Live</h3>
          <p className="text-sm text-slate-600 mb-4">
            Join the live meeting session
          </p>
          <Button variant="primary" size="sm" className="w-full">
            Enter Live
          </Button>
        </Card>
        <Card className="p-5">
          <h3 className="text-base font-semibold text-slate-900 mb-2">
            Outcomes
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            View meeting minutes and outcomes
          </p>
          <Button variant="primary" size="sm" className="w-full">
            View Minutes
          </Button>
        </Card>
      </div>
    </div>
  );
}

