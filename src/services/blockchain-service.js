import { ethers } from 'ethers';
import KaiAbleABI from '../contracts/KaiAble.json';

const KAIA_TOKEN_ADDRESS = "0xCe7429F861eF809Be34cDE54d06d5291d2100068"; // Replace with actual Kaia token address
const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"; // You'll get this after deployment

export class BlockchainService {
    constructor() {
        this.provider = null;
        this.signer = null;
        this.contract = null;
        this.kaiaToken = null;
    }

    async initialize() {
        if (typeof window.ethereum === 'undefined') {
            throw new Error('Please install MetaMask');
        }

        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        await this.provider.send("eth_requestAccounts", []);
        this.signer = this.provider.getSigner();

        this.contract = new ethers.Contract(CONTRACT_ADDRESS, KaiAbleABI, this.signer);
    }

    // ... rest of the blockchain service code from previous artifact
}

export const blockchainService = new BlockchainService();