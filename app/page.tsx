export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Shopify App Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Shopify App Store{" "}
          <span className="text-[#58a6ff]">Rejections</span>{" "}Before You Submit
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your app bundle and get an instant rejection risk score with actionable fix recommendations — so you ship faster and avoid costly review cycles.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {["Rule-based validation", "ML rejection scoring", "Permission audits", "Metadata checks", "Re-analysis on fix"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] px-4 py-1.5 rounded-full text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Upload your app bundle", desc: "Drag in your manifest, code files, and assets." },
            { step: "2", title: "Get your risk score", desc: "Instant analysis against Shopify's review guidelines." },
            { step: "3", title: "Fix & resubmit", desc: "Apply recommendations and re-run analysis until you're green." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-xl mb-2">{item.step}</div>
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-[#8b949e]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16" id="pricing">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to ship with confidence</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited app scans",
              "Rejection risk score (0–100)",
              "Specific fix recommendations",
              "Permission & metadata audits",
              "Re-analysis after fixes",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What file types can I upload?",
              a: "You can upload your app's manifest (app.toml or shopify.app.toml), JavaScript/TypeScript source files, and asset files. We analyze permissions, metadata, and code patterns against Shopify's review criteria."
            },
            {
              q: "How accurate is the rejection prediction?",
              a: "Our rule-based engine covers 100% of Shopify's published review guidelines. The ML scoring layer is trained on historical approval and rejection patterns, giving you a reliable risk signal before you submit."
            },
            {
              q: "Can I re-analyze after making fixes?",
              a: "Yes. After applying the recommended fixes, simply re-upload your updated bundle and get a fresh risk score. Iterate until your score is in the safe zone, then submit with confidence."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify App Rejection Predictor. Not affiliated with Shopify Inc.
      </footer>
    </main>
  );
}
