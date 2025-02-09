import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaTelegram } from "react-icons/fa6";

export const phases = [
    {
      title: "Q2_Foundation",
      items: ["Private NFTs Mint & Transfer", "Private NFT Trading"],
    },
    {
      title: "Q3_Accelerate",
      items: ["Launchpad for Creators", "Blind Auctions"],
    },
    {
      title: "Q4_Scaling",
      items: ["Cross-Chain Trading on Ethereum", "Cross-Chain Trading on Solana"],
    },
  ]

  export const socials = [
    {
      name: "Twitter",
      url: "https://x.com/andeebtceth",
      icon: <BsTwitterX size={30} />,
    },
    {
      name: "Telegram",
      url: "https://t.me/+WI9728WPBOE0N2M1",
      icon: <FaTelegram size={30} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/0xandee/tezac",
      icon: <FaGithub size={30} />,
    },
  ];

  export   const features = [
    {
      title: "Private Ownership",
      description: "Securely encrypt NFT ownership data so that user identities remain confidential",
    },
    {},
    {
      title: "Private Auctions",
      description: "Sellers set secret reserve prices while buyers submit sealed bids",
    },
    {},
    {
      title: "Private Trading",
      description: "All trades are executed using private notes, ensuring every single trade remains discreet",
    },
    {},
    {
      title: "Cross-Chain Trading",
      description: "Private trade established L1 NFT collections through a bridge system",
    },
    {},
    {
      title: "Front-Running Resistance",
      description: "Time-locked, encrypted orders protect against front-running",
    },
    {},
    {
      title: "Mint, Launch Collections",
      description: "Creators can launch collections and allowing users to mint NFTs privately",
    },
    {},
  ]

  export const gridIntersections = [
    { x: 2, y: 1 },
    { x: 5, y: 3 },
    { x: 8, y: 2 },
    { x: 3, y: 4 },
    { x: 7, y: 5 },
  ]