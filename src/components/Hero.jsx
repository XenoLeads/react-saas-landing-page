import hero_illustration from "../assets/hero-illustration.svg";
import { Zap, ArrowRight } from "lucide-react";

const Hero = ({ ref, register }) => {
  return (
    <div className="w-full pt-16" ref={ref}>
      <div className="max-w-7xl mx-auto h-full px-8 max-sm:px-4 flex max-lg:flex-col justify-between items-center py-20 max-md:py-10">
        <div className="w-1/2 max-lg:w-full max-lg:gap-8 flex flex-col gap-6" ref={register} data-section="default" data-stagger="50">
          <div className="w-fit bg-indigo-100 inline-flex justify-start items-center text-indigo-800 px-4 py-1 text-sm gap-2 rounded-full">
            <Zap strokeWidth={1} size={16} />
            <p className="font-medium">Trusted by 50,000+ teams worldwide</p>
          </div>
          <h1 className="text-6xl max-lg:text-5xl font-bold">Manage projects with clarity and speed</h1>
          <h2 className="text-xl text-neutral-600">
            TaskFlow brings your team together with powerful project management tools that are simple enough for anyone to use. Get more done, faster.
          </h2>
          <div className="flex max-sm:flex-col gap-4 font-semibold items-center">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg flex gap-4 cursor-pointer max-sm:w-full justify-center items-center transition-[background-color] smooth-timing group">
              Start Free Trial <ArrowRight className="group-hover:translate-x-2 transition-[translate] smooth-timing" />
            </button>
            <button className="px-8 py-4 border-2 rounded-lg border-neutral-400 hover:border-neutral-700 text-neutral-600 hover:text-neutral-900 cursor-pointer max-sm:w-full transition-[color,border-color] smooth-timing">
              Watch Demo
            </button>
          </div>
          <p className="text-neutral-500">Free 14-day trial. No credit card required.</p>
        </div>
        <div ref={register} data-section="default" className="w-1/2 max-lg:w-full px-8 max-sm:px-4">
          <img src={hero_illustration} alt="" draggable="false" className="h-full w-full max-lg:h-100 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
