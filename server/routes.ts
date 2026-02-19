import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { seed } from "./seed";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // seed(); // Call seed function - usually you'd check if data exists first, but for this portfolio site, we might just want to verify it works.
  // Actually, better not to seed on every restart for inquiries.
  // I'll leave it commented out or remove it if not needed.
  // For now, let's just register the route.

  app.post("/api/inquiries", async (req, res) => {
    try {
      const data = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(data);
      res.status(201).json(inquiry);
    } catch (error) {
      res.status(400).json({ error: "Invalid inquiry data" });
    }
  });

  return httpServer;
}
