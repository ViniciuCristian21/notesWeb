export class Notes {
  public readonly id?: string;
  public description: string;
  public date?: Date;
  constructor(props: Notes, id?: string) {
    Object.assign(this, props)

    if(props.description.trim() === ""){
      throw new Error("Description is empty!")
    }
  }
}
