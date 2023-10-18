import jwt from "jsonwebtoken";

const DEFAULT_OPTIONS = {
  expiresIn: "1h",
};

export const signJwtAccessToken = (payload: any, options = DEFAULT_OPTIONS) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  if (secretKey) {
    const token = jwt.sign(payload, secretKey, options);
    return token;
  }
  return null;
};

export const verifyJwt = (token: string) => {
  try {
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
      return null;
    }

    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (e) {
    console.error(e);
    return null;
  }
};
