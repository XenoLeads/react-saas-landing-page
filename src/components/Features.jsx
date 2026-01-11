import { CirclePile, Zap, ChartColumn, Shield, Clock4, CircleCheckBig } from "lucide-react";

const features_content = [
  {
    id: 1,
    icon: CirclePile,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time updates, comments, and file sharing across your entire team.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with instant loading, quick actions, and smooth performance even with large projects.",
  },
  {
    id: 3,
    icon: ChartColumn,
    title: "Advanced Analytics",
    description: "Track progress with detailed reports, visualizations, and insights to make data-driven decisions.",
  },
  {
    id: 4,
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SSO support, and advanced permissions to keep your data safe and secure.",
  },
  {
    id: 5,
    icon: Clock4,
    title: "Time Tracking",
    description: "Monitor time spent on tasks and projects with built-in timers and automatic time logging.",
  },
  {
    id: 6,
    icon: CircleCheckBig,
    title: "Task Management",
    description: "Create, assign, and track tasks with custom workflows, priorities, and automated notifications.",
  },
];

function FeatureCard({ feature }) {
  const { icon, title, description } = feature;
  const Icon = icon;
  return (
    <div className="border border-neutral-200 p-6 rounded-md flex flex-col gap-4 transition-[border-color,box-shadow] hover:border-indigo-300 hover:shadow-lg shadow-indigo-50 smooth-timing">
      <div className="bg-indigo-100 w-fit p-3 rounded-lg">{<Icon color="#3F51B5" />}</div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

const Features = ({ ref,register }) => {
  return (
    <div className="w-full scroll-mt-16" ref={ref}>
      <div className="max-w-7xl flex flex-col mx-auto gap-12 py-20 px-8">
        <div ref={register} data-section="default" data-stagger="50" className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-semibold text-4xl text-centers ">Everything you need to succeed</h2>
          <h3 className="text-xl sm:max-w-1/2 text-center text-neutral-600 ">
            Powerful features designed to help your team collaborate better and ship faster.
          </h3>
        </div>
        <div ref={register} data-section="default" data-stagger="100" className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 ">
          {features_content.map(feature => {
            return <FeatureCard key={feature.id} feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
