import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nl2br"
})
export class Nl2brPipe implements PipeTransform {
  transform(value: string, ...args): string {
    return value ? value.replace(/\n\r?/g, "<br />") : "";
  }
}
