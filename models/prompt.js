import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Creator is required"],
    },
    prompt: {
      type: String,
      required: [true, "Prompt is required"],
    },
    tag: {
      type: String,
      required: [true, "Tag is required"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
