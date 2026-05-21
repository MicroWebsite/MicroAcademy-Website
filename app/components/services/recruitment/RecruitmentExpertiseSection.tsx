import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { recruitmentExpertiseGroups } from "@/app/data/recruitmentInsightsData";

export default function RecruitmentExpertiseSection() {
  return (
    <section className="w-full bg-bg-cream px-8 py-24">
      <div className="max-w-[1216px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted-alt mb-3">
            Recruitment Strength
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-manrope">
            Areas of Expertise
          </h2>
          <p className="text-text-muted-alt mt-4 max-w-3xl mx-auto">
            Specialized hiring support from entry-level technical roles to
            leadership positions across core and emerging IT domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recruitmentExpertiseGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <BriefcaseBusiness className="w-5 h-5 text-text-badge" />
                </span>
                <h3 className="text-lg font-bold text-text-dark font-manrope leading-tight">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {group.roles.map((role) => (
                  <li
                    key={role}
                    className="text-sm text-text-muted-alt leading-6 flex items-start gap-2"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
