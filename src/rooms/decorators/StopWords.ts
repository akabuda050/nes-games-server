import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { readFileAsync } from 'src/helpers/file-system';

@ValidatorConstraint({ async: true })
export class StopWordsConstraint implements ValidatorConstraintInterface {
  async validate(value: string, args: ValidationArguments): Promise<boolean> {
    const data = await readFileAsync('data/stop-words.json', 'utf-8');

    const stopWords = JSON.parse(data);
    return !stopWords.includes(value.trim());
  }
  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'You should avoid using stop words like ($value) in a name!';
  }
}

export const StopWords = (validationOptions?: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: StopWordsConstraint,
      async: true,
    });
  };
};