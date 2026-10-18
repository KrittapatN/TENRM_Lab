export const navItems = ['home', 'academic', 'dissemination', 'engagement', 'collaborators', 'team', 'contact'];
export const navPath = (item: string) => (item === 'home' ? '/' : `/${item}`);
