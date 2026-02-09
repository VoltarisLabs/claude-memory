import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Clock, Calculator } from 'lucide-react'
import GlowCard from './GlowCard'
import AnimatedCounter from './AnimatedCounter'

const SliderInput = ({ label, value, onChange, min, max, step, prefix = '', suffix = '' }) => {
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-white/80 text-sm font-medium">{label}</label>
        <span className="text-white font-bold text-lg">
          {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10"
          style={{
            background: `linear-gradient(to right, #0080FF ${percentage}%, rgba(255,255,255,0.1) ${percentage}%)`
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-white/40">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  )
}

const ROICalculator = () => {
  const [salary, setSalary] = useState(3500)
  const [missedCalls, setMissedCalls] = useState(20)
  const [dealValue, setDealValue] = useState(2000)

  const calculations = useMemo(() => {
    const annualStaffCost = salary * 12
    const missedOpportunityCost = missedCalls * 52 * dealValue * 0.05
    const totalCurrentCost = annualStaffCost + missedOpportunityCost
    const titleVoiceCost = (1500 * 12) + 5000 // $23k first year
    const annualSavings = totalCurrentCost - titleVoiceCost
    const roiPercentage = titleVoiceCost > 0 ? Math.round((annualSavings / titleVoiceCost) * 100) : 0
    const monthlySavings = annualSavings / 12
    const paybackMonths = monthlySavings > 0 ? Math.ceil(titleVoiceCost / monthlySavings) : 0

    return {
      annualStaffCost,
      missedOpportunityCost,
      totalCurrentCost,
      titleVoiceCost,
      annualSavings: Math.max(0, annualSavings),
      roiPercentage: Math.max(0, roiPercentage),
      paybackMonths
    }
  }, [salary, missedCalls, dealValue])

  const resultCards = [
    {
      label: 'Annual Savings',
      value: calculations.annualSavings,
      prefix: '$',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      label: 'ROI',
      value: calculations.roiPercentage,
      suffix: '%',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      label: 'Payback Period',
      value: calculations.paybackMonths,
      suffix: ' mo',
      icon: Clock,
      color: 'purple'
    }
  ]

  const colorMap = {
    emerald: 'text-emerald-400',
    blue: 'text-[#0080FF]',
    purple: 'text-purple-400'
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <GlowCard>
        <div className="p-8 bg-[#080808] rounded-xl border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-[#0080FF]" />
            </div>
            <h3 className="text-xl font-bold text-white">Your Current Costs</h3>
          </div>

          <div className="space-y-8">
            <SliderInput
              label="Monthly Receptionist Salary"
              value={salary}
              onChange={setSalary}
              min={2000}
              max={6000}
              step={250}
              prefix="$"
            />
            <SliderInput
              label="Missed Calls Per Week"
              value={missedCalls}
              onChange={setMissedCalls}
              min={5}
              max={50}
              step={1}
            />
            <SliderInput
              label="Average Deal Value"
              value={dealValue}
              onChange={setDealValue}
              min={500}
              max={5000}
              step={100}
              prefix="$"
            />
          </div>

          <p className="text-white/40 text-xs mt-6">
            * Assumes 5% of missed calls result in lost deals (conservative estimate)
          </p>
        </div>
      </GlowCard>

      {/* Results */}
      <div className="space-y-6">
        {resultCards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlowCard>
              <div className="p-6 bg-[#080808] rounded-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm mb-1">{card.label}</p>
                    <p className={`text-3xl font-bold ${colorMap[card.color]}`}>
                      {card.prefix || ''}<AnimatedCounter value={card.value} duration={800} />{card.suffix || ''}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <card.icon className={`w-6 h-6 ${colorMap[card.color]}`} />
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}

        {/* Cost Comparison */}
        <GlowCard>
          <div className="p-6 bg-[#080808] rounded-xl border border-white/10">
            <h4 className="text-white font-semibold mb-4">Cost Comparison</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Current annual cost</span>
                <span className="text-white font-medium">${calculations.totalCurrentCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Title Voice (Year 1)</span>
                <span className="text-white font-medium">${calculations.titleVoiceCost.toLocaleString()}</span>
              </div>
              <div className="h-px bg-white/10 my-2" />
              <div className="flex justify-between text-sm">
                <span className="text-emerald-400 font-semibold">You save</span>
                <span className="text-emerald-400 font-bold">${calculations.annualSavings.toLocaleString()}/yr</span>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </div>
  )
}

export default ROICalculator
