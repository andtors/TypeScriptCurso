import { Request, Response } from "express";

// model
import { MovieModel } from "../models/Movie";

//Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
   try {

      const data = req.body
      const movie = await MovieModel.create(data)
      return res.status(201).json(movie)
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
   }
}

export async function findMovieById(req: Request, res: Response) {
   try {
      const id = req.params.id
      const movie = await MovieModel.findById({"_id": id})

      if (!movie) {
         return res.status(404).json({ error: "Filme não encontrado!" })
      }

      return res.status(200).json({movie})
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
   }
}

export async function getAllMovies(req: Request, res: Response){
   try {
      const movies = await MovieModel.find()
      return res.status(200).json({movies})
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
   }
}

export async function removeMovie(req:Request, res: Response){
   try {
      const id = req.params.id
      const movie = await MovieModel.deleteOne({"_id": id})
      if (!movie) {
         return res.status(404).json({ error: "Filme não encontrado!" })
      }

      return res.status(200).json({message: "Filme deletado!"})
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
      return res.status(500).json({message: "Por favor tente novamente mais tarde!"})
   }
}

export async function updateMovie(req: Request, res: Response) {
   try {

      const id = req.params.id
      const data = req.body
      const movie = await MovieModel.updateOne({"_id": id}, data)
      return res.status(201).json({message: "Filme atualizado!", data})
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
   }
}