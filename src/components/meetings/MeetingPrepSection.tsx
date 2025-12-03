import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
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

const materials = [
  {
    id: 1,
    title: "Marketing Plan Q4",
    description: "Quarterly marketing strategy document",
  },
  {
    id: 2,
    title: "Budget Analysis",
    description: "Detailed budget breakdown and projections",
  },
  {
    id: 3,
    title: "Competitor Research",
    description: "Analysis of competitor strategies",
  },
  {
    id: 4,
    title: "Campaign Metrics",
    description: "Performance data from recent campaigns",
  },
];

const agendaItems = [
  {
    id: 1,
    title: "Review wireframes",
    description: "Discuss and review the latest wireframe designs",
    duration: "20min",
  },
  {
    id: 2,
    title: "Discuss design",
    description: "Review design mockups and gather feedback",
    duration: "20min",
  },
  {
    id: 3,
    title: "Outline next steps",
    description: "Define action items and next milestones",
    duration: "20min",
  },
];

const briefings = [
  { role: "PM", text: "Prepared agenda and key discussion points" },
  { role: "Designer", text: "Ready to present new design concepts" },
  { role: "Developer", text: "Technical feasibility review completed" },
];

export function MeetingPrepSection() {
  return (
    <div className="space-y-6">
      <MeetingHeader {...meetingData} />

      {/* Purpose & Background */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Purpose & Background
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </Card>

      {/* Material Summary */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Material Summary
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {materials.map((material) => (
            <div
              key={material.id}
              className="p-4 bg-slate-50 rounded-lg border border-slate-200"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-blue-600 text-lg">📄</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                {material.title}
              </h3>
              <p className="text-xs text-slate-600">{material.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Recommended Agenda */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Recommended Agenda
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {agendaItems.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-slate-50 rounded-lg border border-slate-200"
            >
              <h3 className="font-semibold text-slate-900 text-sm mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 mb-3">{item.description}</p>
              <div className="text-xs text-slate-500">{item.duration}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Briefings by Attendees */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Briefings by Attendees
        </h2>
        <div className="space-y-3">
          {briefings.map((briefing, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Badge variant="tag">{briefing.role}</Badge>
              <span className="text-sm text-slate-600">{briefing.text}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Mark as Prepared Button */}
      <div className="flex justify-end">
        <Button variant="primary" size="md">
          Mark as Prepared
        </Button>
      </div>
    </div>
  );
}

