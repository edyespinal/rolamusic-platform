class ActionError extends Error {
  public name = "ActionError";

  public code: string;
  public message: string;

  constructor({ code, message }: { code: string; message: string }) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

export { ActionError };
