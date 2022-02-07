import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xFD2aB1BC5FE9Ac8FcCE4622AC7C11BDc314fD9EC");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "TheHackingSchoolDAO Membership",
      // A description for the collection.
      description: "A DAO for everyone associated to The Hacking School - Coding Bootcamp. From the founders to the employees to the bootcampers!",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/ths-trans.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()

//0x17C9F401fe85287665bD3102a1Fe3f35AE37f19C