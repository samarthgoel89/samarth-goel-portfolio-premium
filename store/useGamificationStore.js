import { create } from 'zustand';

// Badge Titles
const BADGES = {
  CASE_STUDIES: "The Scale Architect",
  PROJECTS: "Tech Explorer",
  EXPERIENCE: "Career Strategist",
  FULL_DISCOVERY: "Master Strategist",
};

export const useGamificationStore = create((set, get) => ({
  sectionsViewed: {
    hero: false,
    caseStudies: false,
    projects: false,
    experience: false,
    skills: false,
  },
  unlockedBadges: [],
  recentUnlock: null,

  markSectionViewed: (section) => {
    const state = get();
    if (state.sectionsViewed[section]) return; // already viewed

    set((state) => {
      const newSectionsViewed = { ...state.sectionsViewed, [section]: true };
      let newlyUnlocked = null;

      // Logic for unlocking badges
      if (section === 'caseStudies' && !state.unlockedBadges.includes(BADGES.CASE_STUDIES)) {
        newlyUnlocked = BADGES.CASE_STUDIES;
      } else if (section === 'projects' && !state.unlockedBadges.includes(BADGES.PROJECTS)) {
        newlyUnlocked = BADGES.PROJECTS;
      } else if (section === 'experience' && !state.unlockedBadges.includes(BADGES.EXPERIENCE)) {
        newlyUnlocked = BADGES.EXPERIENCE;
      }

      // Check if 100% discovered
      const allViewed = Object.values(newSectionsViewed).every(Boolean);
      if (allViewed && !state.unlockedBadges.includes(BADGES.FULL_DISCOVERY)) {
        newlyUnlocked = BADGES.FULL_DISCOVERY;
      }

      const updatedBadges = newlyUnlocked 
        ? [...state.unlockedBadges, newlyUnlocked] 
        : state.unlockedBadges;

      return {
        sectionsViewed: newSectionsViewed,
        unlockedBadges: updatedBadges,
        recentUnlock: newlyUnlocked || state.recentUnlock
      };
    });
  },

  clearRecentUnlock: () => set({ recentUnlock: null })
}));
