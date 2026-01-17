export interface HomeUIState {
  welcomeMessage: string;
}

export type HomeCategorySectionId = 'finance' | 'travel' | 'health' | 'socials';

export type HomeCategoryItem = {
  id: string;
  label: string;
  iconSource: any;
};

export type HomeCategorySection = {
  id: HomeCategorySectionId;
  title: string;
  items: HomeCategoryItem[];
};

export type HomeSeeAllItem = { id: string; label: string };

export type HomeSeeAllConfig = {
  id: HomeCategorySectionId;
  title: string;
  items: HomeSeeAllItem[];
};


