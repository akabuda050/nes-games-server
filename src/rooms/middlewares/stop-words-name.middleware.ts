import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { readFile } from 'fs';
import { handleError } from 'src/helpers/handle-errors';
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
        throw new BadRequestException(
          `You should avoid using stop words in a name!`,
        );
      }

      next();
    } catch (e) {
      handleError(e);

      throw new InternalServerErrorException(`${e.message}`);
    }
  }
}
