import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";

export function ActionItemsCard() {
  const actionItems = [
    {
      id: 1,
      title: "Review estimates",
      date: "Nov 20",
      status: "completed" as const,
    },
    {
      id: 2,
      title: "Finalize presentation slides",
      date: "Nov 30",
      status: "overdue" as const,
    },
    {
      id: 3,
      title: "Submit proposal draft",
      date: "Dec 30",
      status: "in-progress" as const,
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "status-completed";
      case "overdue":
        return "status-overdue";
      case "in-progress":
        return "status-in-progress";
      default:
        return "status-scheduled";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "overdue":
        return "Overdue";
      case "in-progress":
        return "In Progress";
      default:
        return "Scheduled";
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold text-slate-900 mb-6">My Action Items</h2>
      <div className="flex flex-col gap-4">
        {actionItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
          >
            <div className="flex-1">
              <div className="font-semibold text-slate-900 mb-1">
                {item.title}
              </div>
              <div className="text-sm text-slate-500">{item.date}</div>
            </div>
            <Badge variant={getStatusVariant(item.status) as "status-completed" | "status-overdue" | "status-in-progress" | "status-scheduled"}>
              {getStatusLabel(item.status)}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}

