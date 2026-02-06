import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Student-First Design",
    description:
      "We understand the pressures you face. Every feature is designed with your real challenges in mind.",
  },
  {
    icon: Lightbulb,
    title: "Science Over Hype",
    description:
      "No empty promises. We only build features backed by peer-reviewed cognitive science research.",
  },
  {
    icon: Users,
    title: "Built By Students",
    description:
      "Our team includes students and recent graduates who've experienced these struggles firsthand.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-narrow mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-teal-500 uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We're on a Mission to{" "}
            <span className="text-gradient">Unlock Minds</span>
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We started MindPulse after watching too many friends burn out from
            ineffective study habits. Endless hours in the library, only to feel
            like nothing stuck. Breaks that turned into hour-long doom-scrolling
            sessions. The frustration of knowing you're capable of more.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We knew there had to be a better way. By combining cutting-edge
            neuroscience with thoughtful design, we're creating tools that work
            with your brain, not against it. Quick, effective, and actually
            enjoyable to use.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-primary mb-6">
                <value.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
