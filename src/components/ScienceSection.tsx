import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Activity, Layers, LineChart } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Neuroplasticity",
    description:
      "Your brain physically changes with practice. Our games are designed to stimulate neural pathways responsible for attention and memory, strengthening them over time.",
  },
  {
    icon: Activity,
    title: "Spaced Cognitive Training",
    description:
      "Short, frequent training sessions are more effective than long ones. We use evidence-based intervals that optimize learning and retention.",
  },
  {
    icon: Layers,
    title: "Multi-Domain Targeting",
    description:
      "Each game targets specific cognitive functions — working memory, inhibitory control, cognitive flexibility — for comprehensive brain training.",
  },
  {
    icon: LineChart,
    title: "Adaptive Difficulty",
    description:
      "Games automatically adjust to your performance, keeping you in the optimal challenge zone where real cognitive growth happens.",
  },
];

export function ScienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="science" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-teal-500/5 rounded-r-full blur-3xl -translate-y-1/2" />
      
      <div className="container-wide mx-auto relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-teal-500 uppercase tracking-wider mb-4 block">
              The Science
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built on{" "}
              <span className="text-gradient">Neuroscience</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach isn't based on trends or hunches. Every game, every
              feature is grounded in decades of cognitive psychology and
              neuroscience research.
            </p>

            <div className="space-y-6">
              {principles.slice(0, 2).map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <principle.icon className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual + More Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Visual Element */}
            <div className="relative aspect-square max-w-md mx-auto mb-8">
              <div className="absolute inset-0 rounded-3xl bg-gradient-card border border-border shadow-elevated" />
              <div className="absolute inset-4 rounded-2xl bg-secondary/50 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary opacity-20 animate-pulse-slow" />
                  <div className="absolute inset-4 w-24 h-24 rounded-full bg-gradient-primary opacity-40 animate-pulse-slow" style={{ animationDelay: "1s" }} />
                  <div className="absolute inset-8 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Brain className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-3 rounded-xl bg-card border border-border shadow-soft"
              >
                <Activity className="h-5 w-5 text-teal-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-card border border-border shadow-soft"
              >
                <LineChart className="h-5 w-5 text-teal-500" />
              </motion.div>
            </div>

            {/* More Principles */}
            {principles.slice(2).map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <principle.icon className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
