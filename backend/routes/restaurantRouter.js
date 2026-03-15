import express from "express";
import multer from "multer";
import { 
    addRestaurant, 
    getRestaurant, 
    listRestaurant, 
    removeRestaurant 
} from "../controllers/restaurantController.js";

const restaurantRouter = express.Router();

// Image storage engine
const _storage = multer.diskStorage({
    destination: "uploads/restaurants",
    filename:((req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    })
})
const upload = multer({storage: _storage});

restaurantRouter.post("/add", upload.single("image"), addRestaurant);
restaurantRouter.get("/list", listRestaurant);
restaurantRouter.post("/remove", removeRestaurant);
restaurantRouter.get("/:id", getRestaurant)

export default restaurantRouter;