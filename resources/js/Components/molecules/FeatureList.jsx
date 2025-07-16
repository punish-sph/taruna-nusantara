import React from "react";
import FeatureItem from "../atoms/FeatureItem";

export default function FeatureList({ features = [] }) {
  return (
    <div className="grid lg:grid-cols-2 grid-rows-1 gap-4 pt-4">
      {features.map((feature, idx) => (
        <FeatureItem key={idx} {...feature} />
      ))}
    </div>
  );
}
