import Image from "next/image";
import { contractProcessSteps } from "@/app/data/contractHiringPageData";

export default function ProcessSection() {
  return (
    <section className="w-full bg-white px-8 py-24">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-xs font-bold uppercase tracking-[1.2px] text-primary font-inter">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
            A Streamlined Delivery Engine
          </h2>
          <p className="text-lg max-w-[500px] text-text-muted-alt font-manrope">
            Our process is engineered to eliminate friction. From requirement to
            deployment, we ensure a seamless experience focused purely on
            results.
          </p>

          <div className="flex flex-col gap-6 mt-6">
            {contractProcessSteps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 bg-primary text-white font-manrope font-bold">
                  {index + 1}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold text-text-dark font-manrope">
                    {step.title}
                  </h4>
                  <p className="text-text-muted-alt font-manrope">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative w-full flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-[4/5] overflow-hidden rounded-2xl shadow-[0px_24px_40px_-10px_rgba(0,0,0,0.1)]">
            <Image
              src="/assets/service/recruitment-meeting.png"
              alt="Process Strategy Meeting"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
