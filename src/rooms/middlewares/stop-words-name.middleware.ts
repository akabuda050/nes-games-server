import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { readFile } from 'fs';
import { promisify } from 'util';
const readFileAsync = promisify(readFile);

@Injectable()
export class StopWordsNameMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const stopWords = JSON.parse(
        await readFileAsync('data/stop-words.json', 'utf-8'),
      );
      if (!req.body?.name || stopWords.includes(req.body.name.toLowerCase())) {
        throw new HttpException(
          `You should avoid using stop words in the name`,
          HttpStatus.BAD_REQUEST,
        );
      }

      next();
    } catch (e) {
      throw new HttpException(`${e.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
