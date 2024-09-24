import Link from "next/link";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";

const planOptionsDataRows = [
  {
    label: "Encrypts included",
    free: "500 p/m",
    joyRide: "Unlimited",
    carload: "Unlimited",
    expedition: "Unlimited",
  },
  {
    label: "Decrypts included",
    free: "500 p/m",
    joyRide: "Unlimited",
    carload: "Unlimited",
    expedition: "Unlimited",
  },
  {
    label: "Car Runs included",
    free: true,
    joyRide: true,
    carload: true,
    expedition: true,
  },
  {
    label: "Multiple Users per Team",
    free: true,
    joyRide: true,
    carload: true,
    expedition: true,
  },
  {
    label: "Multiple Teams",
    free: true,
    joyRide: true,
    carload: true,
    expedition: true,
  },
  {
    label: "Compliance Onboarding",
    free: false,
    joyRide: true,
    carload: true,
    expedition: true,
  },
  {
    label: "Solutions Engineer Support",
    free: false,
    joyRide: true,
    carload: true,
    expedition: true,
  },
  {
    label: "Dedicated Account Manager",
    free: false,
    joyRide: false,
    carload: true,
    expedition: true,
  },
  {
    label: "SLA for 99.99% Uptime",
    free: false,
    joyRide: false,
    carload: false,
    expedition: true,
  },
  {
    label: "Email Support",
    free: false,
    joyRide: false,
    carload: false,
    expedition: true,
  },
  {
    label: "Advanced Support Scope",
    free: false,
    joyRide: false,
    carload: false,
    expedition: true,
  },
];

const PlanOptionsSec = () => {
  return (
    <>
      <section>
        <div className="max-w-8xl mx-auto px-4 pb-20 md:px-8 xl:px-12 lg:pb-24">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[64rem] lg:min-w-[78rem]">
              <thead>
                <tr>
                  <th className="px-4 py-6">
                    <div className="flex flex-col items-start text-start gap-2">
                      <h3 className="text-2xl font-bold lg:text-4xl">
                        Plan Options
                      </h3>
                      <span className="text-xs text-[#444444] font-medium lg:text-lg">
                        Compare features, pricing, and membership benefits
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-6">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-sm font-semibold text-accent1 lg:text-base">
                        Free
                      </span>
                      <Link
                        href="/pricing"
                        className={`w-full flex items-center justify-center px-4 py-2 rounded-full gap-2 bg-black text-white text-sm font-medium lg:text-lg`}>
                        <span>Get Started Now</span>
                        <CgArrowTopRight className="w-5 h-auto" />
                      </Link>
                    </div>
                  </th>
                  <th className="px-4 py-6">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-sm font-semibold text-accent1 lg:text-base">
                        Joy Ride Plan
                      </span>
                      <Link
                        href="/pricing"
                        className={`w-full flex items-center justify-center px-4 py-2 rounded-full gap-2 bg-black text-white text-sm font-medium lg:text-lg`}>
                        <span>Get Started</span>
                        <CgArrowTopRight className="w-5 h-auto" />
                      </Link>
                    </div>
                  </th>
                  <th className="px-4 py-6">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-sm font-semibold text-accent1 lg:text-base">
                        Carload Plan
                      </span>
                      <Link
                        href="/pricing"
                        className={`w-full flex items-center justify-center px-4 py-2 rounded-full gap-2 bg-black text-white text-sm font-medium lg:text-lg`}>
                        <span>Get Started</span>
                        <CgArrowTopRight className="w-5 h-auto" />
                      </Link>
                    </div>
                  </th>
                  <th className="px-4 py-6">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-sm font-semibold text-accent1 lg:text-base">
                        Expedition Plan
                      </span>
                      <Link
                        href="/pricing"
                        className={`w-full flex items-center justify-center px-4 py-2 rounded-full gap-2 bg-black text-white text-sm font-medium lg:text-lg`}>
                        <span>Get Started</span>
                        <CgArrowTopRight className="w-5 h-auto" />
                      </Link>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {planOptionsDataRows.map((row, index) => (
                  <tr key={index} className="border-b border-b-[#222222]/8">
                    <td className="text-sm font-medium text-[#222222] px-4 py-6 lg:text-xl">
                      {row.label}
                    </td>
                    <td align="center" className="px-4 py-6">
                      {typeof row.free === "string" ? (
                        <span className="text-sm lg:text-xl text-[#222222]">
                          {row.free}
                        </span>
                      ) : row.free ? (
                        <FaCheckCircle
                          size={24}
                          className="w-5 h-auto text-accent1 lg:w-6"
                        />
                      ) : (
                        <FaMinusCircle
                          size={24}
                          className="w-5 h-auto text-[#222222]/70 lg:w-6"
                        />
                      )}
                    </td>
                    <td align="center" className="px-4 py-6">
                      {typeof row.joyRide === "string" ? (
                        <span className="text-sm lg:text-xl text-[#222222]">
                          {row.joyRide}
                        </span>
                      ) : row.joyRide ? (
                        <FaCheckCircle
                          size={24}
                          className="w-5 h-auto text-accent1 lg:w-6"
                        />
                      ) : (
                        <FaMinusCircle
                          size={24}
                          className="w-5 h-auto text-[#222222]/70 lg:w-6"
                        />
                      )}
                    </td>
                    <td align="center" className="px-4 py-6">
                      {typeof row.carload === "string" ? (
                        <span className="text-sm lg:text-xl text-[#222222]">
                          {row.carload}
                        </span>
                      ) : row.carload ? (
                        <FaCheckCircle
                          size={24}
                          className="w-5 h-auto text-accent1 lg:w-6"
                        />
                      ) : (
                        <FaMinusCircle
                          size={24}
                          className="w-5 h-auto text-[#222222]/70 lg:w-6"
                        />
                      )}
                    </td>
                    <td align="center" className="px-4 py-6">
                      {typeof row.expedition === "string" ? (
                        <span className="text-sm lg:text-xl text-[#222222]">
                          {row.expedition}
                        </span>
                      ) : row.expedition ? (
                        <FaCheckCircle
                          size={24}
                          className="w-5 h-auto text-accent1 lg:w-6"
                        />
                      ) : (
                        <FaMinusCircle
                          size={24}
                          className="w-5 h-auto text-[#222222]/70 lg:w-6"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanOptionsSec;
