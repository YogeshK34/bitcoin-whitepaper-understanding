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

      <Separator className="my-12" />

      {/* Transactions Section */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            3. Transactions: The Chain of Digital Signatures
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Understanding how ownership is transferred and verified in a trustless system.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            The whitepaper defines an electronic coin as a **chain of digital signatures**. This means that the history
            of a coin's ownership is recorded through a series of cryptographic proofs.
          </p>
          <p>
            Each owner transfers the coin to the next by digitally signing two key pieces of information:
            <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
              <li>The **hash of the previous transaction** (which proves they received the coin).</li>
              <li>The **public key of the next owner** (the new recipient).</li>
            </ol>
            These signed elements are then added to the end of the "coin's" history, forming a new transaction.
          </p>
          <p>
            The diagram illustrates this chain of ownership:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>
                **Transaction 1 (Leftmost):** Implied **Owner 0** sends the coin to **Owner 1**. * `Owner 1's Public
                Key` (inside the block) is the **recipient** of this transaction. * Owner 0 uses their private key (not
                shown) to sign the transaction data, creating `Owner 0's Signature`.
              </li>
              <li>
                **Transaction 2 (Middle):** **Owner 1** (who was the recipient in Transaction 1, now the **sender**)
                sends the coin to **Owner 2**. * `Owner 2's Public Key` (inside the block) is the **recipient** of this
                transaction. * Owner 1 uses their `Owner 1's Private Key` (shown below the block) to `Sign` the hash of
                the *previous transaction* (Transaction 1) and `Owner 2's Public Key`. This action **creates** `Owner
                1's Signature`.
              </li>
              <li>
                **Verification (from Transaction 1 to Transaction 2):** The dashed "Verify" arrow from `Owner 1's Public
                Key` (from Transaction 1) to `Owner 1's Signature` (in Transaction 2) is crucial. It means that **anyone
                on the network (including Owner 2, the new recipient)** can use `Owner 1's Public Key` (which is
                publicly available from the previous transaction where Owner 1 received the coin) to verify that `Owner
                1's Signature` is legitimate. This confirms that Owner 1 truly owned the coin and authorized its
                transfer to Owner 2.
              </li>
              <li>
                **Transaction 3 (Rightmost):** The pattern continues as **Owner 2** (now the **sender**) sends the coin
                to **Owner 3**. * `Owner 3's Public Key` (inside the block) is the **recipient** of this transaction. *
                Owner 2 uses their `Owner 2's Private Key` to sign the transaction, which is then verifiable by Owner 3
                or the network using Owner 2's public key.
              </li>
            </ul>
          </p>
          <p>
            This mechanism allows a payee to **verify the signatures to verify the chain of ownership** all the way back
            to the coin's origin, ensuring that each transfer was legitimately authorized by the previous owner. The
            problem of double-spending, however, still remains at this stage, as a sender could theoretically sign the
            same coin to multiple recipients. The subsequent sections of the whitepaper address how this is prevented.
          </p>
        </CardContent>
      </Card>

      {/* You can add more sections here as we go through the whitepaper */}
    </div>
  )
}
