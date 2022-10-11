export const handleApi = (key, ...args) => {
  switch (key.toUpperCase()) {
    case 'CONTACT_ME':
      return 'http://localhost:8082/api/v1/contacts';
    default:
      return null;
  }
};
