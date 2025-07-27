import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function WhitepaperExplanationPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight text-gray-900 dark:text-gray-50">
        Understanding the Bitcoin Whitepaper
      </h1>

      {/* Abstract Section */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            1. Abstract: The Core Idea
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            A high-level overview of Satoshi Nakamoto's revolutionary proposal.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            The abstract introduces the concept of a **purely peer-to-peer electronic cash system**, aiming to enable
            online payments directly between parties without the need for a financial institution. This immediately
            highlights the desire to remove intermediaries from financial transactions.
          </p>
          <p>
            It acknowledges that while digital signatures are a part of the solution for verifying ownership, they are
            insufficient on their own. The core problem remains: **preventing double-spending without a trusted third
            party**. If a central authority is still required for this, the fundamental benefits of a decentralized
            system are lost.
          </p>
          <p>
            The proposed solution involves a peer-to-peer network that timestamps transactions by hashing them into an
            **ongoing chain of hash-based Proof-of-Work**. This process creates an immutable record that cannot be
            altered without redoing the immense computational effort of the Proof-of-Work.
          </p>
          <p>
            A crucial aspect is the **"longest chain" rule**: this chain not only serves as proof of the sequence of
            events but also signifies that it originated from the largest pool of CPU power. The security of the network
            relies on the assumption that a majority of this CPU power is controlled by honest nodes, which will
            consistently outpace any attackers.
          </p>
          <p>
            Finally, the abstract emphasizes the network's **minimal structure**. Messages are broadcast on a
            best-effort basis, and nodes can freely join or leave, always accepting the longest Proof-of-Work chain as
            the definitive history of transactions.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Introduction Section */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            2. Introduction: Why Trustlessness is Essential
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Exploring the inherent weaknesses of the traditional trust-based financial model.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            The introduction elaborates on the problems with the existing internet commerce model, which heavily relies
            on **financial institutions as trusted third parties**. While seemingly functional, this system suffers from
            fundamental weaknesses rooted in the need for trust.
          </p>
          <p>
            A significant issue is the **cost of mediation**. Financial institutions mediate disputes and manage
            transactions, which incurs costs. These costs are passed on, limiting the feasibility of small, casual
            transactions (micropayments) and increasing overall transaction expenses for both consumers and merchants.
          </p>
          <p>
            A "broader cost" is identified in the **loss of ability to make non-reversible payments for non-reversible
            services**. In traditional systems, transactions can often be reversed (e.g., chargebacks). This creates
            uncertainty and risk for sellers, especially for digital goods or services that cannot be physically
            returned. This possibility of reversal affects both the sending and receiving parties.
          </p>
          <p>
            This highlights a key "selling point" of blockchain: its **irreversibility**. Once a transaction is
            confirmed on the blockchain, it is final and cannot be undone by a third party. This provides a level of
            certainty and completion that traditional payment systems often lack, ensuring payments are truly "100% (or
            even 110%) completed."
          </p>
          <p>
            The section concludes by emphasizing the need for an electronic payment system based on **cryptographic
            proof instead of trust**. This foundational shift aims to allow any two willing parties to transact
            directly, without the vulnerabilities and inefficiencies introduced by relying on a central authority. The
            identity and control of funds remain solely with the owner, protected by cryptography.
          </p>
        </CardContent>
      </Card>

      {/* You can add more sections here as we go through the whitepaper */}
    </div>
  )
}
