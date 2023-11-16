import OpenAI from "openai";
import { OPEN_KEY } from "./Constants";

const openai = new OpenAI({
  apiKey: OPEN_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;






