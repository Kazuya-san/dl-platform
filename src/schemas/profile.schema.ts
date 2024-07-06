import { Schema, model, models } from "mongoose";

export interface ProfileDocument {
  userId: string;
  username: string;
  dob: Date | string;
  completed?: boolean;
}

const ProfileSchema = new Schema<ProfileDocument>({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  dob: { type: Date, required: true },
  completed: { type: Boolean, default: false },
});

export const ProfileModel = models.Profile || model("Profile", ProfileSchema);
