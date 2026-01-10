const SocialProofLogoBar = () => {
  return (
    <div className="w-full h-50 bg-neutral-100 border-t border-b border-neutral-200">
      <div className="h-full max-w-7xl mx-auto flex flex-col justify-center items-stretch gap-8 px-8">
        <p className="text-center text-neutral-600 text-sm">Trusted by leading companies worldwide</p>
        <div className="flex justify-around items-center text-2xl font-semibold text-neutral-300">
          <p>Company A</p>
          <p>Company B</p>
          <p>Company C</p>
          <p>Company D</p>
          <p>Company E</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofLogoBar;
