import {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  GatewayTimeoutException,
  GoneException,
  HttpVersionNotSupportedException,
  ImATeapotException,
  InternalServerErrorException,
  MethodNotAllowedException,
  NotAcceptableException,
  NotFoundException,
  NotImplementedException,
  PayloadTooLargeException,
  PreconditionFailedException,
  RequestTimeoutException,
  ServiceUnavailableException,
  UnauthorizedException,
  UnprocessableEntityException,
  UnsupportedMediaTypeException,
} from '@nestjs/common';

export const handleError = (error: Error): void => {
  const exceptions = new Map([
    ['Bad Request', BadRequestException],
    ['Unauthorized', UnauthorizedException],
    ['Not Found', NotFoundException],
    ['Forbidden', ForbiddenException],
    ['Not Acceptable', NotAcceptableException],
    ['Request Timeout', RequestTimeoutException],
    ['Conflict', ConflictException],
    ['Gone', GoneException],
    ['Http Version Not Supported', HttpVersionNotSupportedException],
    ['Payload Too Large', PayloadTooLargeException],
    ['Unsupported Media Type', UnsupportedMediaTypeException],
    ['Unprocessable Entity', UnprocessableEntityException],
    ['Internal Server Error', InternalServerErrorException],
    ['Not Implemented', NotImplementedException],
    ['Im A Teapot', ImATeapotException],
    ['Method Not Allowed', MethodNotAllowedException],
    ['Bad Gateway', BadGatewayException],
    ['Service Unavailable', ServiceUnavailableException],
    ['Gateway Timeout', GatewayTimeoutException],
    ['Precondition Failed', PreconditionFailedException],
  ]);

  for (const exceptionType of exceptions.values()) {
    if (error instanceof exceptionType) {
      throw error;
    }
  }
};
