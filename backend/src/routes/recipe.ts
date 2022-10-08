import { Request, Response, NextFunction } from "express"
import { RecipeModel } from "../models";

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const {id} = req.params;
  try {
    const recipe = await RecipeModel.findById(id);
    res.send(recipe);
  } catch (error) {
    res.status(404).send(error);
  }
}
