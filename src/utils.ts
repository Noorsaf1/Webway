export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const re = /^[0-9\s-]+$/;
  return re.test(phone) && phone.replace(/[\s-]/g, '').length >= 8;
};

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));