export interface SemanticFlag {
  type: string;
  confidence: number;
  metadata?: Record<string, unknown>;
}

export class SemFlag {
  async process(input: string): Promise<SemanticFlag[]> {
    // Basic semantic flag processing
    const flags: SemanticFlag[] = [];
    
    if (input.includes('error')) {
      flags.push({
        type: 'error_reference',
        confidence: 0.9
      });
    }

    if (input.includes('warning')) {
      flags.push({
        type: 'warning_reference',
        confidence: 0.8
      });
    }

    // Always include an input length flag
    flags.push({
      type: 'input_length',
      confidence: 1.0,
      metadata: {
        length: input.length
      }
    });

    return flags;
  }
}