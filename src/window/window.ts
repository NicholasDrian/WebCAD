export abstract class CADWindow {

  protected element: HTMLDivElement;
  private start: [number, number];
  private end: [number, number];

  constructor(name: string, start: [number, number]) {
    this.element = document.createElement("div");
    this.element.id = name;
    this.element.className = "floating-window";
    this.start = start;
    this.end = start;
    this.updateSize();
    document.body.appendChild(this.element);
  }

  public updateEnd(end: [number, number]): void {
    this.end = end;
    this.updateSize();
  }

  private updateSize(): void {
    const left: number = Math.min(this.start[0], this.end[0]);
    const top: number = Math.min(this.start[1], this.end[1]);
    const width: number = Math.abs(this.start[0] - this.end[0]);
    const height: number = Math.abs(this.start[1] - this.end[1]);
    console.log(left, top, width, height);
    this.element.setAttribute("style", `
      left:${left}px;
      top:${top}px;
      width:${width}px;
      height:${height}px;`
    );
  }

  public destroy(): void {
    document.body.removeChild(this.element);
  }

  public abstract populate(): void;
  public abstract tick(): void;

}
