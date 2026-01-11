import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <div className="w-full bg-indigo-600">
      <div className="max-w-7xl mx-auto py-20 flex flex-col items-center gap-8 px-8 max-sm:px-4">
        <div className="text-white flex flex-col justify-start items-center gap-8 text-center">
          <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl font-bold">Ready to transform your workflow?</h2>
          <h3 className="text-indigo-100 w-95/100 text-xl max-sm:text-lg">
            Join thousands of teams who have already made the switch to TaskFlow. Start your free trial today.
          </h3>
        </div>
        <div className="flex max-sm:flex-col justify-center items-center gap-4 max-sm:w-full">
          <button className="group bg-white hover:bg-neutral-200 transition-[background-color] smooth-timing text-indigo-500 px-8 py-4 rounded-lg flex gap-4 cursor-pointer font-semibold justify-center items-center max-sm:w-full">
            Start Free Trial <ArrowRight className="group-hover:translate-x-2 transition-[translate] smooth-timing" />
          </button>
          <button className="px-8 py-4 border-2 rounded-lg border-white text-white cursor-pointer font-semibold max-sm:w-full hover:bg-black/10 transition[background-color] smooth-timing">
            Schedule a Demo
          </button>
        </div>
        <p className="text-indigo-200 text-center">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default CTA;
