import { Pipe, PipeTransform } from '@angular/core';
import { from, mergeMap, of, sequenceEqual, tap } from 'rxjs';

@Pipe({
  name: 'matchUrlSegment'
})
export class MatchUrlSegmentPipe implements PipeTransform {

  transform(currentURL: string | null, link: string): boolean {
    if (currentURL == null) return false;

    const links = link.split('/').filter(e =>  e);
    const currentURLs = currentURL.split('/').filter(e =>  e);
    const matches = links
      .map((link, i) => link == currentURLs[i])
      .includes(false);
    
    return !matches;
  }

}
