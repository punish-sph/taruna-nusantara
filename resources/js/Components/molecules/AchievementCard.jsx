import React from "react";
import { TrophyIcon, StarIcon } from "@heroicons/react/24/outline";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import Card from "../atoms/Card";

export default function AchievementCard({ title, description, year, level }) {
  return (
    <Card className="group">
      <div className="flex flex-col h-full space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-100 transition-colors">
            <TrophyIcon className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500">{year}</div>
            <div className="font-semibold text-yellow-600">{level}</div>
          </div>
        </div>

        <Title
          text={title}
          size="md"
          className="group-hover:text-sky-600 transition-colors"
        />

        <Description size="sm" className=" text-gray-600 flex-grow">
          {description}
        </Description>
      </div>
    </Card>
  );
}
