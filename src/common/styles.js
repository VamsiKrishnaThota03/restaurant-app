import { Platform } from 'react-native';

export const colors = {
  primary: '#f2700f',
  primaryDark: '#c2540a',
  primarySoft: '#fff1e6',
  text: '#1f2328',
  muted: '#6b7280',
  border: '#ececec',
  page: '#fafafa',
  surface: '#ffffff',
  star: '#f5a623',
  danger: '#c62828',
};

export const elevation = Platform.select({
  web: { boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  default: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
});
