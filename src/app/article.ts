export class Article {
  public title: string;
  public description: string;
  public votes: number
  public publishedAt: Date;

  constructor(title: string, description:string, votes: number = 0){
    this.title = title;
    this.description = description;
    this.votes = votes;
    this.publishedAt = new Date();
  }

  public voteUp(): void {
    this.votes++;
  }

  public voteDown(): void {
    this.votes--;
  }


}
