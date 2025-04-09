import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, newsletterSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // contact form submission API
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const submission = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || "",
        company: validatedData.company || "",
        message: validatedData.message,
        createdAt: new Date().toISOString(),
      });
      
      res.status(201).json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ success: false, error: validationError.message });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ success: false, error: "Failed to process your request" });
      }
    }
  });

  // newsletter subscription API
  app.post("/api/newsletter/subscribe", async (req: Request, res: Response) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getNewsletterSubscriberByEmail(validatedData.email);
      
      if (existingSubscriber) {
        return res.status(200).json({ success: true, message: "Email already subscribed" });
      }
      
      const subscriber = await storage.createNewsletterSubscriber({
        email: validatedData.email,
        createdAt: new Date().toISOString(),
      });
      
      res.status(201).json({ success: true, data: subscriber });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ success: false, error: validationError.message });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ success: false, error: "Failed to process your request" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
