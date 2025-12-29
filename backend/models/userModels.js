import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: {
        restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
        items: {
            type: Object,
            default: {}
        }}
},{minimize: false})

const userModel = mongoose.model.users || mongoose.model("users", userSchema);
export default userModel;