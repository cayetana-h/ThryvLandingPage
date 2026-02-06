import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 rounded-l-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Be the First to{" "}
            <span className="text-gradient">Experience MindPulse</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join our waitlist to get early access when we launch. 
            Be part of the journey to smarter studying.
          </p>

          {/* Form */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-teal-500/30 shadow-elevated"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                You're on the list!
              </h3>
              <p className="text-muted-foreground">
                We'll notify you as soon as MindPulse is ready.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 px-6 text-base rounded-xl border-border bg-card focus:border-teal-500 focus:ring-teal-500/20"
              />
              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={status === "loading"}
                className="flex-shrink-0"
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Trust elements */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            No spam, ever. We respect your inbox.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
