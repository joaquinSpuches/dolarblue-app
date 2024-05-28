import scrape from '../../scrape';
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const price = await scrape();
        // res.status(200).json({ price });
        return NextResponse.json({ price });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el scraping' });
    }
}

