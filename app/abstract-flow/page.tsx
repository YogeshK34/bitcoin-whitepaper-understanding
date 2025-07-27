import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function AbstractFlowPage() {
  const flowSteps = [
    {
      type: "section-title",
      title: "Abstract: Core Concepts",
      description: "A high-level overview of the Bitcoin whitepaper's proposal.",
    },
    {
      type: "concept",
      title: "The Problem",
      description:
        "Online payments rely on trusted third parties (financial institutions), leading to inherent weaknesses like mediation costs and lack of irreversible transactions.",
    },
    {
      type: "concept",
      title: "Digital Signatures Alone Insufficient",
      description:
        "While digital signatures prove ownership, they don't prevent double-spending without a trusted third party, losing the benefits of a truly peer-to-peer system.",
    },
    {
      type: "concept",
      title: "The Goal",
      description:
        "To create a purely peer-to-peer version of electronic cash that allows direct payments without a financial institution.",
    },
    {
      type: "concept",
      title: "Proposed Solution: P2P Network",
      description: "A peer-to-peer network is proposed to solve the double-spending problem without relying on trust.",
    },
    {
      type: "concept",
      title: "Mechanism: Timestamping & Hashing",
      description:
        "The network timestamps transactions by hashing them into an ongoing chain of hash-based Proof-of-Work.",
    },
    {
      type: "concept",
      title: "Result: Immutable Record",
      description:
        "This process forms a record that cannot be changed without redoing the computationally expensive Proof-of-Work.",
    },
    {
      type: "concept",
      title: "Consensus: Longest Chain Rule",
      description:
        "The longest chain serves as proof of the sequence of events and represents the largest pool of CPU power.",
    },
    {
      type: "concept",
      title: "Security: Honest Majority",
      description:
        "As long as a majority of CPU power is controlled by honest nodes, they will generate the longest chain and outpace attackers.",
    },
    {
      type: "concept",
      title: "Network Resilience",
      description:
        "The network requires minimal structure; messages are broadcast, and nodes can leave/rejoin, accepting the longest chain as truth.",
    },
    {
      type: "concept",
      title: "Outcome: Trustless Electronic Cash",
      description: "A secure, decentralized, and trustless electronic cash system is achieved.",
    },
    {
      type: "section-title",
      title: "Introduction: Why Trustlessness?",
      description: "Delving deeper into the problems of the traditional trust-based model.",
    },
    {
      type: "concept",
      title: "Reliance on Trusted Third Parties",
      description:
        "Commerce relies on financial institutions as trusted third parties, but this model has inherent weaknesses.",
    },
    {
      type: "concept",
      title: "Costs of Mediation",
      description:
        "Mediation by third parties increases transaction costs, making small, casual transactions impractical.",
    },
    {
      type: "concept",
      title: "Loss of Non-Reversible Payments",
      description:
        "The possibility of transaction reversal (e.g., chargebacks) creates a 'broader cost' for non-reversible services, affecting both senders and receivers.",
    },
    {
      type: "concept",
      title: "Need for Cryptographic Proof",
      description:
        "The solution must be based on cryptographic proof instead of trust, allowing direct transactions without a trusted third party.",
    },
    {
      type: "concept",
      title: "Blockchain's Selling Point: Irreversibility",
      description:
        "Blockchain ensures transactions are irreversible once confirmed, providing 100% (or even '110%') completion and certainty, unlike traditional systems.",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 dark:bg-gray-950">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-50">
        Bitcoin Whitepaper Flow: Abstract & Introduction
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {flowSteps.map((step, index) => (
          <div key={index} className="flex items-center">
            {step.type === "section-title" ? (
              <Card className="w-[300px] h-[150px] flex flex-col justify-center items-center text-center bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800 dark:text-blue-200">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-blue-700 dark:text-blue-300">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ) : (
              <Card className="w-[300px] h-[220px] flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{step.description}</CardDescription>
                </CardContent>
              </Card>
            )}
            {index < flowSteps.length - 1 && (
              <ArrowRight className="h-8 w-8 mx-4 text-gray-500 dark:text-gray-400 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
