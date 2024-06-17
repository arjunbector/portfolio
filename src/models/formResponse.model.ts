import mongoose, { Schema } from "mongoose";
const formSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });
const FormResponse = mongoose.models.FormResponse || mongoose.model("FormResponse", formSchema);
export default FormResponse;
