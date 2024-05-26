"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Prof.Gauri Mathad",
    avatar: "A",
    title: "Project Guide",
    description: "Project guide and mentor in development of project.",
  },
  {
    name: "Deep Uthale",
    avatar: "A",
    title: "AI&ML Engineer",
    description: "This is the best application for image and video generation!",
  },
  {
    name: "Chinmay Phadkule",
    avatar: "A",
    title: "AI&ML Engineer",
    description: "This is the best application for conversation and code generation!",
  },
  {
    name: "Parth Deshmukh",
    avatar: "A",
    title: "AI&ML Engineer",
    description: "This is the best application for content creation!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg ">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
