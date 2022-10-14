export class Example {
  readonly owner: string = 'keleleo';
  readonly github: string = 'https://github.com/keleleo';
  public getInfo() {
    return `
owner: ${this.owner}
github: ${this.github}
`;
  }

  public processMessage(message: string) {
    return message.toUpperCase();
  }
}
