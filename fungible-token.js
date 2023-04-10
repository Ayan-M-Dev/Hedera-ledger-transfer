require("dotenv").config();
const { AccountId, PrivateKey, Client } = require("@hashgraph/sdk");

const aliceId = AccountId.fromString(process.env.ALICE_ACCOUNT_ID);
const aliceKey = PrivateKey.fromString(process.env.ALICE_PRIVATE_KEY);
const bobId = AccountId.fromString(process.env.BOB_ACCOUNT_ID);
const bobKey = PrivateKey.fromString(process.env.BOB_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(aliceId, aliceKey);

async function createFungibleToken() {
 // Part 1 - Create token


 // Part 2 - Associate token to user account


 // Part 3 - Check balance (before)


 // Part 4 - Transfer tokens


 // Part 5 - Check balance (after)


 client.close();
}

createFungibleToken();