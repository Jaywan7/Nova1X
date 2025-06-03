import { Ethics, EthicsValidationResult } from './delta/ethics';
import { SemFlag, SemanticFlag } from './delta/semflag';
import { Episteme, KnowledgeClassification } from './delta/episteme';

export interface ProcessResult {
  ethicsValidation: EthicsValidationResult;
  semanticFlags: SemanticFlag[];
  classification: KnowledgeClassification;
}

export class NovaKernelRuntime {
  private ethics: Ethics;
  private semFlag: SemFlag;
  private episteme: Episteme;

  constructor() {
    this.ethics = new Ethics();
    this.semFlag = new SemFlag();
    this.episteme = new Episteme();
  }

  async processInput(input: string): Promise<ProcessResult> {
    // Run all processors in parallel for better performance
    const [ethicsValidation, semanticFlags, classification] = await Promise.all([
      this.ethics.validate(input),
      this.semFlag.process(input),
      this.episteme.classify(input)
    ]);

    return {
      ethicsValidation,
      semanticFlags,
      classification
    };
  }
}