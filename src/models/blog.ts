import { Schema, model, models } from "mongoose";

// BlogSchema with embedded coverImg and content
const BlogSchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    coverImg: {
      url: {
        type: String,
        required: true,
      },
      key: {
        type: String,
        required: true,
      },
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
    },
    content: [
      {
        type: new Schema(
          {
            type: { type: String, required: true },
            value: { type: Schema.Types.Mixed, required: true }, // Supports both string and array of strings
          },
          { _id: false },
        ),
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const BlogModel = models.blog || model("blog", BlogSchema);

export default BlogModel;
