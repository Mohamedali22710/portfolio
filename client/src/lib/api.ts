import { Project, SkillCategory, ExperienceItem, MessageInput, MessageResponse } from '../types';
import { PROJECTS, SKILL_CATEGORIES, EXPERIENCES } from '../data/mockData';

const USE_MOCK = (import.meta as any).env?.VITE_USE_MOCK_API !== 'false';
const BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Generic API fetcher that switches between local mock data and real backend endpoints
 */
async function fetchFromBackend<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `API error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  /**
   * Fetch all portfolio projects
   */
  async getProjects(): Promise<Project[]> {
    if (USE_MOCK) {
      return Promise.resolve([...PROJECTS].sort((a, b) => a.order - b.order));
    }
    return fetchFromBackend<Project[]>('/projects');
  },

  /**
   * Fetch a single project case study by slug
   */
  async getProjectBySlug(slug: string): Promise<Project | null> {
    if (USE_MOCK) {
      const found = PROJECTS.find((p: Project) => p.slug === slug);
      return Promise.resolve(found || null);
    }
    return fetchFromBackend<Project>(`/projects/${slug}`).catch(() => null);
  },

  /**
   * Fetch categorized technical skills
   */
  async getSkills(): Promise<SkillCategory[]> {
    if (USE_MOCK) {
      return Promise.resolve(SKILL_CATEGORIES);
    }
    return fetchFromBackend<SkillCategory[]>('/skills');
  },

  /**
   * Fetch career experience, education, and credentials
   */
  async getExperience(): Promise<ExperienceItem[]> {
    if (USE_MOCK) {
      return Promise.resolve(EXPERIENCES);
    }
    return fetchFromBackend<ExperienceItem[]>('/experience');
  },

  /**
   * Submit contact form message
   */
  async sendMessage(payload: MessageInput): Promise<MessageResponse> {
    if (USE_MOCK) {
      // Simulate realistic network round-trip of 600ms
      await new Promise((resolve) => setTimeout(resolve, 600));
      return {
        success: true,
        message: 'Message delivered successfully. Mohamed will respond within 24 hours.',
      };
    }
    return fetchFromBackend<MessageResponse>('/messages', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
