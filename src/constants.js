const dotenv = require('dotenv');
dotenv.config();

export const APP_CONSTANTS = {
  ALCHEMY_KEY:`${process.env.ALCHEMY_KEY}`,
  CONTRACT_ADDRESS: `${process.env.CONTRACT_ADDRESS}`,
  OPENSEA_ASSETS_URL: `https://testnets.opensea.io/assets/mumbai`,
  CLIENT_ID:`${process.env.CLIENT_ID}`,
  RPC_TARGET:`${process.env.RPC_TARGET}`,
  APP_LOGO: `https://i.ibb.co/2gmPw9f/twitter-Dapp-Logo.jpg`,
  ADAPTER_TWITTER_CLIENT_VERIFIER: `${process.env.ADAPTER_TWITTER_CLIENT_VERIFIER}`,
  ADAPTER_TWITTER_CLIENT_ID: `${process.env.ADAPTER_TWITTER_CLIENT_ID}`,
  AUTH0_DOMAIN: `${process.env.AUTH0_DOMAIN}`,
  BIRD_IMAGE: `https://i.ibb.co/42WNxRN/reshot-icon-bird-TL39-D5-P8-YH.png`,
  REACT_APP_REFRESH_TIMER: 30,
};
