'use server';

import axios, { AxiosError } from 'axios';
import { IGameSearchResult } from '@/interfaces/IGameSearchResult';

export async function searchByGameName(
  gameName: string,
): Promise<IGameSearchResult[] | undefined> {
  try {
    const apiqlQuery = `
    search "${gameName}";
    fields name, cover.url;
    where version_parent = null;
    `;

    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      apiqlQuery,
      {
        headers: {
          'Client-ID': process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
          'Content-Type': 'text/plain',
        },
      },
    );

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('API request failed:', err.message);
    }
  }
}
