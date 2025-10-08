'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Users, Heart, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function Features() {
  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Support for Every Step
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Arula offers a range of services tailored to meet the unique needs of each individual,
            from early intervention to ongoing support. Our platform integrates seamlessly into your
            daily life, providing accessible and effective care.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: Users,
              value: 7200,
              suffix: '+',
              label: 'Families Worldwide',
              color: 'from-blue-500 to-blue-600',
              bgColor: 'bg-blue-50',
              delay: 0.1,
            },
            {
              icon: Heart,
              value: 95,
              suffix: '%',
              label: 'Satisfaction Rate',
              color: 'from-pink-500 to-pink-600',
              bgColor: 'bg-pink-50',
              delay: 0.2,
            },
            {
              icon: TrendingUp,
              value: 1000,
              suffix: '+',
              label: 'Success Stories',
              color: 'from-purple-500 to-purple-600',
              bgColor: 'bg-purple-50',
              delay: 0.3,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="relative"
              >
                <div
                  className={`${item.bgColor} rounded-xl p-3 lg:p-5 shadow-sm h-full flex items-center gap-8`}
                >
                  {/* Icon */}
                  <div
                    className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                  </div>

                  {/* Number and Text */}
                  <div className="flex flex-col">
                    <h3
                      className={`text-xl sm:text-xl lg:text-2xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                    >
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-gray-500 mt-2">
                      {item.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
