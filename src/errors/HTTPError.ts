class HTTPError extends Error {
  public status: number;
  public name: string;

  constructor(name: string, message: string, status: number) {
    super(message);
    this.name = name;
    this.status = status;
  }
}

export default HTTPError;
