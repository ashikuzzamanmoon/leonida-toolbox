import type { Metadata } from "next";
import ChecklistClient from "@/components/checklist/ChecklistClient";

export const metadata: Metadata = {
  title: "GTA 6 100% Completion Checklist",
  description:
    "Track your GTA 6 100% completion: story missions, collectibles, activities and milestones. Progress saves in your browser.",
};

export default function ChecklistPage() {
  return <ChecklistClient />;
}
