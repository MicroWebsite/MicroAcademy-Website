import Image from "next/image";
import { Briefcase, Users } from "lucide-react";
import { recruitmentServiceCards } from "@/app/data/recruitmentPageData";

const iconByType = {
  briefcase: Briefcase,
  users: Users,
} as const;

export default function ServicesContentSection() {
  return (
    <section className="w-full bg-bg-cream px-8 py-24">
      <div className="max-w-[1216px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-8 lg:max-w-[576px] w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
              An Extension of Your
              <br />
              HR Ecosystem
            </h2>

            <div className="flex flex-col gap-8">
              {recruitmentServiceCards.map((card, i) => {
                const Icon = iconByType[card.icon];

                return (
                  <div
                    key={i}
                    className="flex flex-col gap-4 bg-white p-8 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary">
                        <Icon
                          className={
                            card.icon === "users" ? "w-6 h-3" : "w-[18px] h-5"
                          }
                        />
                      </span>
                      <h3 className="text-2xl leading-8 font-bold text-text-dark font-manrope">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-base leading-[26px] text-text-muted-alt font-manrope">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-8 flex-1">
            <div className="relative w-full overflow-hidden h-[324px] rounded-2xl shadow-xl">
              <Image
                src="/assets/service/recruitment-meeting.png"
                alt="Team strategy meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </div>

            <div className="relative overflow-hidden bg-linear-to-r from-primary to-secondary rounded-2xl p-10 shadow-lg">
              <h4 className="text-2xl leading-8 text-white mb-4 font-manrope font-normal">
                The Micro Academy Difference
              </h4>
              <p className="text-base text-white leading-[32px] opacity-90 font-manrope">
                We don&apos;t just fill seats; we architect teams. By
                functioning as a seamless extension of your internal HR
                department, we inherit your culture, your standards, and your
                ambitions to deliver talent that fits perfectly from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
