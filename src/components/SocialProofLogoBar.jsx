const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const SocialProofLogoBar = () => {
  return (
    <div className="w-full h-50 bg-neutral-100 border-t border-b border-neutral-200">
      <div className="h-full max-w-7xl mx-auto flex flex-col justify-center items-stretch gap-8 px-8 max-sm:px-4">
        <p className="text-center text-neutral-600 text-sm">Trusted by leading companies worldwide</p>
        <div className="group flex overflow-x-clip [&::-webkit-scrollbar]:hidden">
          <div className="flex justify-start items-center text-2xl font-semibold text-neutral-400 gap-8 animate-infinite-scroll pr-8 group-hover:[animation-play-state:paused]">
            {alphabets.map(alphabet => (
              <p key={`1-${alphabet}`} className="text-nowrap shrink-0 grow-0">
                Company {alphabet.toUpperCase()}
              </p>
            ))}
          </div>
          <div className="flex justify-start items-center text-2xl font-semibold text-neutral-400 gap-8 animate-infinite-scroll pr-8 group-hover:[animation-play-state:paused]">
            {alphabets.map(alphabet => (
              <p key={`2-${alphabet}`} className="text-nowrap shrink-0 grow-0">
                Company {alphabet.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofLogoBar;
