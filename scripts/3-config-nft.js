import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x17C9F401fe85287665bD3102a1Fe3f35AE37f19C",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Founder's Card",
        description: "This NFT will give you access to The Hacking School DAO!",
        image: readFileSync("scripts/assets/MFC.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()