import { model, Schema, Model, Document } from "mongoose";

export interface ITask extends Document {
  name: string;
  description: string;
  finished: boolean;
  createdDate: string;
  updatedDate: string;
  createdBy: string;
}

const TaskSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  finished: { type: Boolean, required: true },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  createdBy: { type: String, required: false },
});

export const TaskModel: Model<ITask> = model<ITask>("todos", TaskSchema);
