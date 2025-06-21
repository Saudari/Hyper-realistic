import Placeholder1 from "@/assets/placeholders/ae_moneychuck_01.jpg";
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


   



};

export interface Config {
  collection_id: string;




  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

 

  nftBanner?: Array<string>;
}


