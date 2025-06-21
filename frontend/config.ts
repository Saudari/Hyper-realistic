import Placeholder1 from "@/assets/placeholders/.jpg";
//import Placeholder2 from "@/assets/placeholders/.jpg";
//import Placeholder3 from "@/assets/placeholders/.jpg";
//import Placeholder4 from "@/assets/placeholders/.jpg";
//import Placeholder5 from "@/assets/placeholders/.jpg";
//import Placeholder6 from "@/assets/placeholders/.jpg";
//import Placeholder7 from "@/assets/placeholders/.jpg";
//import Placeholder8 from "@/assets/placeholders/.jpg";
//import Placeholder9 from "@/assets/placeholders/.jpg";
//import Placeholder10 from "@/assets/placeholders/.jpg";
//import Placeholder11 from "@/assets/placeholders/.jpg";

import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "{title}",
    description: "",
    image: Placeholder1,
  },

  ourStory: {
    title: "{title}",
    subTitle: "Proin lorem",
    description: "",
    discordLink: "https://discord.com",
     images: [Placeholder1],
   // images: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11],
  },
   



};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
