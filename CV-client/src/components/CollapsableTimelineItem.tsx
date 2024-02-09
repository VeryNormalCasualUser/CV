import {
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  Collapse,
} from "@material-tailwind/react";

import { BellIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface CollapsableTimelineItemProps {
  company: string;
  date: string;
  jobTitle: string;
  bulletPoints: string[];
}

export function CollapsableTimelineItem(props: CollapsableTimelineItemProps) {
  const [open, setOpen] = useState(true);
  return (
    <TimelineItem
      className="m-3 "
      onClick={() => {
        setOpen((state) => !state);
      }}
    >
      <div
        className="transition ease-in-out delay-10
      hover:-translate-y-1 hover:scale-102 hover:bg-gray-50 duration-300 
      relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5"
      >
        <TimelineHeader className="m-3">
          <TimelineIcon className="p-3" variant="ghost">
            <BellIcon className="h-5 w-5" />
          </TimelineIcon>
          <Typography variant="h4" color="blue-gray" placeholder="crash">
            {props.company}
          </Typography>
          <div className="ml-auto">
            <Typography variant="h5" color="blue-gray" placeholder="crash">
              {props.jobTitle}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="ml-auto"
              placeholder="crash"
            >
              {props.date}
            </Typography>
          </div>
        </TimelineHeader>
        <Collapse open={open}>
          <hr className="mb-3" />
          {props.bulletPoints.map((bulletPoint) => {
            return (
              <Typography
                key={bulletPoint}
                variant="h6"
                color="gray"
                placeholder="crash"
                className="my-1 mx-5"
              >
                {bulletPoint}
              </Typography>
            );
          })}
        </Collapse>
      </div>
    </TimelineItem>
  );
}
