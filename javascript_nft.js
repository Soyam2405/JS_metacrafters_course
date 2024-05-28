/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
let soyamNFTs = [];

// This function will take in values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.

function mintNFT(houseNo, landmark, numberOfPeople, netIncome) {
    let newNFT = {
        houseNo: houseNo,
        landmark: landmark,
        numberOfPeople: numberOfPeople,
        netIncome: netIncome
    };
    soyamNFTs.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs() {    
    for(let index=0;index<soyamNFTs.length;index++){
        let nft=soyamNFTs[index];
        console.log("\nNFT " + (index+1) + ":");
        console.log("------");
        console.log("House Number:\t\t\t\t\t", nft.houseNo);
        console.log("Landmark:\t\t\t\t\t\t", nft.landmark);
        console.log("Number of People in the House:\t", nft.numberOfPeople);
        console.log("Net Income of House Members:\t", nft.netIncome);
    };
}

// This function will help to show the total number of NFTs minted to the console

function getTotalSupply() {
    console.log("\nTotal number of NFTs minted:", soyamNFTs.length);
}

// Call the functions below this line
//minting the nfts

mintNFT("122-46B", "Hazaribagh", 8, "8000000");
mintNFT("129-21D", "Ranchi", 6, "5200000");
mintNFT("131-12A", "Jamshedpur", 4, "3500000");

// to show all the  minted NFTs we are calling this function

listNFTs();

// to get the count of total numbers of nfts minted 

getTotalSupply();
