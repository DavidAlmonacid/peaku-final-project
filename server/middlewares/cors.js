import cors from "cors";

const ACCEPTED_ORIGINS = ["http://localhost:5173"];

export function corsMiddleware() {
  return cors({
    origin: (origin, callback) => {
      if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        return callback(null, true);
      }
      return callback(new Error("Origin not allowed by CORS"));
    }
  });
}
