import { ValueObject } from "../../shared/ValueObject";

export class PostId extends ValueObject<number, "PostId"> {
  constructor(value: number) {
    super(value);
  }

  protected validate(value: number): void {
    if (value <= 0) {
      throw new Error("PostIdは1以上の整数でなければなりません");
    }
  }

  get value(): number {
    return this._value;
  }
}
