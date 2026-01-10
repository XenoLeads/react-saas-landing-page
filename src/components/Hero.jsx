import hero_illustration from "../assets/hero-illustration.svg";
import { Zap, ArrowRight } from "lucide-react";

const Hero = ({ ref }) => {
  return (
    <div className="w-full h-170 pt-16" ref={ref}>
      <div className="max-w-7xl mx-auto h-full px-8 flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-6">
          <div className="w-fit bg-indigo-100 inline-flex justify-start items-center text-indigo-800 px-4 py-1 text-sm gap-2 rounded-full">
            <Zap strokeWidth={1} size={16} />
            <p className="font-medium">Trusted by 50,000+ teams worldwide</p>
          </div>
          <h1 className="text-6xl font-bold">Manage projects with clarity and speed</h1>
          <h2 className="text-xl text-neutral-600">
            TaskFlow brings your team together with powerful project management tools that are simple enough for anyone to use. Get more done, faster.
          </h2>
          <div className="flex gap-4 font-semibold items-center">
            <button className="bg-indigo-500 text-white px-8 py-4 rounded-lg flex gap-4 cursor-pointer">
              Start Free Trial <ArrowRight />
            </button>
            <button className="px-8 py-4 border-2 rounded-lg border-neutral-400 text-neutral-600 cursor-pointer">Watch Demo</button>
          </div>
          <p className="text-neutral-500">Free 14-day trial. No credit card required.</p>
        </div>
        <div className="w-1/2 px-8">
          <img src={hero_illustration} alt="" draggable="false" className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
