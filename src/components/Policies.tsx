"use client";

import { motion } from "framer-motion";

const policies = [
  {
    title: "Service Guarantee",
    text: "We will make every attempt to ensure you're pleased with your experience at Rose & Stone Salon. In the event that you are not completely satisfied, please let us know within 48 hours of the service. Salon services & retail products are non-refundable.",
  },
  {
    title: "Cancellations & No Shows",
    text: "A 48-hour notice is required to cancel or change any appointment. We require a credit card on file at the time of booking. Cancellations made with less than 48 hours notice may be subject to a charge of 50% of the booked appointment value. No call/no show clients will be charged 100% of their missed appointment fee. If you are more than 15 minutes late, you may be asked to reschedule and may be subject to our cancellation fee. Appointments left unconfirmed 24 hours prior are subject to cancellation.",
  },
  {
    title: "Illness Policy",
    text: "Please do not arrive to your appointment with any illness (sore throat, runny nose, fever, cough, etc.) or if you have not been feeling well. You will be asked to reschedule and may be subject to our cancellation fee.",
  },
  {
    title: "Children",
    text: "Due to safety hazards present in our environment — sharp implements, hot tools, and chemicals — we are unable to accommodate unattended children under the age of 12. Children under 12 receiving a service must be accompanied by an adult.",
  },
];

export default function Policies() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            Good to Know
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal">
            Salon Policies
          </h2>
        </motion.div>

        <div className="space-y-6">
          {policies.map((policy, i) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="font-serif text-lg text-charcoal mb-1.5">
                {policy.title}
              </h3>
              <p className="text-stone text-sm font-light leading-relaxed">
                {policy.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
