import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/outline";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import Card from "@/Components/atoms/Card";
import Badge from "@/Components/atoms/Badge";

const AchievementCard = ({ achievement, starDesc, isReversed = false, index = 0 }) => {
    const slideIn = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
    };

    const slideInRight = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
    };

    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={isReversed ? slideInRight : slideIn}
            transition={{ delay: index * 0.2 }}
        >
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 max-w-6xl mx-auto">
                <div
                    className={`grid md:grid-cols-2 gap-0 ${
                        isReversed ? "md:grid-cols-2" : ""
                    }`}
                >
                    <div
                        className={`relative overflow-hidden ${
                            isReversed ? "md:order-2" : "md:order-1"
                        }`}
                    >
                        <div className="aspect-[4/3] md:aspect-[3/2]">
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="absolute top-3 left-3">
                            <Badge
                                text={achievement.level}
                                variant={
                                    achievement.level === "Nasional"
                                        ? "danger"
                                        : "sky"
                                }
                                size="md"
                                rounded="full"
                            />
                        </div>
                    </div>

                    <div
                        className={`p-4 md:p-6 flex flex-col space-y-3 justify-center ${
                            isReversed ? "md:order-1" : "md:order-2"
                        }`}
                    >
                        <Title
                            text={achievement.title}
                            size="xl"
                            className="lg:text-5xl"
                            align="left"
                        />

                        <Description
                            color="gray-600"
                            size="xl"
                            className="lg:text-xl"
                        >
                            {achievement.description}
                        </Description>

                        <div className="flex items-center text-yellow-500">
                            <StarIcon className="w-4 h-4 mr-2 fill-current" />
                            <span className="text-lg font-medium text-gray-700">
                                {achievement.starDesc}
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export default AchievementCard;