import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, RefreshCw, Shield, TrendingUp, Coffee } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Laser-Sharp Focus",
    description:
      "Train your brain to concentrate deeply on tasks, filtering out distractions that derail your productivity.",
  },
  {
    icon: Zap,
    title: "Instant Attention Reset",
    description:
      "Quick games between study blocks that refresh your mind and prepare you for the next learning sprint.",
  },
  {
    icon: RefreshCw,
    title: "Group Study Sessions",
    description:
      "Boost motivation and retention by creating group sessions to stick to effective time management.",
  },
  {
    icon: Shield,
    title: "Break the Doom Scroll",
    description:
      "Replace mindless social media scrolling with purposeful brain breaks that actually help you.",
  },
  {
    icon: TrendingUp,
    title: "Better Study Efficiency",
    description:
      "Spend less time studying with more retention. Work smarter, not longer.",
  },
  {
    icon: Coffee,
    title: "Combat Mental Fatigue",
    description:
      "Strategic cognitive exercises that fight burnout and keep your mind fresh throughout long sessions.",
  },
];

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="section-padding bg-gradient-subtle">
      <div className="container-wide mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-teal-500 uppercase tracking-wider mb-4 block">
            Why Train Your Brain
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Benefits That Transform Your{" "}
            <span className="text-gradient">Study Life</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            It isn't just about playing a game — it's about building
            mental habits that make everything you do more effective.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-teal-500/30 hover:shadow-elevated transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
