import { FirebaseError } from "firebase/app";

class ServiceError extends FirebaseError {
  public name = "ServiceError";

  public service: string;
  public code: string;
  public message: string;
  public data: Record<string, unknown>;

  constructor({
    service,
    code,
    message,
    data,
  }: {
    service: string;
    code: string;
    message: string;
    data?: Record<string, unknown>;
  }) {
    super(code, message);
    this.service = service;
    this.code = code;
    this.message = message;
    this.data = data || {};
  }
}

export { ServiceError };
