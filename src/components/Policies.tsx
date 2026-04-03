"use client";

import { motion } from "framer-motion";

const policies = [
  {
    title: "Service Guarantee",
    text: "We will make every attempt to ensure you're pleased with your experience at Rose & Stone Salon. In the event that you are not completely satisfied, please let us know within 48 hours of the service. Salon services and retail products are non-refundable.",
  },
  {
    title: "Cancellations & No Shows",
    text: "A 48-hour notice is required to cancel or change any appointment. We require a credit card on file at the time of booking. Cancellations made with less than 48 hours notice may be subject to a charge of 50% of the booked appointment value. No-call, no-show clients will be charged 100% of their missed appointment fee. If you are more than 15 minutes late, you may be asked to reschedule and may be subject to our cancellation fee.",
  },
  {
    title: "Illness Policy",
    text: "Please do not arrive to your appointment with any illness, including sore throat, runny nose, fever, or cough. If you have not been feeling well, you will be asked to reschedule and may be subject to our cancellation fee.",
  },
  {
    title: "Children",
    text: "Due to safety hazards present in our environment, including sharp implements, hot tools, and chemicals, we are unable to accommodate unattended children under the age of 12. Children under 12 receiving a service must be accompanied by an adult.",
  },
];

export default function Policies() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-cream">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
              Good to Know
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal tracking-tight">
              Salon Policies
            </h2>
          </motion.div>

          <div className="space-y-8">
            {policies.map((policy, i) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <h3 className="font-serif text-lg text-charcoal mb-2 tracking-wide">
                  {policy.title}
                </h3>
                <p className="text-stone text-sm font-light leading-relaxed">
                  {policy.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
