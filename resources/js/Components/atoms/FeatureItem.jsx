import React from "react";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";

export default function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-sky-600" />
      </div>
      <div>
        <Title text={title} size="sm" className="lg:text-lg"/>
        <Description size="xs" className="lg:text-sm" color="gray-600">
          {description}
        </Description>
      </div>
    </div>
  );
}