export type NavItemDataType = {
  text: string;
  href?: string | null;
  dropdownItems?: {
    text: string;
    href: string;
  }[];
};

// For the minimal blog data to be displayed in the cards
export type BlogDataType = {
  _id: string;
  createdAt: Date;
  heading: string;
  coverImg: {
    url: string;
    key: string;
  };
  paragraph: string;
};

export type BlogContentType = {
  type: string;
  value: string | string[];
};

export type BlogContentDoc = {
  type: string;
  value: string;
};

export type BlogDetailsType = {
  _id: string;
  createdAt: Date;
  heading: string;
  coverImg: { url: string; key: string };
  content: BlogContentType[];
};

export type BlogDocType = {
  _id: string;
  createdAt: Date;
  heading: string;
  coverImg: string;
  content: BlogContentDoc[];
};

// For the add blog form data
export type AddEditBlogInputType = {
  _id: string;
  heading: string;
  coverImg: { url: string; key: string; } | null;
  content: BlogContentType[];
};
