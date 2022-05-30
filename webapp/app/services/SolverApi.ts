import axios from "axios";
import type { Coefficients } from "../components/CoefficientMatrix";

export class SudolverApi {
  async solve(coefficients: Coefficients, rhs: number[]): Promise<any> {
    const result = await axios.post(
      "https://linearequation-api.fly.dev/linearequation/analysis",
      { coefficients: coefficients, rhs: rhs },
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": (window as any).ENV!.API_KEY,
        },
      }
    );
    return result.data.solution;
  }
}