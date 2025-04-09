import { users, type User, type InsertUser, ContactSubmission, InsertContact, NewsletterSubscriber, InsertNewsletter } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Newsletter subscribers
  createNewsletterSubscriber(subscriber: InsertNewsletter): Promise<NewsletterSubscriber>;
  getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined>;
  getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  private userId: number;
  private contactId: number;
  private newsletterId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscribers = new Map();
    this.userId = 1;
    this.contactId = 1;
    this.newsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const id = this.contactId++;
    const contactSubmission: ContactSubmission = { ...submission, id };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  
  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
  
  async createNewsletterSubscriber(subscriber: InsertNewsletter): Promise<NewsletterSubscriber> {
    const id = this.newsletterId++;
    const newsletterSubscriber: NewsletterSubscriber = { ...subscriber, id };
    this.newsletterSubscribers.set(id, newsletterSubscriber);
    return newsletterSubscriber;
  }
  
  async getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined> {
    return Array.from(this.newsletterSubscribers.values()).find(
      (subscriber) => subscriber.email === email
    );
  }
  
  async getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return Array.from(this.newsletterSubscribers.values());
  }
}

export const storage = new MemStorage();
