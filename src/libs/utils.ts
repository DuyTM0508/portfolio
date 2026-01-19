export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string") {
    return false;
  }
  
  const trimmedValue = value.trim();
  
  if (trimmedValue.length === 0 || trimmedValue.length > maxLength) {
    return false;
  }
  
  return true;
};

export const validateEmail = (email: unknown): email is string => {
  if (!validateString(email, 500)) {
    return false;
  }

  // RFC 5322 compliant email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email as string);
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};