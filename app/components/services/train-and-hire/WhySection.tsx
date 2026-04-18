import Image from "next/image";
import { trainAndHireWhyPoints } from "@/app/data/trainAndHirePageData";

export default function WhySection() {
  return (
    <section className="w-full bg-white px-8">
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-16 items-center min-h-[768px] py-32">
        <div className="relative flex gap-4 shrink-0 w-[568px] max-w-full h-[512px]">
          <div className="flex flex-col gap-4 flex-1 pt-12">
            <div className="relative rounded-2xl overflow-hidden h-[256px]">
              <Image
                src="/assets/service/tech-training.png"
                alt="Tech training session"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[192px]">
              <Image
                src="/assets/service/collaboration.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1 pb-12">
            <div className="relative rounded-2xl overflow-hidden h-[192px]">
              <Image
                src="/assets/career/office-space.png"
                alt="Modern office space"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[256px]">
              <Image
                src="/assets/career/graduation.png"
                alt="Graduation celebration"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <p className="text-xs font-bold uppercase tracking-[1.2px] text-primary font-inter">
            WHY CHOOSE US
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
            Why Micro Academy?
          </h2>

          <div className="flex flex-col gap-8 pt-4">
            {trainAndHireWhyPoints.map((point, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-1 self-stretch bg-primary rounded-full shrink-0" />
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl leading-7 text-text-dark font-manrope font-bold">
                    {point.title}
                  </h4>
                  <p className="text-base leading-6 text-text-muted-alt font-manrope">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
