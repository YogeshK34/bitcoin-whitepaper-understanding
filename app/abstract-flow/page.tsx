import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowDown, CheckCircle, AlertCircle, Shield, Network, Clock, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AbstractFlowPage() {
  const flowSteps = [
    {
      type: "section-title",
      title: "Abstract: Core Concepts",
      description: "A high-level overview of the Bitcoin whitepaper's proposal.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-white",
    },
    {
      type: "concept",
      title: "The Problem",
      description:
        "Online payments rely on trusted third parties (financial institutions), leading to inherent weaknesses like mediation costs and lack of irreversible transactions.",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20",
      borderColor: "border-red-200 dark:border-red-700",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      type: "concept",
      title: "Digital Signatures Alone Insufficient",
      description:
        "While digital signatures prove ownership, they don't prevent double-spending without a trusted third party, losing the benefits of a truly peer-to-peer system.",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
      borderColor: "border-orange-200 dark:border-orange-700",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      type: "concept",
      title: "The Goal",
      description:
        "To create a purely peer-to-peer version of electronic cash that allows direct payments without a financial institution.",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
      borderColor: "border-emerald-200 dark:border-emerald-700",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      type: "concept",
      title: "Proposed Solution: P2P Network",
      description: "A peer-to-peer network is proposed to solve the double-spending problem without relying on trust.",
      icon: <Network className="w-5 h-5" />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      borderColor: "border-purple-200 dark:border-purple-700",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      type: "concept",
      title: "Mechanism: Timestamping & Hashing",
      description:
        "The network timestamps transactions by hashing them into an ongoing chain of hash-based Proof-of-Work.",
      icon: <Clock className="w-5 h-5" />,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20",
      borderColor: "border-indigo-200 dark:border-indigo-700",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      type: "concept",
      title: "Result: Immutable Record",
      description:
        "This process forms a record that cannot be changed without redoing the computationally expensive Proof-of-Work.",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20",
      borderColor: "border-teal-200 dark:border-teal-700",
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      type: "concept",
      title: "Consensus: Longest Chain Rule",
      description:
        "The longest chain serves as proof of the sequence of events and represents the largest pool of CPU power.",
      icon: <Cpu className="w-5 h-5" />,
      color: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20",
      borderColor: "border-cyan-200 dark:border-cyan-700",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      type: "concept",
      title: "Security: Honest Majority",
      description:
        "As long as a majority of CPU power is controlled by honest nodes, they will generate the longest chain and outpace attackers.",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
      borderColor: "border-green-200 dark:border-green-700",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      type: "concept",
      title: "Network Resilience",
      description:
        "The network requires minimal structure; messages are broadcast, and nodes can leave/rejoin, accepting the longest chain as truth.",
      icon: <Network className="w-5 h-5" />,
      color: "bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20",
      borderColor: "border-violet-200 dark:border-violet-700",
      iconColor: "text-violet-600 dark:text-violet-400",
    },
    {
      type: "concept",
      title: "Outcome: Trustless Electronic Cash",
      description: "A secure, decentralized, and trustless electronic cash system is achieved.",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
      borderColor: "border-emerald-200 dark:border-emerald-700",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      type: "section-title",
      title: "Introduction: Why Trustlessness?",
      description: "Delving deeper into the problems of the traditional trust-based model.",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-gradient-to-br from-slate-600 to-slate-700",
      textColor: "text-white",
    },
    {
      type: "concept",
      title: "Reliance on Trusted Third Parties",
      description:
        "Commerce relies on financial institutions as trusted third parties, but this model has inherent weaknesses.",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20",
      borderColor: "border-red-200 dark:border-red-700",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      type: "concept",
      title: "Costs of Mediation",
      description:
        "Mediation by third parties increases transaction costs, making small, casual transactions impractical.",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
      borderColor: "border-orange-200 dark:border-orange-700",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      type: "concept",
      title: "Loss of Non-Reversible Payments",
      description:
        "The possibility of transaction reversal (e.g., chargebacks) creates a 'broader cost' for non-reversible services, affecting both senders and receivers.",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20",
      borderColor: "border-yellow-200 dark:border-yellow-700",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      type: "concept",
      title: "Need for Cryptographic Proof",
      description:
        "The solution must be based on cryptographic proof instead of trust, allowing direct transactions without a trusted third party.",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      borderColor: "border-blue-200 dark:border-blue-700",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      type: "concept",
      title: "Blockchain's Selling Point: Irreversibility",
      description:
        "Blockchain ensures transactions are irreversible once confirmed, providing 100% (or even '110%') completion and certainty, unlike traditional systems.",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
      borderColor: "border-emerald-200 dark:border-emerald-700",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
            Bitcoin Whitepaper Analysis
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Abstract & Introduction Flow
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A visual journey through the foundational concepts of Bitcoin's revolutionary peer-to-peer electronic cash
            system
          </p>
          <Link href="/">
            <Button variant="outline" className="mb-8 bg-transparent">
              ← Back to Main Explanation
            </Button>
          </Link>
        </div>
      </div>

      {/* Flow Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {flowSteps.map((step, index) => (
            <div key={index} className="relative">
              {step.type === "section-title" ? (
                <div className="flex justify-center mb-12">
                  <Card
                    className={`${step.color} border-0 shadow-2xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <CardHeader className="text-center py-8 px-8">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white/20 rounded-full">{step.icon}</div>
                      </div>
                      <CardTitle className={`text-2xl md:text-3xl font-bold ${step.textColor}`}>{step.title}</CardTitle>
                      <CardDescription className={`text-lg ${step.textColor} opacity-90 mt-2`}>
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ) : (
                <div className="flex justify-center mb-8">
                  <Card
                    className={`w-full max-w-2xl ${step.color} ${step.borderColor} border-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-2 rounded-lg bg-white dark:bg-gray-800 ${step.iconColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            {step.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              Step {index}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Connection Arrow */}
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center mb-8">
                  <div className="flex flex-col items-center">
                    <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-600 animate-pulse" />
                    <div className="w-px h-4 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Ready to Dive Deeper?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Continue exploring the Bitcoin whitepaper with detailed explanations of each section.
              </p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-2">
                  Explore Full Explanation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
