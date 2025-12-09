
import { OfflineInteraction, OfflineNode } from '../types';
import { OFFLINE_KNOWLEDGE_BASE } from '../offlineData';

const OFFLINE_STORAGE_KEY = 'innosphere_offline_chats';

export const offlineService = {
  
  // Recursively find a node by ID in the tree
  findNode: (id: string, nodes: OfflineNode[] = OFFLINE_KNOWLEDGE_BASE): OfflineNode | undefined => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = offlineService.findNode(id, node.children);
        if (found) return found;
      }
    }
    return undefined;
  },

  // Get root nodes
  getRootNodes: (): OfflineNode[] => {
    return OFFLINE_KNOWLEDGE_BASE;
  },

  // Save an interaction log locally
  saveInteraction: (interaction: OfflineInteraction) => {
    try {
      const stored = localStorage.getItem(OFFLINE_STORAGE_KEY);
      const history: OfflineInteraction[] = stored ? JSON.parse(stored) : [];
      history.push(interaction);
      localStorage.setItem(OFFLINE_STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
      console.error("Failed to save offline interaction", e);
    }
  },

  // Get unsynced interactions
  getUnsyncedInteractions: (): OfflineInteraction[] => {
    try {
      const stored = localStorage.getItem(OFFLINE_STORAGE_KEY);
      const history: OfflineInteraction[] = stored ? JSON.parse(stored) : [];
      return history.filter(i => !i.synced);
    } catch (e) {
      return [];
    }
  },

  // Mock Sync Function (In real app, this sends data to backend)
  syncInteractions: async () => {
    const unsynced = offlineService.getUnsyncedInteractions();
    if (unsynced.length === 0) return;

    // Simulate API call
    console.log(`Syncing ${unsynced.length} offline interactions to cloud...`);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mark as synced
    try {
      const stored = localStorage.getItem(OFFLINE_STORAGE_KEY);
      const history: OfflineInteraction[] = stored ? JSON.parse(stored) : [];
      const updatedHistory = history.map(h => ({ ...h, synced: true }));
      localStorage.setItem(OFFLINE_STORAGE_KEY, JSON.stringify(updatedHistory));
      console.log("Sync complete.");
    } catch (e) {
      console.error("Sync failed", e);
    }
  }
};
