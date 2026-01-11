import { Star } from "lucide-react";

const testimonials_content = [
  {
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp",
    comment:
      "This has completely transformed how our team works. We've cut our project delivery time in half and collaboration has never been easier.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "StartupXYZ",
    comment: "The best project management tool we've ever used. It's intuitive, powerful, and our entire team adopted it within days.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "Design Lead",
    company: "CreativeStudio",
    comment:
      "We tried every tool out there. This is the only one that actually makes project management enjoyable. The UI is beautiful and it just works.",
    rating: 5,
  },
];

function get_name_initials(name) {
  return name
    .split(" ")
    .map(n => n[0].toUpperCase())
    .join("");
}

const Testimonials = ({ register }) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-20 flex flex-col gap-12 px-8">
        <div ref={register} data-section="default" data-stagger="50" className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-semibold text-4xl">Loved by teams everywhere</h2>
          <h3 className="text-xl text-neutral-600">See what our customers have to say about TaskFlow.</h3>
        </div>
        <div ref={register} data-section="default" data-stagger="100" className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
          {testimonials_content.map(({ name, position, company, comment, rating }) => (
            <div key={name} className="border border-neutral-200 rounded-lg px-6 py-8 flex flex-col justify-between items-start gap-4">
              <div className="flex gap-1">
                {Array.from({ length: rating }, (_, index) => (
                  <Star key={index} fill="#FFBF00" strokeWidth={0} />
                ))}
              </div>
              <p className="text-neutral-600">"{comment}"</p>
              <div className="flex gap-4 items-center">
                <div className="bg-indigo-500 text-white rounded-full h-10 w-10 aspect-square flex justify-center items-center shrink-0">
                  {get_name_initials(name)}
                </div>
                <div>
                  <p className="font-semibold text-md">{name}</p>
                  <p className="text-neutral-600 text-sm">
                    {position} at {company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
