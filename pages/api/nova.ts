import type { NextApiRequest, NextApiResponse } from 'next';
import { NovaKernelRuntime } from '../../core/nova/core/kernel.runtime';

const kernel = new NovaKernelRuntime();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { input } = req.body;
    
    if (!input || typeof input !== 'string') {
      return res.status(400).json({ error: 'Invalid input' });
    }

    const result = await kernel.processInput(input);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error processing input:', error);
    res.status(500).json({ error: 'Processing failed' });
  }
}