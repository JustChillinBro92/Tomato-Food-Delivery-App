import express from "express";
import multer from "multer";
import { 
    addFood, 
    getFoods, 
    listFood, 
    removeFood 
} from "../controllers/foodController.js";

const foodRouter = express.Router();

// Image storage engine
const _storage = multer.diskStorage({
    destination: "uploads/foods",
    filename:((req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    })
})
const upload = multer({storage: _storage});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/:id", getFoods);

export default foodRouter;