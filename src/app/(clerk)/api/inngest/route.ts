import { inngest } from "@/services/inngest/client";
import { serve } from "inngest/next";

export const { GET, POST } = serve({
  client: inngest,
  functions: [],
});
