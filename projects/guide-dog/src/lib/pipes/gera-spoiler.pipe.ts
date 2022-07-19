import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'geraspoiler'
})
export class GeraSpoilerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let input = value.split('</p>')[0] ?? '<p>';
    input = this.clearTags(input);
    input = `${input}</p>`;
    const tmp = document.createElement('DIV');
    tmp.innerHTML = input;
    return tmp.textContent || tmp.innerText || '';
  }

  private clearTags(value: string) {
    const output = value;

    return output.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "");
  }

}
