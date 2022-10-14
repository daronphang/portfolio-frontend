export const handleApi = (key, ...args) => {
  switch (key.toUpperCase()) {
    case 'CONTACT_ME':
      return 'https://api.daronphang.com/v1/contacts';
    default:
      return null;
  }
};
