import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <div className="w-full bg-indigo-600">
      <div className="max-w-7xl mx-auto py-20 flex flex-col items-center gap-8">
        <div className="text-white flex flex-col justify-start items-center gap-8">
          <h2 className="text-5xl max-md:text-4xl font-bold">Ready to transform your workflow?</h2>
          <h3 className="text-indigo-100 w-95/100 text-xl text-center">
            Join thousands of teams who have already made the switch to TaskFlow. Start your free trial today.
          </h3>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-white text-indigo-500 px-8 py-4 rounded-lg flex gap-4 cursor-pointer font-semibold">
            Start Free Trial <ArrowRight />
          </button>
          <button className="px-8 py-4 border-2 rounded-lg border-white text-white cursor-pointer font-semibold">Schedule a Demo</button>
        </div>
        <p className="text-indigo-200">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default CTA;
