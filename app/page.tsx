import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8 tracking-tight text-gray-900 dark:text-gray-50">
        Understanding the Bitcoin Whitepaper
      </h1>

      <div className="flex justify-center mb-12">
        <Link href="/abstract-flow">
          <Button variant="outline" className="text-lg px-6 py-3 bg-transparent">
            View Abstract Flow Visualization
          </Button>
        </Link>
      </div>

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
          <p>Each owner transfers the coin to the next by digitally signing two key pieces of information:</p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li>
              The <strong>hash of the previous transaction</strong> (which proves they received the coin).
            </li>
            <li>
              The <strong>public key of the next owner</strong> (the new recipient).
            </li>
          </ol>
          <p>These signed elements are then added to the end of the "coin's" history, forming a new transaction.</p>

          {/* Transaction Chain Visualization */}
          <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border">
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Transaction Chain Visualization
            </h4>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Transaction 1 */}
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-blue-300 min-w-[200px]">
                <h5 className="font-semibold text-center mb-2 text-blue-600 dark:text-blue-400">Transaction 1</h5>
                <div className="text-sm space-y-1">
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded">Owner 1's Public Key</div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">Owner 0's Signature</div>
                </div>
              </div>

              <div className="text-2xl text-gray-400">→</div>

              {/* Transaction 2 */}
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-green-300 min-w-[200px]">
                <h5 className="font-semibold text-center mb-2 text-green-600 dark:text-green-400">Transaction 2</h5>
                <div className="text-sm space-y-1">
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded">Hash of Tx1</div>
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded">Owner 2's Public Key</div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">Owner 1's Signature</div>
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <div>Owner 1's Private Key → Sign</div>
                </div>
              </div>

              <div className="text-2xl text-gray-400">→</div>

              {/* Transaction 3 */}
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-purple-300 min-w-[200px]">
                <h5 className="font-semibold text-center mb-2 text-purple-600 dark:text-purple-400">Transaction 3</h5>
                <div className="text-sm space-y-1">
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded">Hash of Tx2</div>
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded">Owner 3's Public Key</div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">Owner 2's Signature</div>
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <div>Owner 2's Private Key → Sign</div>
                </div>
              </div>
            </div>

            {/* Verification arrows */}
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              <p className="text-center font-medium mb-2">Verification Process:</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                  <strong>Verify Tx1 → Tx2:</strong> Use Owner 1's Public Key (from Tx1) to verify Owner 1's Signature
                  (in Tx2)
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                  <strong>Verify Tx2 → Tx3:</strong> Use Owner 2's Public Key (from Tx2) to verify Owner 2's Signature
                  (in Tx3)
                </div>
              </div>
            </div>
          </div>

          <p>The diagram illustrates this chain of ownership:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>
              <strong>Transaction 1 (Leftmost):</strong> Implied Owner 0 sends the coin to Owner 1. Owner 1's Public Key
              (inside the block) is the recipient of this transaction. Owner 0 uses their private key (not shown) to
              sign the transaction data, creating Owner 0's Signature.
            </li>
            <li>
              <strong>Transaction 2 (Middle):</strong> Owner 1 (who was the recipient in Transaction 1, now the sender)
              sends the coin to Owner 2. Owner 2's Public Key (inside the block) is the recipient of this transaction.
              Owner 1 uses their Owner 1's Private Key to Sign the hash of the previous transaction (Transaction 1) and
              Owner 2's Public Key. This action creates Owner 1's Signature.
            </li>
            <li>
              <strong>Verification (from Transaction 1 to Transaction 2):</strong> The verification process is crucial.
              It means that anyone on the network (including Owner 2, the new recipient) can use Owner 1's Public Key
              (which is publicly available from the previous transaction where Owner 1 received the coin) to verify that
              Owner 1's Signature is legitimate. This confirms that Owner 1 truly owned the coin and authorized its
              transfer to Owner 2.
            </li>
            <li>
              <strong>Transaction 3 (Rightmost):</strong> The pattern continues as Owner 2 (now the sender) sends the
              coin to Owner 3. Owner 3's Public Key (inside the block) is the recipient of this transaction. Owner 2
              uses their Owner 2's Private Key to sign the transaction, which is then verifiable by Owner 3 or the
              network using Owner 2's public key.
            </li>
          </ul>
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

      {/* Timestamp Server Section */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            4. Timestamp Server: Preventing Double-Spending
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            How a decentralized timestamping mechanism ensures a single, agreed-upon history of transactions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            To solve the double-spending problem in a decentralized manner, the Bitcoin whitepaper introduces the
            concept of a <strong>Timestamp Server</strong>. This server takes a hash of a block of items to be
            timestamped and <strong>publicly publishes the hash</strong>.
          </p>
          <p>
            The timestamp proves that the data must have existed at that time, because obviously{" "}
            <strong>the hash couldn't be generated without the data being there</strong>. This is a simple but powerful
            concept - you can't create a hash of something that doesn't exist.
          </p>

          {/* Timestamp Chain Visualization */}
          <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border">
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Timestamp Chain Visualization
            </h4>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Timestamp 1 */}
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-blue-300 min-w-[180px]">
                <h5 className="font-semibold text-center mb-2 text-blue-600 dark:text-blue-400">Timestamp 1</h5>
                <div className="text-sm space-y-2">
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded text-center">Block Data</div>
                  <div className="text-center">↓ Hash</div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded text-center font-mono text-xs">
                    Hash: abc123...
                  </div>
                </div>
              </div>

              <div className="text-2xl text-gray-400">→</div>

              {/* Timestamp 2 */}
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-green-300 min-w-[180px]">
                <h5 className="font-semibold text-center mb-2 text-green-600 dark:text-green-400">Timestamp 2</h5>
                <div className="text-sm space-y-2">
                  <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded text-center">Previous Hash: abc123...</div>
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded text-center">New Block Data</div>
                  <div className="text-center">↓ Hash</div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded text-center font-mono text-xs">
                    Hash: def456...
                  </div>
                </div>
              </div>

              <div className="text-2xl text-gray-400">→</div>

              {/* Timestamp 3 */}
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-purple-300 min-w-[180px]">
                <h5 className="font-semibold text-center mb-2 text-purple-600 dark:text-purple-400">Timestamp 3</h5>
                <div className="text-sm space-y-2">
                  <div className="bg-green-100 dark:bg-green-800 p-2 rounded text-center">Previous Hash: def456...</div>
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded text-center">New Block Data</div>
                  <div className="text-center">↓ Hash</div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded text-center font-mono text-xs">
                    Hash: ghi789...
                  </div>
                </div>
              </div>
            </div>

            {/* Chain explanation */}
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              <p className="text-center font-medium mb-2">How the Chain Forms:</p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                <p className="mb-2">
                  <strong>Each timestamp includes the previous timestamp in its hash</strong>, creating an unbreakable
                  chain:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Timestamp 2's hash includes Timestamp 1's hash (abc123...)</li>
                  <li>Timestamp 3's hash includes Timestamp 2's hash (def456...)</li>
                  <li>This pattern continues, linking each timestamp to all previous ones</li>
                </ul>
              </div>
            </div>
          </div>

          <p>
            The crucial innovation is that <strong>each timestamp includes the previous timestamp in its hash</strong>,
            forming a chain. This creates what the whitepaper calls "reinforcement" - here's why this is so powerful:
          </p>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
            <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Understanding "Reinforcement":</h5>
            <div className="space-y-3 text-amber-900 dark:text-amber-100">
              <p>
                <strong>1. Immutability through Dependency:</strong> If someone tries to alter the data in Timestamp 1,
                its hash would change from "abc123..." to something else. But Timestamp 2 specifically includes
                "abc123..." in its own hash calculation.
              </p>
              <p>
                <strong>2. Cascading Protection:</strong> If Timestamp 1's hash changes, then Timestamp 2's hash would
                also have to change (since it depends on the previous hash). This would then require Timestamp 3's hash
                to change, and so on.
              </p>
              <p>
                <strong>3. Exponential Difficulty:</strong> To successfully alter any historical data, an attacker would
                need to recalculate not just that timestamp's hash, but ALL subsequent timestamps in the chain. The
                further back in time the data is, the more work required to alter it.
              </p>
              <p>
                <strong>4. "Reinforcement" Effect:</strong> Each new timestamp added to the chain makes ALL previous
                timestamps more secure. It's like adding another lock to a door - each additional timestamp "reinforces"
                the security of everything that came before it.
              </p>
            </div>
          </div>

          <p>
            This mechanism provides a way to establish the chronological order of transactions without a trusted third
            party. By chaining timestamps, the network can verify the sequence in which transactions were broadcast and
            accepted, ensuring that the first valid transaction for a given coin is the one that counts, effectively
            preventing double-spending attempts.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
