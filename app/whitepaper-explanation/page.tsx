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
            The abstract introduces the concept of a <strong>purely peer-to-peer electronic cash system</strong>, aiming
            to enable online payments directly between parties without the need for a financial institution. This
            immediately highlights the desire to remove intermediaries from financial transactions.
          </p>
          <p>
            It acknowledges that while digital signatures are a part of the solution for verifying ownership, they are
            insufficient on their own. The core problem remains:{" "}
            <strong>preventing double-spending without a trusted third party</strong>. If a central authority is still
            required for this, the fundamental benefits of a decentralized system are lost.
          </p>
          <p>
            The proposed solution involves a peer-to-peer network that timestamps transactions by hashing them into an
            <strong>ongoing chain of hash-based Proof-of-Work</strong>. This process creates an immutable record that
            cannot be altered without redoing the immense computational effort of the Proof-of-Work.
          </p>
          <p>
            A crucial aspect is the <strong>"longest chain" rule</strong>: this chain not only serves as proof of the
            sequence of events but also signifies that it originated from the largest pool of CPU power. The security of
            the network relies on the assumption that a majority of this CPU power is controlled by honest nodes, which
            will consistently outpace any attackers.
          </p>
          <p>
            Finally, the abstract emphasizes the network's <strong>minimal structure</strong>. Messages are broadcast on
            a best-effort basis, and nodes can freely join or leave, always accepting the longest Proof-of-Work chain as
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
            on <strong>financial institutions as trusted third parties</strong>. While seemingly functional, this system
            suffers from fundamental weaknesses rooted in the need for trust.
          </p>
          <p>
            A significant issue is the <strong>cost of mediation</strong>. Financial institutions mediate disputes and
            manage transactions, which incurs costs. These costs are passed on, limiting the feasibility of small,
            casual transactions (micropayments) and increasing overall transaction expenses for both consumers and
            merchants.
          </p>
          <p>
            A "broader cost" is identified in the{" "}
            <strong>loss of ability to make non-reversible payments for non-reversible services</strong>. In traditional
            systems, transactions can often be reversed (e.g., chargebacks). This creates uncertainty and risk for
            sellers, especially for digital goods or services that cannot be physically returned. This possibility of
            reversal affects both the sending and receiving parties.
          </p>
          <p>
            This highlights a key "selling point" of blockchain: its <strong>irreversibility</strong>. Once a
            transaction is confirmed on the blockchain, it is final and cannot be undone by a third party. This provides
            a level of certainty and completion that traditional payment systems often lack, ensuring payments are truly
            "100% (or even 110%) completed."
          </p>
          <p>
            The section concludes by emphasizing the need for an electronic payment system based on{" "}
            <strong>cryptographic proof instead of trust</strong>. This foundational shift aims to allow any two willing
            parties to transact directly, without the vulnerabilities and inefficiencies introduced by relying on a
            central authority. The identity and control of funds remain solely with the owner, protected by
            cryptography.
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
            The whitepaper defines an electronic coin as a <strong>chain of digital signatures</strong>. This means that
            the history of a coin's ownership is recorded through a series of cryptographic proofs.
          </p>
          <p>
            Each owner transfers the coin to the next by digitally signing two key pieces of information:
            <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
              <li>
                The <strong>hash of the previous transaction</strong> (which proves they received the coin).
              </li>
              <li>
                The <strong>public key of the next owner</strong> (the new recipient).
              </li>
            </ol>
            These signed elements are then added to the end of the "coin's" history, forming a new transaction.
          </p>
          <p>
            The diagram illustrates this chain of ownership:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>
                <strong>Transaction 1 (Leftmost):</strong> Implied <strong>Owner 0</strong> sends the coin to{" "}
                <strong>Owner 1</strong>. * `Owner 1's Public Key` (inside the block) is the <strong>recipient</strong>{" "}
                of this transaction. * Owner 0 uses their private key (not shown) to sign the transaction data, creating
                `Owner 0's Signature`.
              </li>
              <li>
                <strong>Transaction 2 (Middle):</strong> <strong>Owner 1</strong> (who was the recipient in Transaction
                1, now the <strong>sender</strong>) sends the coin to <strong>Owner 2</strong>. * `Owner 2's Public Key`
                (inside the block) is the <strong>recipient</strong> of this transaction. * Owner 1 uses their `Owner
                1's Private Key` (shown below the block) to `Sign` the hash of the *previous transaction* (Transaction
                1) and `Owner 2's Public Key`. This action <strong>creates</strong> `Owner 1's Signature`.
              </li>
              <li>
                <strong>Verification (from Transaction 1 to Transaction 2):</strong> The dashed "Verify" arrow from
                `Owner 1's Public Key` (from Transaction 1) to `Owner 1's Signature` (in Transaction 2) is crucial. It
                means that <strong>anyone on the network (including Owner 2, the new recipient)</strong> can use `Owner
                1's Public Key` (which is publicly available from the previous transaction where Owner 1 received the
                coin) to verify that `Owner 1's Signature` is legitimate. This confirms that Owner 1 truly owned the
                coin and authorized its transfer to Owner 2.
              </li>
              <li>
                <strong>Transaction 3 (Rightmost):</strong> The pattern continues as <strong>Owner 2</strong> (now the{" "}
                <strong>sender</strong>) sends the coin to <strong>Owner 3</strong>. * `Owner 3's Public Key` (inside
                the block) is the <strong>recipient</strong> of this transaction. * Owner 2 uses their `Owner 2's
                Private Key` to sign the transaction, which is then verifiable by Owner 3 or the network using Owner 2's
                public key.
              </li>
            </ul>
          </p>
          <p>
            This mechanism allows a payee to <strong>verify the signatures to verify the chain of ownership</strong> all
            the way back to the coin's origin, ensuring that each transfer was legitimately authorized by the previous
            owner. The problem of double-spending, however, still remains at this stage, as a sender could theoretically
            sign the same coin to multiple recipients. The subsequent sections of the whitepaper address how this is
            prevented.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Network Section */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            6. Network: Reaching Consensus Without Central Authority
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            How the peer-to-peer network achieves agreement on transaction history through computational proof.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            Once a valid block is found through the proof-of-work process, it's{" "}
            <strong>broadcast across the peer-to-peer network</strong>. This broadcasting is the first step in the
            consensus mechanism that allows the entire network to agree on the current state of the blockchain without
            requiring any central coordinator.
          </p>
          <p>
            Each node in the network <strong>independently verifies</strong> that the newly received block follows all
            protocol rules:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>
                All transactions within the block are <strong>valid</strong> (proper digital signatures, sufficient
                balances)
              </li>
              <li>
                There are <strong>no double spends</strong> (no coin is spent more than once)
              </li>
              <li>
                The block contains <strong>correct proof-of-work</strong> (the hash meets the required difficulty
                target)
              </li>
            </ul>
            This independent verification is crucial—no node simply trusts another node's word about a block's validity.
          </p>
          <p>
            If a node determines the block is valid, it <strong>accepts the block</strong> and shows its agreement in a
            subtle but powerful way: <strong>not by broadcasting a message</strong>, but by{" "}
            <strong>beginning work on the next block</strong> using the hash of the accepted block as its "previous
            hash." This action serves as both acceptance and a vote for that particular version of the blockchain's
            history.
          </p>
          <p>
            This mechanism is how <strong>consensus is formed</strong> in the Bitcoin network. All honest nodes
            naturally gravitate toward the chain with the <strong>most cumulative proof-of-work</strong> (referred to in
            the whitepaper as the <strong>"longest chain"</strong>). The "longest" here doesn't refer to the number of
            blocks, but rather to the chain representing the greatest amount of computational work invested.
          </p>
          <p>
            <strong>Temporary forks</strong> may occur when two miners find valid blocks at nearly the same time,
            creating competing versions of the blockchain. However, as more blocks are added, the network{" "}
            <strong>converges on the version of history backed by the most computational effort</strong>. Nodes always
            work on extending the chain they believe represents the most work, and eventually one chain will pull ahead,
            causing all honest nodes to abandon shorter chains.
          </p>
          <p>
            This elegant system ensures <strong>decentralization</strong>, <strong>tamper resistance</strong>, and a{" "}
            <strong>shared view of truth</strong>
            across the entire network—all without needing any central coordinator, voting mechanism, or trusted
            authority. The consensus emerges naturally from the economic incentives and computational competition built
            into the protocol itself.
          </p>
        </CardContent>
      </Card>

      {/* You can add more sections here as we go through the whitepaper */}
    </div>
  )
}
