import { NextResponse } from "next/server";
import axios from "axios";

const apiKey = process.env.ETHERSCAN_API_KEY;
const baseUrl = "https://api.etherscan.io/v2/api";
const chainId = 1;

export async function GET() {
  try {
    const [supply, price, nodes] = await Promise.all([
      axios.get(
        `${baseUrl}?chainid=${chainId}&module=stats&action=ethsupply&apikey=${apiKey}`
      ),

      axios.get(
        `${baseUrl}?chainid=${chainId}&module=stats&action=ethprice&apikey=${apiKey}`
      ),
      axios.get(
        `${baseUrl}?chainid=${chainId}&module=stats&action=nodecount&apikey=${apiKey}`
      ),
    ]);

    return NextResponse.json({
      supply: parseInt(supply.data.result) / 1e18,
      priceBtc: parseFloat(price.data.result.ethbtc),
      priceUsd: parseFloat(price.data.result.ethusd),
      nodes: parseInt(nodes.data.result.TotalNodeCount),
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch ETH stats" },
      { status: 500 }
    );
  }
}
