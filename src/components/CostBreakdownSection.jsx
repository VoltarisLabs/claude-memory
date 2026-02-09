import { motion } from 'framer-motion'

const CostBreakdownSection = ({ calculations, numReceptionists, salary }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.4 }}
    viewport={{ once: true }}
    className="p-5 sm:p-6 lg:p-8 rounded-xl bg-white/[0.03] border border-white/[0.06]"
  >
    {/* Header */}
    <h4 className="text-lg font-semibold text-white mb-6">Cost Breakdown</h4>

    <div className="space-y-5">
      {/* Current Costs */}
      <div>
        <p className="text-[11px] font-semibold text-white/40 mb-3 uppercase tracking-widest">
          Current Annual Costs
        </p>
        <div className="space-y-1.5">
          <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/[0.03]">
            <div>
              <span className="text-sm text-white/70">Reception Staff</span>
              {numReceptionists > 1 && (
                <p className="text-[11px] text-white/40 mt-0.5">
                  {numReceptionists} staff &times; ${salary.toLocaleString()}/mo &times; 12
                </p>
              )}
            </div>
            <span className="text-sm font-semibold text-white tabular-nums">
              ${calculations.annualStaffCost.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/[0.03]">
            <span className="text-sm text-white/70">Lost Opportunities</span>
            <span className="text-sm font-semibold text-orange-400 tabular-nums">
              ${calculations.missedOpportunityCost.toLocaleString()}
            </span>
          </div>

          <div className="h-px bg-white/[0.06] my-2" />

          <div className="flex justify-between items-center py-2 px-4">
            <span className="text-sm font-medium text-white">Total</span>
            <span className="text-base font-bold text-white tabular-nums">
              ${calculations.totalCurrentCost.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Title Voice Cost */}
      <div>
        <p className="text-[11px] font-semibold text-white/40 mb-3 uppercase tracking-widest">
          With Title Voice (Year 1)
        </p>
        <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/[0.03] border border-[#0080FF]/10">
          <span className="text-sm text-white/70">Professional Plan</span>
          <span className="text-sm font-semibold text-[#0080FF] tabular-nums">
            ${calculations.titleVoiceCost.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Savings */}
      <div className="pt-4 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
          <div>
            <p className="text-[11px] font-semibold text-emerald-400/70 uppercase tracking-widest mb-1">
              You Save
            </p>
            <p className="text-xs text-white/40">Per year with Title Voice</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight">
              ${calculations.annualSavings.toLocaleString()}
            </p>
            <p className="text-xs text-emerald-400/50 mt-1">
              ${calculations.monthlySavings.toLocaleString()}/month
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export default CostBreakdownSection
