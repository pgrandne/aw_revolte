import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

// const API_KEY = process.env.NFT_STORAGE_API_KEY
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDg0NzQ1N2IwOWU1NjY2RDE3NDAwOTQyODAwZTEyMjI0ODNiRDIxN0YiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDg1Mzk3OTEyNCwibmFtZSI6IlJldm9sdGUifQ.-qamTi_EpDBNmx60laDy_0tqdxQq0Y0sbGB_jzmEMPc"

async function storeAsset(asset) {
   const client = new NFTStorage({ token: API_KEY })
   const metadata = await client.store({
       name: asset.name,
       description: asset.description,
       image: new File(
           [await fs.promises.readFile(`assets/${asset.file}`)],
           asset.file,
           { type: 'image/png' }
       ),
   })
   console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

// NFT for the end of chapter 1 : ipfs://bafyreiagjggih5slbx3lfcd2mridz7csa2pz554l4matjie5wcbfusvyxy/metadata.json
const Nft_chapter1 = {
    name: 'Azad',
    description: 'Revolte.app : Chapter 1 Finished',
    file:'azad-chap1.png'
}

// NFT for the end of chapter 2 : ipfs://bafyreiagjggih5slbx3lfcd2mridz7csa2pz554l4matjie5wcbfusvyxy/metadata.json
const Nft_chapter2 = {
    name: 'Ruiz',
    description: 'Revolte.app : Chapter 2 Finished',
    file:'ruiz-chap2.png'
}

// NFT for the end of chapter 3 : ipfs://bafyreihb2sn5vinez3srb6ns7o47ofeacmffv2nf6lzxusbikafir5x3ve/metadata.json
const Nft_chapter3 = {
    name: 'Skyler',
    description: 'Revolte.app : Chapter 3 Finished',
    file:'skyler-chap3.png'
}

//store NFT (change the parameter according the NFT that you want)
storeAsset(Nft_chapter3)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });

