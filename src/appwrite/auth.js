import conf from "../conf/conf";
import { Client, Account } from "appwrite";

class AuthService {
  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(email, password, name);
      if (userAccount) {
        // call another account or handle the success case
      }
      return userAccount;
    } catch (error) {
      console.log(`error ${error}`);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(`error: ${error}`);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(`error: ${error}`);
      //using throw error is not necessary
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }
}

const authService = new AuthService();

export default authService;
