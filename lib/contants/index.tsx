import { FaSquareXTwitter, FaGithub, FaTelegram } from "react-icons/fa6";

export const titleTexts = [
  "privately",
];

export const subtitleTexts = [
  "own",
  "trade",
  "mint",
  "bridge",
  "transfer",
  "collect",
  "create",
  "manage",
  "govern",
];

export const description = "Privacy NFT marketplace focused on keeping your ownership and transactions private accross L2s"

export const features = [
  {
    title: "Private Ownership",
    description: "Maintain the privacy of your NFT holdings, ensuring that ownership details are not publicly accessible",
  },
  {
    title: "Private Trading",
    description: "Trade NFTs like a ghost, keeping buyer and seller identities, specific NFTs, and payment amounts private",
  },
  {
    title: "Non-Custodial Ownership",
    description: "Operates on a non-custodial model, allowing you to retain control over your assets without relying on third parties",
  },
  {
    title: "Cross-Chain Privacy",
    description: "Privately trade established collections from Aztec to any L2s via Tezac bridge system",
  },
]

export const roadmap = [
  { title: "", items: [] },
  {
    title: "Q1 Foundation",
    items: ["Privacy NFT Standards", "Privacy NFT Trading Protocol"],
  },
  { title: "", items: [] },
  {
    title: "Q2 Accelerate",
    items: ["First NFT Collection Launch", "Cross-chain NFT L2 Bridges"],
  },
  { title: "", items: [] },
  {
    title: "Q3 Scaling",
    items: ["Cross-chain NFT Trading Protocol"],
  },
  { title: "", items: [] },
]

export const socials = [
  {
    name: "Twitter",
    url: "https://x.com/andeebtceth",
    icon: <FaSquareXTwitter className="w-full h-full" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/+WI9728WPBOE0N2M1",
    icon: <FaTelegram className="w-full h-full" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/0xandee/tezac",
    icon: <FaGithub className="w-full h-full" />,
  },
];