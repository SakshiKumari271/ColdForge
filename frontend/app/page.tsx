"use client";

import { motion } from "framer-motion";
import { Mail, Search, Zap, Code, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

const features = [
  {
    title: "Email Verifier",
    description: "Instantly check if an email address is valid and active with high-accuracy SMTP verification.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Permutator",
    description: "Generate potential email combinations for company employees based on their names and domain.",
    icon: Search,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "AI Email Drafter",
    description: "Craft personalized outreach emails using your resume and company context with GPT-4 or Llama.",
    icon: Zap,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsVerifying(true);
    setVerificationResult(null);

    try {
      const res = await fetch("http://localhost:5000/verify/verify-single", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setVerificationResult(data);
    } catch (err) {
      console.error(err);
      setVerificationResult({ status: "Error", message: "Connect to backend" });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        
        <div className="container mx-auto px-4 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8"
          >
            <CheckCircle2 size={16} />
            <span>100% Free | No API Key Required for Verification</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl mb-8"
          >
            Premium Outreach <br />
            <span className="premium-text-gradient">For Human Success</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            A calm, professional suite of tools to help you find, verify, and reach out to anyone. 
            No complex signups, no hidden fees. Just pure outreach power.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/permutator">
              <button className="premium-gradient inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105">
                Start Permuting
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="/docs">
              <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-4 font-semibold text-foreground transition-all hover:bg-muted">
                Learn How it Works
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Verification Access */}
      <section className="container mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-1 shadow-2xl ring-1 ring-border/50"
        >
          <div className="rounded-[calc(1.5rem-1px)] bg-background p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Fast Email Verification</h2>
            <form onSubmit={handleVerify} className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-border bg-muted/30 py-4 pl-12 pr-4 text-base outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isVerifying}
                className="rounded-xl bg-foreground px-8 py-4 font-bold text-background transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isVerifying ? "Verifying..." : "Check Validity"}
              </button>
            </form>

            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8 rounded-2xl border border-border bg-muted/20 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "mt-1 rounded-full p-2 text-white",
                    verificationResult.status === "Valid" ? "bg-green-500" : 
                    verificationResult.status === "Invalid" ? "bg-red-500" : "bg-yellow-500"
                  )}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{verificationResult.status}</h3>
                    <p className="text-muted-foreground">
                      {verificationResult.details || `Result for ${email}: ${verificationResult.status}.`}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className={cn("inline-flex w-fit rounded-2xl p-4 transition-transform group-hover:scale-110", feature.bg, feature.color)}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground line-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section className="container mx-auto px-4 py-12 sm:px-8">
        <div className="rounded-3xl border border-border bg-muted/20 p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">A Professional Toolkit Built for You</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
                Finding the right person to reach out to is hard enough. Verification shouldn't be. 
                We built Codeforage to be a clean, distraction-free environment for outreach professionals.
            </p>
        </div>
      </section>
    </div>
  );
}
