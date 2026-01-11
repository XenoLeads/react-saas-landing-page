import { ArrowRight } from "lucide-react";

const get_started_steps = [
  {
    title: "Create Your Workspace",
    description: "Sign up and set up your workspace in under 60 seconds. Invite your team members and customize your settings.",
  },
  {
    title: "Add Your Projects",
    description: "Create projects, break them down into tasks, and organize everything with boards, lists, or timelines.",
  },
  {
    title: "Collaborate & Ship",
    description: "Work together with your team in real-time, track progress, and deliver projects on time, every time.",
  },
];

const HowItWorks = ({ ref }) => {
  return (
    <div className="w-full bg-neutral-100 scroll-mt-16" ref={ref}>
      <div className="max-w-7xl mx-auto py-20 flex flex-col justify-start items-center px-8">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <h2 className="text-4xl font-semibold text-center">Get started in minutes</h2>
          <h3 className="text-xl max-w-1/2 text-center text-neutral-500">Three simple steps to transform how your team works together.</h3>
        </div>
        <div className="w-full grid grid-cols-3 max-md:grid-cols-1 gap-8 mt-8">
          {get_started_steps.map(({ title, description }, index) => (
            <div key={title} className="relative flex flex-col justify-start items-start gap-4">
              <p className="text-6xl font-bold text-indigo-300">{`0${index + 1}`}</p>
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p className="text-neutral-600">{description}</p>
              {index < 2 ? <ArrowRight className="absolute right-0 top-1/2 -translate-y-full max-md:hidden" color="#9FA8DA" size={32} /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
