import { Timeline } from "@material-tailwind/react";
import { CollapsableTimelineItem } from "../components/CollapsableTimelineItem";

const bulletPointsTelavox = ["- make api endpoints", "- many code"];
const bulletPointsPipeChain = ["- talk to peoplez", "- many support support"];

export function CareerTimeline() {
  return (
    <div className="w-2/3 mx-auto">
      <Timeline>
        <CollapsableTimelineItem
          company={"Telavox"}
          date={"Jun 2023 - Ongoing"}
          jobTitle={"Software Developer"}
          bulletPoints={bulletPointsTelavox}
        />
        <CollapsableTimelineItem
          company={"PipeChain"}
          date={"Jun 2022 - Dec 2022"}
          jobTitle={"General IT support"}
          bulletPoints={bulletPointsPipeChain}
        />
      </Timeline>
    </div>
  );
}
