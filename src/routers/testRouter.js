import express from "express";
import { random } from "../controllers/testController";
import app from "../server";

const testRouter = express.Router();

testRouter.get("/random", random);

export default testRouter;
