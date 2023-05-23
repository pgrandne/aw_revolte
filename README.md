# AW Revolte
Autonomous Worlds Hackathon with Revolte

Join the Web3 revolution with Revolte!

Our adventure game introduces users to the world of blockchain, wallets, tokens, and more, with mandatory tasks like wallet installation to guide players through the story. Explore real Web3 applications and experience the potential of this transformative technology. 

## Instructions
##### Clone the project
Clone the repository on your local machine
```bash
$ git clone https://github.com/pgrandne/aw_revolte.git
```

### Front End ###
We use React.
The Front End scripts are in "packages/client" folder.

### Contracts ###
We use MUD framework from latticexyz for core contracts.
The folder is in "packages/contracts".
We use .env for environment variables. Change the name of env.example to .env and fill in the variable:
   - We use PRIVATE KEY for interacting with the blockchain, save progression and mint NFTs

### NFT Storage ###
Metadata stored on Filecoin and IPFS with URL:
   - NFT Chapter 1 : ipfs://bafyreiagjggih5slbx3lfcd2mridz7csa2pz554l4matjie5wcbfusvyxy/metadata.json
   - NFT Chapter 2 : ipfs://bafyreiagjggih5slbx3lfcd2mridz7csa2pz554l4matjie5wcbfusvyxy/metadata.json
   - NFT Chapter 3 : ipfs://bafyreihb2sn5vinez3srb6ns7o47ofeacmffv2nf6lzxusbikafir5x3ve/metadata.json
### Launch Revolte ###
1. Go to "aw_revolte" folder
```bash
$ cd aw_revolte
```

2. Install the dependencies
```bash
$ pnpm install
```

3. Launch the application (local testnet and front end)
```bash
$ pnpm dev
```

4. Go to localhost in yout browsesr
```bash
http.//localhost:3000
```
