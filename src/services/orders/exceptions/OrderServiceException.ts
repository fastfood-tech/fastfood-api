export default class OrderServiceException extends Error {
  httpStatusCode: number;

  constructor(httpStatusCode: number, message?: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = OrderServiceException.name;
    this.httpStatusCode = httpStatusCode;
  }
}
